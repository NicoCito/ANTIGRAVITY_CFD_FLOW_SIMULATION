// ===== Bounding Volume Utilities =====

import * as THREE from 'three';

export function computeBounds(mesh: THREE.Mesh): { box: THREE.Box3; sphere: THREE.Sphere } {
  mesh.geometry.computeBoundingBox();
  mesh.geometry.computeBoundingSphere();

  const box = new THREE.Box3().setFromObject(mesh);
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);

  return { box, sphere };
}

export function updateBounds(mesh: THREE.Mesh): { box: THREE.Box3; sphere: THREE.Sphere } {
  mesh.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(mesh);
  const sphere = new THREE.Sphere();
  box.getBoundingSphere(sphere);
  return { box, sphere };
}

export function getBoundingSize(box: THREE.Box3): THREE.Vector3 {
  const size = new THREE.Vector3();
  box.getSize(size);
  return size;
}
