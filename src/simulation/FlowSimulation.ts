// ===== Flow Simulation =====
// Main simulation controller: spawns particles, applies forces, handles obstacle interaction

import * as THREE from 'three';
import type { FlowConfig, DisplayConfig, EmitterConfig, ObstacleData, EventBus } from '../app/types';
import { ParticleSystem } from './ParticleSystem';
import { TrailSystem } from './TrailSystem';
import { SmokeSystem } from './SmokeSystem';
import { FlowField } from './FlowField';
import { addTurbulence } from './FlowMath';
import { computeObstacleInfluence } from '../obstacles/InfluenceUtils';
import type { Emitter } from '../emitter/Emitter';
import type { ObstacleManager } from '../obstacles/ObstacleManager';
import { randomRange } from '../utils/math';

export class FlowSimulation {
  public particleSystem: ParticleSystem;
  public trailSystem: TrailSystem;
  public smokeSystem: SmokeSystem;
  public flowField: FlowField;

  private emitter: Emitter;
  private totalTime = 0;
  private obstacleManager: ObstacleManager;
  private flowConfig: FlowConfig;
  private displayConfig: DisplayConfig;
  private emitterConfig: EmitterConfig;
  private bus: EventBus;

  private playing = true;
  private spawnAccumulator = 0;

  constructor(
    emitter: Emitter,
    obstacleManager: ObstacleManager,
    flowConfig: FlowConfig,
    displayConfig: DisplayConfig,
    emitterConfig: EmitterConfig,
    bus: EventBus,
  ) {
    this.emitter = emitter;
    this.obstacleManager = obstacleManager;
    this.flowConfig = { ...flowConfig };
    this.displayConfig = { ...displayConfig };
    this.emitterConfig = { ...emitterConfig };
    this.bus = bus;

    this.flowField = new FlowField(emitter);
    this.flowField.baseSpeed = flowConfig.speed;

    this.particleSystem = new ParticleSystem(flowConfig.maxParticleCount);
    this.trailSystem = new TrailSystem(flowConfig.maxParticleCount, flowConfig.trailLength);
    this.smokeSystem = new SmokeSystem(flowConfig.maxParticleCount, flowConfig.trailLength);

    this.setupEvents();
  }

  private setupEvents(): void {
    this.bus.on('simulation:play', () => { this.playing = true; });
    this.bus.on('simulation:pause', () => { this.playing = false; });
    this.bus.on('simulation:restart', () => { this.restart(); });
    this.bus.on('simulation:reset', () => { this.resetAll(); });
    this.bus.on('config:flow', (e) => { this.updateFlowConfig(e.data as Partial<FlowConfig>); });
    this.bus.on('config:display', (e) => { this.updateDisplayConfig(e.data as Partial<DisplayConfig>); });
    this.bus.on('config:emitter', (e) => { Object.assign(this.emitterConfig, e.data); });
  }

  updateFlowConfig(config: Partial<FlowConfig>): void {
    Object.assign(this.flowConfig, config);
    if (config.speed !== undefined) {
      this.flowField.baseSpeed = config.speed;
    }
  }

  updateDisplayConfig(config: Partial<DisplayConfig>): void {
    Object.assign(this.displayConfig, config);
    if (config.renderMode) {
      this.particleSystem.setRenderMode(config.renderMode);
    }
  }

  update(dt: number): void {
    if (!this.playing || dt === 0) return;
    this.totalTime += dt;

    // Update flow field base direction from emitter
    this.flowField.update();

    // Spawn new particles
    this.spawnParticles(dt);

    // Update existing particles
    this.updateParticles(dt);

    // Update visual buffers
    this.particleSystem.updateBuffers(this.flowConfig, this.displayConfig);
    this.trailSystem.update(this.particleSystem.particles, this.flowConfig, this.displayConfig);
    this.smokeSystem.update(this.particleSystem.particles, this.flowConfig, this.displayConfig);
  }

