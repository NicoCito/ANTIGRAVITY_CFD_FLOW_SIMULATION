// ===== Transform Controller =====

import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import type { EventBus } from '../app/types';

export class TransformController {
  public controls: TransformControls;
  private bus: EventBus;
  private attached: THREE.Object3D | null = null;

  constructor(
    camera: THREE.Camera,
    domElement: HTMLElement,
    scene: THREE.Scene,
    bus: EventBus,
    onDragStart: () => void,
    onDragEnd: () => void,
  ) {
    this.bus = bus;
    this.controls = new TransformControls(camera, domElement);
    this.controls.setSize(0.7);
    scene.add(this.controls.getHelper());

    this.controls.addEventListener('dragging-changed', (event) => {
      if (event.value) {
        onDragStart();
      } else {
        onDragEnd();
        if (this.attached) {
          this.bus.emit('obstacle:transformed', this.attached);
        }
      }
    });
  }

  attach(obj: THREE.Object3D): void {
    this.attached = obj;
    this.controls.attach(obj);
  }

  detach(): void {
    this.attached = null;
    this.controls.detach();
  }

  setMode(mode: 'translate' | 'rotate' | 'scale'): void {
    this.controls.setMode(mode);
  }

  getMode(): string {
    return this.controls.mode;
  }

  get isAttached(): boolean {
    return this.attached !== null;
  }

  dispose(): void {
    this.controls.dispose();
  }
}
