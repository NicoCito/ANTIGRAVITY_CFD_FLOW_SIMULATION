// ===== Camera Manager =====

import * as THREE from 'three';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 500);
    this.camera.position.set(12, 10, 18);
    this.camera.lookAt(0, 0, 0);
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /** Frame all objects in the scene */
  frameAll(scene: THREE.Scene): void {
    const box = new THREE.Box3();
    scene.traverse(child => {
      if (child instanceof THREE.Mesh && child.visible) {
        box.expandByObject(child);
      }
    });

    if (box.isEmpty()) {
      this.camera.position.set(12, 10, 18);
      this.camera.lookAt(0, 0, 0);
      return;
    }

    this.frameBoundingBox(box);
  }

  /** Focus on a specific object */
  focusObject(obj: THREE.Object3D): void {
    const box = new THREE.Box3().setFromObject(obj);
    if (box.isEmpty()) return;
    this.frameBoundingBox(box);
  }

  private frameBoundingBox(box: THREE.Box3): void {
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    let cameraDistance = (maxDim / 2) / Math.tan(fov / 2);
    cameraDistance = Math.max(cameraDistance * 1.5, 5);

    const direction = this.camera.position.clone().sub(center).normalize();
    this.camera.position.copy(center).add(direction.multiplyScalar(cameraDistance));
    this.camera.lookAt(center);
  }
}
