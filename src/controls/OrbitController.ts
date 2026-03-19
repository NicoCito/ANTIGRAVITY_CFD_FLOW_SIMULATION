// ===== Orbit Controller =====

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class OrbitController {
  public controls: OrbitControls;

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.controls = new OrbitControls(camera, domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.screenSpacePanning = true;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 200;
    this.controls.maxPolarAngle = Math.PI * 0.95;

    // Right click = orbit, scroll = zoom, middle = pan
    this.controls.mouseButtons = {
      LEFT: undefined as unknown as THREE.MOUSE,
      MIDDLE: THREE.MOUSE.PAN,
      RIGHT: THREE.MOUSE.ROTATE,
    };
  }

  setEnabled(enabled: boolean): void {
    this.controls.enabled = enabled;
  }

  update(): void {
    this.controls.update();
  }

  setTarget(target: THREE.Vector3): void {
    this.controls.target.copy(target);
  }

  dispose(): void {
    this.controls.dispose();
  }
}
