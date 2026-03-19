// ===== Input Manager =====

import type { EventBus } from '../app/types';
import type { TransformController } from './TransformController';
import type { SelectionManager } from './SelectionManager';

export class InputManager {
  private bus: EventBus;
  private transformController: TransformController;
  private selectionManager: SelectionManager;
  private onKeyDown: (e: KeyboardEvent) => void;

  constructor(
    bus: EventBus,
    transformController: TransformController,
    selectionManager: SelectionManager,
    onDelete: (id: string) => void,
  ) {
    this.bus = bus;
    this.transformController = transformController;
    this.selectionManager = selectionManager;

    this.onKeyDown = (e: KeyboardEvent) => {
      // Don't capture keys when typing in inputs
      if ((e.target as HTMLElement).tagName === 'INPUT') return;

      switch (e.key.toLowerCase()) {
        case 'w':
          this.bus.emit('transform:mode', 'translate');
          break;
        case 'e':
          this.bus.emit('transform:mode', 'rotate');
          break;
        case 'r':
          this.bus.emit('transform:mode', 'scale');
          break;
        case 'delete':
        case 'backspace': {
          const sel = this.selectionManager.selected;
          if (sel && sel.type !== 'emitter') {
            onDelete(sel.id);
          }
          break;
        }
        case 'escape':
          this.selectionManager.deselect();
          this.transformController.detach();
          break;
      }
    };

    window.addEventListener('keydown', this.onKeyDown);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
  }
}
