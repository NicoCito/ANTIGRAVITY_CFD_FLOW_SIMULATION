// ===== Smoke System =====
// Renders volumetric soft points along particle trails to mimic smoke

import * as THREE from 'three';
import type { Particle, FlowConfig, DisplayConfig } from '../app/types';

/** Generates a soft radial gradient texture for fuzzy smoke points */
function createSmokeTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export class SmokeSystem {
  public points: THREE.Points;

  private maxSegments: number;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  
  constructor(maxParticles: number, trailLength: number) {
    this.maxSegments = maxParticles * trailLength;
    this.positions = new Float32Array(this.maxSegments * 3);
    this.colors = new Float32Array(this.maxSegments * 3);
    this.sizes = new Float32Array(this.maxSegments);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    this.material = new THREE.PointsMaterial({
      map: createSmokeTexture(),
      size: 1.0, // Base scale, adjusted per point via buffer
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.15, // Very sheer
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
  }

  update(particles: Particle[], flowConfig: FlowConfig, displayConfig: DisplayConfig): void {
    if (!displayConfig.showSmokeTrails) {
      this.points.visible = false;
      return;
    }
    this.points.visible = true;

    const trailLen = flowConfig.trailLength;
    const baseSize = Math.max(flowConfig.particleSize * 4, 1.0) * displayConfig.flowDensity;
    
    // We increase opacity slightly based on trail Opacity slider and visual density
    this.material.opacity = Math.min(flowConfig.trailOpacity * displayConfig.flowDensity * 0.5, 1.0);

    const flowColor = new THREE.Color(displayConfig.flowColor);
    const impactColor = new THREE.Color(displayConfig.impactColor);
    const wakeColor = new THREE.Color(displayConfig.wakeColor);

    let idx = 0;
    const maxPts = this.maxSegments;

    for (const p of particles) {
      if (!p.alive || p.trail.length < 1) continue;

      const trail = p.trail;
      const len = Math.min(trail.length, trailLen);

      // Distribute points along the saved trail array
      for (let i = 0; i < len && idx < maxPts; i++) {
        const pt = trail[trail.length - 1 - i];

        this.positions[idx * 3] = pt.x;
        this.positions[idx * 3 + 1] = pt.y;
        this.positions[idx * 3 + 2] = pt.z;

        // Color mix
        let color = flowColor.clone();
        if (p.impactFactor > 0.1) color.lerp(impactColor, p.impactFactor);
        else if (p.wakeFactor > 0.1) color.lerp(wakeColor, p.wakeFactor);

        // Older trailing points fade out and expand creating "billowing smoke"
        const ageFrac = i / len;
        const fade = 1 - ageFrac;
        color.multiplyScalar(fade);

        this.colors[idx * 3] = color.r;
        this.colors[idx * 3 + 1] = color.g;
        this.colors[idx * 3 + 2] = color.b;

        // Spread/billow effect: smoke gets wider as it ages
        this.sizes[idx] = baseSize * (1 + ageFrac * 2.5);

        idx++;
      }
    }

    // Zero-out remaining to vanish them
    for (let i = idx; i < maxPts; i++) {
      this.positions[i * 3] = 0;
      this.positions[i * 3 + 1] = -9999;
      this.positions[i * 3 + 2] = 0;
      this.sizes[i] = 0;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.setDrawRange(0, idx);
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    if (this.material.map) this.material.map.dispose();
  }
}
