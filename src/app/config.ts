// ===== Default Configuration Values =====

import type { EmitterConfig, FlowConfig, DisplayConfig } from './types';

export const DEFAULT_EMITTER: EmitterConfig = {
  width: 6,
  height: 6,
  densityX: 8,
  densityY: 8,
  spawnRate: 2,
  flowStartOffset: 0.5,
  visible: true,
};

export const DEFAULT_FLOW: FlowConfig = {
  speed: 3.0,
  length: 30,
  particleLifetime: 8.0,
  particleSize: 0.01,
  trailLength: 20,
  trailOpacity: 0.4,
  turbulenceStrength: 0.15,
  recoveryStrength: 0.1,
  influenceDistance: 0.5,
  bufferDistance: 0.5,
  wakeStrength: 0.5,
  wakeLength: 5.0,
  bounceStrength: 0.8,
  maxParticleCount: 15000,
  windGravity: 1.5,
  particleRepulsion: 0.5,
};

export const DEFAULT_DISPLAY: DisplayConfig = {
  showGrid: true,
  showAxes: true,
  showEmitter: true,
  showObstacleBounds: false,
  backgroundColor: '#0d1117',
  flowColor: '#58a6ff',
  impactColor: '#f0883e',
  wakeColor: '#bc8cff',
  renderMode: 'particles',
  showSmokeTrails: false,
  flowDensity: 1.0,
};
