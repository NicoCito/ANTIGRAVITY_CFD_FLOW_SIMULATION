// ===== Shared Type Definitions =====

import * as THREE from 'three';

// --- Obstacle Types ---
export type ObstacleType = 'plane' | 'box' | 'sphere' | 'cylinder' | 'torus' | 'cone' | 'stl';

export type CollisionMode = 'simplified' | 'enhanced';

export interface ObstacleData {
  id: string;
  name: string;
  type: ObstacleType;
  mesh: THREE.Mesh;
  visible: boolean;
  selectable: boolean;
  transformable: boolean;
  boundingBox: THREE.Box3;
  boundingSphere: THREE.Sphere;
  collisionMode: CollisionMode;
  metadata?: Record<string, any>;
}

export interface STLMetadata {
  sourceFileName: string;
  triangleCount: number;
  autoCentered: boolean;
  autoScaled: boolean;
  originalBoundingSize: THREE.Vector3;
}

export interface STLObstacleData extends ObstacleData {
  type: 'stl';
  metadata: STLMetadata;
}

// --- Emitter Config ---
export interface EmitterConfig {
  width: number;
  height: number;
  densityX: number;
  densityY: number;
  spawnRate: number;
  flowStartOffset: number;
  visible: boolean;
}

// --- Flow Config ---
export interface FlowConfig {
  speed: number;
  length: number;
  particleLifetime: number;
  particleSize: number;
  trailLength: number;
  trailOpacity: number;
  turbulenceStrength: number;
  recoveryStrength: number;
  influenceDistance: number;
  bufferDistance: number;
  wakeStrength: number;
  wakeLength: number;
  bounceStrength: number;
  maxParticleCount: number;
  windGravity: number;
  particleRepulsion: number;
}

// --- Display Config ---
export type RenderMode = 'particles' | 'smoke';

export interface DisplayConfig {
  showGrid: boolean;
  showAxes: boolean;
  showEmitter: boolean;
  showObstacleBounds: boolean;
  backgroundColor: string;
  flowColor: string;
  impactColor: string;
  wakeColor: string;
  renderMode: RenderMode;
  showSmokeTrails: boolean;
  flowDensity: number;
}

// --- Particle ---
export interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  baseDirection: THREE.Vector3;
  age: number;
  lifetime: number;
  alive: boolean;
  trail: THREE.Vector3[];
  impactFactor: number; // 0=free, 1=full impact
  wakeFactor: number;   // 0=free, 1=full wake
}

// --- Selection ---
export interface SelectionInfo {
  id: string;
  name: string;
  type: ObstacleType | 'emitter';
  mesh: THREE.Object3D;
}

// --- Scene State (Serializable) ---
export interface SerializedObstacle {
  id: string;
  name: string;
  type: ObstacleType;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  collisionMode: CollisionMode;
  stlMetadata?: {
    sourceFileName: string;
    triangleCount: number;
    autoCentered: boolean;
    autoScaled: boolean;
  };
}

export interface SceneState {
  version: number;
  emitter: EmitterConfig & {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  flow: FlowConfig;
  display: DisplayConfig;
  obstacles: SerializedObstacle[];
}

// --- Event Types ---
export type AppEventType =
  | 'selection:changed'
  | 'obstacle:added'
  | 'obstacle:removed'
  | 'obstacle:transformed'
  | 'emitter:updated'
  | 'config:flow'
  | 'config:display'
  | 'config:emitter'
  | 'simulation:play'
  | 'simulation:pause'
  | 'simulation:restart'
  | 'simulation:reset'
  | 'transform:mode'
  | 'stl:loaded'
  | 'stl:error'
  | 'scene:save'
  | 'scene:load';

export interface AppEvent {
  type: AppEventType;
  data?: unknown;
}

export type AppEventHandler = (event: AppEvent) => void;

// --- Simple Event Bus ---
export class EventBus {
  private listeners = new Map<AppEventType, Set<AppEventHandler>>();

  on(type: AppEventType, handler: AppEventHandler): void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(handler);
  }

  off(type: AppEventType, handler: AppEventHandler): void {
    this.listeners.get(type)?.delete(handler);
  }

  emit(type: AppEventType, data?: unknown): void {
    this.listeners.get(type)?.forEach(handler => handler({ type, data }));
  }
}
