// ===== Object Utilities =====

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeConfig<T extends Record<string, unknown>>(base: T, overrides: Partial<T>): T {
  return { ...base, ...overrides };
}