  private spawnParticles(dt: number): void {
    const spawnPoints = this.emitter.getWorldSpawnPoints();
    if (spawnPoints.length === 0) return;

    // Scale spawn rate dynamically based on the grid density
    const effectiveRate = this.emitterConfig.spawnRate * spawnPoints.length;
    this.spawnAccumulator += effectiveRate * dt;

    const flowDir = this.flowField.baseDirection;
    const speed = this.flowConfig.speed;
    const offset = this.emitterConfig.flowStartOffset;

    while (this.spawnAccumulator >= 1) {
      this.spawnAccumulator -= 1;

      // Pick a random spawn point
      const idx = Math.floor(randomRange(0, spawnPoints.length));
      const spawnPos = spawnPoints[idx].clone();

      // Apply offset along flow direction
      spawnPos.addScaledVector(flowDir, offset);

      // Initial velocity
      const vel = flowDir.clone().multiplyScalar(speed);

      // Add slight initial spread
      vel.x += randomRange(-0.1, 0.1) * speed;
      vel.y += randomRange(-0.1, 0.1) * speed;
      vel.z += randomRange(-0.1, 0.1) * speed;

      this.particleSystem.spawn(spawnPos, vel, this.flowConfig.particleLifetime);
    }
  }

  private updateParticles(dt: number): void {
    const obstacles = this.obstacleManager.getAll();
    const baseDir = this.flowField.baseDirection;
    const config = this.flowConfig;
    
    // Wind gravity constantly pushes particles along the flow
    const windForce = baseDir.clone().multiplyScalar(config.windGravity * dt * 10.0);

    // O(n) Spatial hashing for particle-particle repulsion (Self collision)
    const gridSize = Math.max(config.particleSize * 2.0, 0.5);
    const grid = new Map<string, { count: number, center: THREE.Vector3 }>();
    
    if (config.particleRepulsion > 0) {
      for (const p of this.particleSystem.particles) {
        if (!p.alive) continue;
        const gx = Math.floor(p.position.x / gridSize);
        const gy = Math.floor(p.position.y / gridSize);
        const gz = Math.floor(p.position.z / gridSize);
        const key = `${gx},${gy},${gz}`;
        
        let cell = grid.get(key);
        if (!cell) {
          cell = { count: 0, center: new THREE.Vector3() };
          grid.set(key, cell);
        }
        cell.count++;
        cell.center.add(p.position);
      }
      grid.forEach(cell => cell.center.multiplyScalar(1 / cell.count));
    }

    // We can reuse one raycaster
    const raycaster = new THREE.Raycaster();
    for (const p of this.particleSystem.particles) {
      if (!p.alive) continue;

      // Age particle
      p.age += dt;
      if (p.age >= p.lifetime) {
        p.alive = false;
        continue;
      }

      // Calculate intended movement delta
      const deltaPos = p.velocity.clone().multiplyScalar(dt);
      const dist = deltaPos.length();

      let bounced = false;

      // 1. Raycast collision check against exact mesh surfaces
      if (dist > 0.0001 && obstacles.length > 0) {
        // Setback the raycast origin deeply behind the particle to completely banish 
        // high-velocity numerical tunneling or overlapping mesh spawning.
        const dir = deltaPos.clone().normalize();
        const setback = Math.max(config.particleSize, 0.5);
        const origin = p.position.clone().addScaledVector(dir, -setback);

        const _raycaster = new THREE.Raycaster(origin, dir);
        _raycaster.far = dist + setback;
        (_raycaster as any).firstHitOnly = true;

        const visibleMeshes = obstacles.filter(o => o.visible).map(o => o.mesh);
        if (visibleMeshes.length > 0) {
          const hits = _raycaster.intersectObjects(visibleMeshes, false);
          
          if (hits.length > 0) {
            const hit = hits[0];
            const N = hit.face?.normal || new THREE.Vector3(0, 1, 0);
            
            // Adjust normal to world space if mesh is transformed
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
            const worldNormal = N.clone().applyMatrix3(normalMatrix).normalize();

            // Absolute Zero-Tolerance Inner Boundary Breach Elimination Check
            // If the particle hit the back of a face, it is trapped inside a volume!
            let dot = p.velocity.dot(worldNormal);
            if (dot > 0) {
              // Only spare perfectly 2D flat Planes (since they have no inner volume, both sides are valid)
              if (hit.object.userData?.obstacleShape === 'plane') {
                worldNormal.negate();
                dot = p.velocity.dot(worldNormal);
              } else {
                // If it's a solid STL, kill the particle instantly to avoid it casually roaming inside transparent shapes.
                p.alive = false;
                continue;
              }
            }

            // Surface Sliding Fluid Physics: Remove inward normal velocity instead of raw reflection
            if (dot < 0) {
              p.velocity.addScaledVector(worldNormal, -dot);
              
              // Mild sliding friction
              const slideFriction = Math.max(0, 1.0 - config.bounceStrength * 0.05);
              p.velocity.multiplyScalar(slideFriction);
              
              const pushOut = Math.max(config.particleSize * 0.5 + 0.05, config.speed * dt * 0.5);
              p.position.copy(hit.point).add(worldNormal.multiplyScalar(pushOut));
              
              // Artificial tangent air bypass push (Resistance Steering mapped to the generic bounce scale)
              const tangent = baseDir.clone().projectOnPlane(worldNormal).normalize();
              p.velocity.addScaledVector(tangent, config.bounceStrength * 2.0);

              p.impactFactor = 1.0;
              bounced = true;
            }
          }
        }
      }

      if (bounced) {
        // Skip fluid integration this frame to ensure proper bounce physics
        deltaPos.set(0, 0, 0);
      } else {
        // 2. Apply obstacle fluid influences (wake / curve)
        for (const obs of obstacles) {
          const influence = computeObstacleInfluence(p.position, p.velocity, baseDir, obs, config);
          
          if (influence.impactFactor > 0 || influence.wakeFactor > 0) {
            p.velocity.add(influence.deflection.multiplyScalar(dt));
          }

          p.impactFactor = Math.max(p.impactFactor, influence.impactFactor);
          p.wakeFactor = Math.max(p.wakeFactor, influence.wakeFactor);
        }
      }

      // Add Divergence-free Curl Turbulence
      addTurbulence(p.velocity, p.position, this.totalTime, config.turbulenceStrength * dt * 80.0);

      // Apply forward wind gravity
      p.velocity.add(windForce);

      // Spatial particle-particle outward density spreading
      if (config.particleRepulsion > 0) {
        const gx = Math.floor(p.position.x / gridSize);
        const gy = Math.floor(p.position.y / gridSize);
        const gz = Math.floor(p.position.z / gridSize);
        const cell = grid.get(`${gx},${gy},${gz}`);
        
        if (cell && cell.count > 1) {
          const toCenter = new THREE.Vector3().subVectors(p.position, cell.center);
          if (toCenter.lengthSq() > 0.0001) {
            toCenter.normalize();
            // Pushes particles outward based on relative density of the cell
            p.velocity.add(toCenter.multiplyScalar(config.particleRepulsion * cell.count * dt * 5.0));
          } else {
            // Apply jitter if exactly overlapping
            p.velocity.x += (Math.random() - 0.5) * config.particleRepulsion;
            p.velocity.y += (Math.random() - 0.5) * config.particleRepulsion;
            p.velocity.z += (Math.random() - 0.5) * config.particleRepulsion;
          }
        }
      }

      // Clamp speed
      const maxSpeed = config.speed * 3;
      if (p.velocity.length() > maxSpeed) {
        p.velocity.normalize().multiplyScalar(maxSpeed);
      }

      // Integrate position if we didn't bounce
      p.position.add(bounced ? new THREE.Vector3(0,0,0) : deltaPos);

      // Update trail
      p.trail.push(p.position.clone());
      if (p.trail.length > config.trailLength + 1) {
        p.trail.shift();
      }
    }
  }

  restart(): void {
    this.particleSystem.reset();
    this.spawnAccumulator = 0;
    this.playing = true;
  }

  resetAll(): void {
    this.restart();
  }

  isPlaying(): boolean {
    return this.playing;
  }

  getObjects(): THREE.Object3D[] {
    return [this.particleSystem.points, this.trailSystem.mesh, this.smokeSystem.points];
  }

  dispose(): void {
    this.particleSystem.dispose();
    this.trailSystem.dispose();
    this.smokeSystem.dispose();
  }
}
