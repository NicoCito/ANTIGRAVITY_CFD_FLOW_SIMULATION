// ===== Flow Section =====

import type { EventBus, FlowConfig } from '../../app/types';
import { createSection, createSlider } from './UIHelpers';

export class FlowSection {
  constructor(parent: HTMLElement, bus: EventBus, config: FlowConfig) {
    const { body } = createSection(parent, '🌊', 'Flow');

    createSlider(body, 'Speed', config.speed, 0.1, 50, 0.5, (v) => {
      bus.emit('config:flow', { speed: v });
    }, 'Base flow velocity');

    createSlider(body, 'Lifetime', config.particleLifetime, 0.5, 20, 0.5, (v) => {
      bus.emit('config:flow', { particleLifetime: v });
    }, 'Simulation extent limit');

    createSlider(body, 'Particle Size', config.particleSize, 0.01, 10, 0.01, (v) => {
      bus.emit('config:flow', { particleSize: v });
    });

    createSlider(body, 'Turbulence', config.turbulenceStrength, 0, 50, 0.5, (v) => {
      bus.emit('config:flow', { turbulenceStrength: v });
    }, 'Random perturbation strength');

    createSlider(body, 'Bounce', config.bounceStrength, 0, 10, 0.1, (v) => {
      bus.emit('config:flow', { bounceStrength: v });
    }, 'Particle bounciness on obstacles');

    createSlider(body, 'Wind Gravity', config.windGravity, 0, 10, 0.5, (v) => {
      bus.emit('config:flow', { windGravity: v });
    }, 'Constant push toward flow direction');

    createSlider(body, 'Self-Collision', config.particleRepulsion, 0, 2, 0.1, (v) => {
      bus.emit('config:flow', { particleRepulsion: v });
    }, 'Particle volume outward pressure');

    const sep = document.createElement('div');
    sep.className = 'separator';
    body.appendChild(sep);

    createSlider(body, 'Max Particles', config.maxParticleCount, 1000, 100000, 1000, (v) => {
      bus.emit('config:flow', { maxParticleCount: v });
    }, 'Maximum particle count');
  }
}
