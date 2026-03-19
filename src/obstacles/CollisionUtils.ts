// ===== Collision Utilities =====

import * as THREE from 'three';
import type { ObstacleData } from '../app/types';

const _tempVec = new THREE.Vector3();

/** Broad-phase check: is point within influence distance of the obstacle? */
export function isInInfluenceRange(
  point: THREE.Vector3,
  obstacle: ObstacleData,
  influenceDistance: number,
): boolean {
  const dist = obstacle.boundingSphere.distanceToPoint(point);
  return dist < influenceDistance;
}

/** Get the distance from a point to the nearest surface of the obstacle bounding box */
export function distanceToBBox(point: THREE.Vector3, obstacle: ObstacleData): number {
  const closest = obstacle.boundingBox.clampPoint(point, _tempVec);
  return point.distanceTo(closest);
}

/** Get the closest point on the obstacle bounding box */
export function closestPointOnBBox(point: THREE.Vector3, obstacle: ObstacleData, target: THREE.Vector3): THREE.Vector3 {
  return obstacle.boundingBox.clampPoint(point, target);
}

/** Check if a point is inside the obstacle bounding box (with optional buffer) */
export function isInsideBBox(point: THREE.Vector3, obstacle: ObstacleData, buffer: number = 0): boolean {
  if (buffer === 0) {
    return obstacle.boundingBox.containsPoint(point);
  }
  const expanded = obstacle.boundingBox.clone().expandByScalar(buffer);
  return expanded.containsPoint(point);
}

/** Get the normal pointing away from the obstacle center toward the point */
export function getRepulsionDirection(
  point: THREE.Vector3,
  obstacle: ObstacleData,
  target: THREE.Vector3,
): THREE.Vector3 {
  const center = new THREE.Vector3();
  obstacle.boundingBox.getCenter(center);
  target.subVectors(point, center).normalize();
  if (target.lengthSq() < 0.001) {
    // Point is at center; push upward
    target.set(0, 1, 0);
  }
  return target;
}

/** Get a tangential deviation direction (perpendicular to the flow and push directions) */
export function getTangentialDeviation(
  flowDir: THREE.Vector3,
  pushDir: THREE.Vector3,
  target: THREE.Vector3,
): THREE.Vector3 {
  target.crossVectors(flowDir, pushDir).normalize();
  if (target.lengthSq() < 0.001) {
    // Fallback: pick arbitrary perpendicular
    const up = Math.abs(flowDir.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    target.crossVectors(flowDir, up).normalize();
  }
  return target;
}
