// ===== Simulation Section =====

import type { EventBus } from '../../app/types';
import { createSection, createButton } from './UIHelpers';

export class SimulationSection {
  constructor(parent: HTMLElement, bus: EventBus) {
    const { body } = createSection(parent, '▶', 'Simulation');

    const row1 = document.createElement('div');
    row1.className = 'btn-row';
    createButton(row1, '▶ Play', () => bus.emit('simulation:play'), 'success');
    createButton(row1, '⏸ Pause', () => bus.emit('simulation:pause'), '');
    body.appendChild(row1);

    const row2 = document.createElement('div');
    row2.className = 'btn-row';
    createButton(row2, '↻ Restart', () => bus.emit('simulation:restart'), '');
    createButton(row2, '🗑 Reset All', () => bus.emit('simulation:reset'), 'danger');
    body.appendChild(row2);
  }
}
