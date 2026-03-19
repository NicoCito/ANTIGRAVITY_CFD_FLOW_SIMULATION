// ===== Color Utilities =====

import * as THREE from 'three';

export function hexToThreeColor(hex: string): THREE.Color {
  return new THREE.Color(hex);
}

export function threeColorToHex(color: THREE.Color): string {
  return '#' + color.getHexString();
}

export function lerpColor(a: THREE.Color, b: THREE.Color, t: number): THREE.Color {
  return a.clone().lerp(b, t);
}
