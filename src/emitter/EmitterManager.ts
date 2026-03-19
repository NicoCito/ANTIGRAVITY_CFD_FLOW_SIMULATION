// ===== Emitter Manager =====

import type { EmitterConfig, EventBus } from '../app/types';
import { Emitter } from './Emitter';

export class EmitterManager {
  public emitter: Emitter;
  private bus: EventBus;

  constructor(config: EmitterConfig, bus: EventBus) {
    this.bus = bus;
    this.emitter = new Emitter(config);
  }

  updateConfig(config: Partial<EmitterConfig>): void {
    this.emitter.updateConfig(config);
    this.bus.emit('emitter:updated');
  }

  getConfig(): EmitterConfig {
    return this.emitter.getConfig();
  }

  dispose(): void {
    this.emitter.dispose();
  }
}
