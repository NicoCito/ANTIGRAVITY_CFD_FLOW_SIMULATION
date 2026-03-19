// ===== Trail System =====
// Renders trails behind particles as line segments

import * as THREE from 'three';
import type { Particle, FlowConfig, DisplayConfig } from '../app/types';

export class TrailSystem {
  public mesh: THREE.LineSegments;

  private maxSegments: number;
  private positions: Float32Array;
  private colors: Float32Array;
  private geometry: THREE.BufferGeometry;
  private material: THREE.LineBasicMaterial;

  constructor(maxParticles: number, trailLength: number) {
    // Each particle can have trailLength segments, each segment has 2 vertices
    this.maxSegments = maxParticles * trailLength;
    const maxVertices = this.maxSegments * 2;
    this.positions = new Float32Array(maxVertices * 3);
    this.colors = new Float32Array(maxVertices * 3);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    this.material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.mesh = new THREE.LineSegments(this.geometry, this.material);
    this.mesh.frustumCulled = false;
  }

  /** Update trail buffers from particle trail data */
  update(particles: Particle[], flowConfig: FlowConfig, displayConfig: DisplayConfig): void {
    const trailLen = flowConfig.trailLength;
    this.material.opacity = Math.min(flowConfig.trailOpacity * displayConfig.flowDensity, 1.0);

    const flowColor = new THREE.Color(displayConfig.flowColor);
    const impactColor = new THREE.Color(displayConfig.impactColor);
    const wakeColor = new THREE.Color(displayConfig.wakeColor);

    let segIdx = 0;
    const maxSegs = this.maxSegments;

    for (const p of particles) {
      if (!p.alive || p.trail.length < 2) continue;

      const trail = p.trail;
      const len = Math.min(trail.length - 1, trailLen);

      for (let i = 0; i < len && segIdx < maxSegs; i++) {
        const a = trail[trail.length - 1 - i];
        const b = trail[trail.length - 2 - i];

        const vi = segIdx * 6; // 2 vertices * 3 components
        this.positions[vi] = a.x;
        this.positions[vi + 1] = a.y;
        this.positions[vi + 2] = a.z;
        this.positions[vi + 3] = b.x;
        this.positions[vi + 4] = b.y;
        this.positions[vi + 5] = b.z;

        // Color with fade based on trail position
        const fade = 1 - i / len;
        let color = flowColor.clone();
        if (p.impactFactor > 0.1) color.lerp(impactColor, p.impactFactor);
        else if (p.wakeFactor > 0.1) color.lerp(wakeColor, p.wakeFactor);
        color.multiplyScalar(fade);

        this.colors[vi] = color.r;
        this.colors[vi + 1] = color.g;
        this.colors[vi + 2] = color.b;
        this.colors[vi + 3] = color.r * 0.7;
        this.colors[vi + 4] = color.g * 0.7;
        this.colors[vi + 5] = color.b * 0.7;

        segIdx++;
      }
    }

    // Zero-out remaining segments
    for (let i = segIdx; i < maxSegs; i++) {
      const vi = i * 6;
      this.positions[vi] = 0;
      this.positions[vi + 1] = -9999;
      this.positions[vi + 2] = 0;
      this.positions[vi + 3] = 0;
      this.positions[vi + 4] = -9999;
      this.positions[vi + 5] = 0;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.setDrawRange(0, segIdx * 2);
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}
