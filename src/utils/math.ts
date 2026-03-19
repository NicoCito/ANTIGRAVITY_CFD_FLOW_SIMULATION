// ===== Math Utilities =====

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function remap(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return lerp(outMin, outMax, t);
}

export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function randomSign(): number {
  return Math.random() < 0.5 ? -1 : 1;
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
