// ===== Emitter Section =====

import type { EventBus, EmitterConfig } from '../../app/types';
import { createSection, createSlider } from './UIHelpers';

export class EmitterSection {
  constructor(parent: HTMLElement, bus: EventBus, config: EmitterConfig) {
    const { body } = createSection(parent, '📡', 'Emitter');

    createSlider(body, 'Width', config.width, 1, 20, 0.5, (v) => {
      bus.emit('config:emitter', { width: v });
    }, 'Emitter plane width');

    createSlider(body, 'Height', config.height, 1, 20, 0.5, (v) => {
      bus.emit('config:emitter', { height: v });
    }, 'Emitter plane height');

    createSlider(body, 'Density X', config.densityX, 1, 200, 1, (v) => {
      bus.emit('config:emitter', { densityX: v });
    }, 'Spawn points along X');

    createSlider(body, 'Density Y', config.densityY, 1, 200, 1, (v) => {
      bus.emit('config:emitter', { densityY: v });
    }, 'Spawn points along Y');

    createSlider(body, 'Emission/Point', config.spawnRate, 1, 100, 1, (v) => {
      bus.emit('config:emitter', { spawnRate: v });
    }, 'Particles per second per point');

    createSlider(body, 'Flow Offset', config.flowStartOffset, 0, 3, 0.1, (v) => {
      bus.emit('config:emitter', { flowStartOffset: v });
    }, 'Start offset along flow direction');
  }
}
