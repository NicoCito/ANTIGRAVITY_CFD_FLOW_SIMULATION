// ===== Influence Utilities =====
// Computes how obstacles affect particle trajectories

import * as THREE from 'three';
import type { ObstacleData, FlowConfig } from '../app/types';
import {
  isInInfluenceRange,
  distanceToBBox,
  closestPointOnBBox,
  isInsideBBox,
  getRepulsionDirection,
  getTangentialDeviation,
} from './CollisionUtils';
import { smoothstep, randomRange } from '../utils/math';

// Reusable vectors to avoid allocations in the hot loop
const _push = new THREE.Vector3();
const _tangent = new THREE.Vector3();
const _closest = new THREE.Vector3();
const _toParticle = new THREE.Vector3();
const _wakeOffset = new THREE.Vector3();

export interface InfluenceResult {
  deflection: THREE.Vector3;
  impactFactor: number;
  wakeFactor: number;
  repelled: boolean;
  normal?: THREE.Vector3;
}

const _result: InfluenceResult = {
  deflection: new THREE.Vector3(),
  impactFactor: 0,
  wakeFactor: 0,
  repelled: false,
};

/** Compute the total influence of a single obstacle on a particle */
export function computeObstacleInfluence(
  particlePos: THREE.Vector3,
  particleVel: THREE.Vector3,
  baseFlowDir: THREE.Vector3,
  obstacle: ObstacleData,
  config: FlowConfig,
): InfluenceResult {
  _result.deflection.set(0, 0, 0);
  _result.impactFactor = 0;
  _result.wakeFactor = 0;
  _result.repelled = false;

  // Skip invisible
  if (!obstacle.visible) return _result;

  // Broad phase
  if (!isInInfluenceRange(particlePos, obstacle, config.influenceDistance)) {
    // Check wake zone - behind the obstacle relative to flow
    const obstCenter = new THREE.Vector3();
    obstacle.boundingBox.getCenter(obstCenter);
    const toParticle = _toParticle.subVectors(particlePos, obstCenter);
    const dotFlow = toParticle.dot(baseFlowDir);

    if (dotFlow > 0 && dotFlow < config.wakeLength) {
      const lateralDist = toParticle.clone().addScaledVector(baseFlowDir, -dotFlow).length();
      const obstSize = new THREE.Vector3();
      obstacle.boundingBox.getSize(obstSize);
      const wakeRadius = Math.max(obstSize.x, obstSize.y, obstSize.z) * 0.8;

      if (lateralDist < wakeRadius) {
        const wakeFalloff = 1 - smoothstep(0, config.wakeLength, dotFlow);
        const lateralFalloff = 1 - smoothstep(0, wakeRadius, lateralDist);
        const wakeStrength = wakeFalloff * lateralFalloff * config.wakeStrength;

        // Add turbulent noise in wake
        _wakeOffset.set(
          randomRange(-1, 1),
          randomRange(-1, 1),
          randomRange(-1, 1),
        ).normalize().multiplyScalar(wakeStrength * 0.5);

        _result.deflection.copy(_wakeOffset);
        _result.wakeFactor = wakeStrength;
      }
    }
    return _result;
  }

  // Full collision is now handled by raycasting in FlowSimulation.ts
  // This just processes wake turbulence and tangential deviation

  const dist = distanceToBBox(particlePos, obstacle);

  // Influence zone: smooth falloff
  const influence = 1 - smoothstep(0, config.influenceDistance, dist);
  if (influence < 0.001) return _result;

  // Repulsion force (pushes away from surface)
  closestPointOnBBox(particlePos, obstacle, _closest);
  _push.subVectors(particlePos, _closest).normalize();
  if (_push.lengthSq() < 0.001) {
    getRepulsionDirection(particlePos, obstacle, _push);
  }

  // Tangential deviation (makes particles flow around)
  getTangentialDeviation(baseFlowDir, _push, _tangent);

  // Add slight noise near surface
  const noise = randomRange(-0.15, 0.15) * influence;

  // Combine forces
  const repulsionWeight = influence * 1.5;
  const tangentWeight = influence * 1.2;

  _result.deflection
    .addScaledVector(_push, repulsionWeight * config.speed)
    .addScaledVector(_tangent, tangentWeight * config.speed)
    .addScaledVector(baseFlowDir, noise);

  _result.impactFactor = influence;
  return _result;
}

/** Apply recovery toward the base flow direction */
export function applyRecovery(
  velocity: THREE.Vector3,
  baseFlowDir: THREE.Vector3,
  speed: number,
  recoveryStrength: number,
  dt: number,
): void {
  const targetVel = baseFlowDir.clone().multiplyScalar(speed);
  velocity.lerp(targetVel, recoveryStrength * dt);
}
