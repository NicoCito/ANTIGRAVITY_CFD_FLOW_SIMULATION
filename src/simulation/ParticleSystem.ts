// ===== Particle System =====
// Efficient particle pool using BufferGeometry + Points

import * as THREE from 'three';
import type { Particle, FlowConfig, DisplayConfig } from '../app/types';
import { hexToThreeColor, lerpColor } from '../utils/colors';

export class ParticleSystem {
  public points: THREE.Points;
  public particles: Particle[] = [];

  private maxCount: number;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private aliveCount = 0;

  // Color cache
  private flowColor = new THREE.Color(0x58a6ff);
  private impactColor = new THREE.Color(0xf0883e);
  private wakeColor = new THREE.Color(0xbc8cff);

  constructor(maxCount: number) {
    this.maxCount = maxCount;
    this.positions = new Float32Array(maxCount * 3);
    this.colors = new Float32Array(maxCount * 3);
    this.sizes = new Float32Array(maxCount);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    this.material = new THREE.PointsMaterial({
      size: 2.5,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;

    // Pre-fill particle pool
    for (let i = 0; i < maxCount; i++) {
      this.particles.push({
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        baseDirection: new THREE.Vector3(),
        age: 0,
        lifetime: 5,
        alive: false,
        trail: [],
        impactFactor: 0,
        wakeFactor: 0,
      });
    }
  }

  /** Spawn a new particle from the pool */
  spawn(position: THREE.Vector3, velocity: THREE.Vector3, lifetime: number): Particle | null {
    for (let i = 0; i < this.maxCount; i++) {
      const p = this.particles[i];
      if (!p.alive) {
        p.position.copy(position);
        p.velocity.copy(velocity);
        p.baseDirection.copy(velocity).normalize();
        p.age = 0;
        p.lifetime = lifetime;
        p.alive = true;
        p.trail = [position.clone()];
        p.impactFactor = 0;
        p.wakeFactor = 0;
        return p;
      }
    }
    return null; // Pool exhausted
  }

  /** Get number of alive particles */
  getAliveCount(): number {
    return this.aliveCount;
  }

  /** Update buffers from particle data */
  updateBuffers(config: FlowConfig, displayConfig: DisplayConfig): void {
    this.flowColor.set(displayConfig.flowColor);
    this.impactColor.set(displayConfig.impactColor);
    this.wakeColor.set(displayConfig.wakeColor);

    this.material.size = config.particleSize;
    this.aliveCount = 0;

    const _color = new THREE.Color();

    for (let i = 0; i < this.maxCount; i++) {
      const p = this.particles[i];
      if (!p.alive) {
        this.positions[i * 3] = 0;
        this.positions[i * 3 + 1] = -9999; // Off-screen
        this.positions[i * 3 + 2] = 0;
        this.sizes[i] = 0;
        continue;
      }

      this.aliveCount++;
      this.positions[i * 3] = p.position.x;
      this.positions[i * 3 + 1] = p.position.y;
      this.positions[i * 3 + 2] = p.position.z;

      // Color based on impact/wake
      if (p.impactFactor > 0.1) {
        _color.copy(this.flowColor).lerp(this.impactColor, p.impactFactor);
      } else if (p.wakeFactor > 0.1) {
        _color.copy(this.flowColor).lerp(this.wakeColor, p.wakeFactor);
      } else {
        _color.copy(this.flowColor);
      }

      // Fade with age
      const lifeFrac = p.age / p.lifetime;
      const fade = lifeFrac > 0.7 ? 1 - (lifeFrac - 0.7) / 0.3 : 1;
      _color.multiplyScalar(fade);

      this.colors[i * 3] = _color.r;
      this.colors[i * 3 + 1] = _color.g;
      this.colors[i * 3 + 2] = _color.b;

      this.sizes[i] = config.particleSize * (1 - lifeFrac * 0.3);
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.setDrawRange(0, this.maxCount);
  }

  /** Set rendering mode */
  setRenderMode(mode: 'particles' | 'smoke'): void {
    if (mode === 'smoke') {
      this.material.blending = THREE.AdditiveBlending;
      this.material.opacity = 0.3;
      this.material.size = 5;
    } else {
      this.material.blending = THREE.AdditiveBlending;
      this.material.opacity = 0.85;
    }
  }

  /** Reset all particles */
  reset(): void {
    for (const p of this.particles) {
      p.alive = false;
      p.trail = [];
    }
    this.aliveCount = 0;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}
