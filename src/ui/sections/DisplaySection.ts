// ===== Display Section =====

import type { EventBus, DisplayConfig } from '../../app/types';
import { createSection, createToggle, createColorPicker, createSlider } from './UIHelpers';

export class DisplaySection {
  constructor(parent: HTMLElement, bus: EventBus, config: DisplayConfig) {
    const { body } = createSection(parent, '🎨', 'Display');

    createToggle(body, 'Show Grid', config.showGrid, (v) => {
      bus.emit('config:display', { showGrid: v });
    }, 'Toggle ground grid');

    createToggle(body, 'Show Axes', config.showAxes, (v) => {
      bus.emit('config:display', { showAxes: v });
    }, 'Toggle XYZ axes');

    createToggle(body, 'Show Emitter', config.showEmitter, (v) => {
      bus.emit('config:display', { showEmitter: v });
      bus.emit('config:emitter', { visible: v });
    }, 'Toggle emitter visibility');

    createToggle(body, 'Show Bounds', config.showObstacleBounds, (v) => {
      bus.emit('config:display', { showObstacleBounds: v });
    }, 'Show obstacle bounding boxes');

    const sep = document.createElement('div');
    sep.className = 'separator';
    body.appendChild(sep);

    createColorPicker(body, 'Background', config.backgroundColor, (v) => {
      bus.emit('config:display', { backgroundColor: v });
    });

    createColorPicker(body, 'Flow Color', config.flowColor, (v) => {
      bus.emit('config:display', { flowColor: v });
    });

    createColorPicker(body, 'Impact Color', config.impactColor, (v) => {
      bus.emit('config:display', { impactColor: v });
    });

    createColorPicker(body, 'Wake Color', config.wakeColor, (v) => {
      bus.emit('config:display', { wakeColor: v });
    });

    const sep2 = document.createElement('div');
    sep2.className = 'separator';
    body.appendChild(sep2);

    // Render mode toggle
    createToggle(body, 'Smoke Mode', config.renderMode === 'smoke', (v) => {
      bus.emit('config:display', { renderMode: v ? 'smoke' : 'particles' });
    }, 'Toggle between particle and smoke rendering');

    createToggle(body, 'Smoke Trails', config.showSmokeTrails, (v) => {
      bus.emit('config:display', { showSmokeTrails: v });
    }, 'Render volumetric clouds along trails');

    createSlider(body, 'Flow Density', config.flowDensity, 0.1, 5.0, 0.1, (v) => {
      bus.emit('config:display', { flowDensity: v });
    }, 'Visual thickness of flow and smoke');
  }
}
