// ===== Flow Field =====

import * as THREE from 'three';
import type { Emitter } from '../emitter/Emitter';

export class FlowField {
  private emitter: Emitter;
  private _baseDirection = new THREE.Vector3(0, 0, 1);
  private _baseSpeed = 3.0;

  constructor(emitter: Emitter) {
    this.emitter = emitter;
    this.update();
  }

  update(): void {
    this._baseDirection.copy(this.emitter.getFlowDirection());
  }

  get baseDirection(): THREE.Vector3 {
    return this._baseDirection;
  }

  set baseSpeed(speed: number) {
    this._baseSpeed = speed;
  }

  get baseSpeed(): number {
    return this._baseSpeed;
  }

  /** Get the flow velocity at any point (base direction * speed) */
  getFlowAt(_position: THREE.Vector3): THREE.Vector3 {
    return this._baseDirection.clone().multiplyScalar(this._baseSpeed);
  }
}
