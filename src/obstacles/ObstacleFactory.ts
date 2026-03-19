// ===== Obstacle Factory =====

import * as THREE from 'three';
import type { ObstacleData, ObstacleType, SelectionInfo } from '../app/types';
import { generateId } from '../utils/ids';
import { computeBounds } from '../utils/bounds';

const OBSTACLE_MATERIAL_PARAMS = {
  color: 0x8b949e,
  transparent: true,
  opacity: 0.65,
  side: THREE.DoubleSide,
};

function createObstacleMaterial(): THREE.MeshPhongMaterial {
  return new THREE.MeshPhongMaterial({ ...OBSTACLE_MATERIAL_PARAMS });
}

function setupMesh(mesh: THREE.Mesh, id: string, name: string, type: ObstacleType): ObstacleData {
  mesh.name = name;
  const bounds = computeBounds(mesh);

  if ((mesh.geometry as any).computeBoundsTree) {
    (mesh.geometry as any).computeBoundsTree();
  }

  const data: ObstacleData = {
    id,
    name,
    type,
    mesh,
    visible: true,
    selectable: true,
    transformable: true,
    boundingBox: bounds.box,
    boundingSphere: bounds.sphere,
    collisionMode: 'simplified',
  };

  mesh.userData.selectionInfo = {
    id,
    name,
    type,
    mesh,
  } as SelectionInfo;

  mesh.userData.obstacleData = data;
  return data;
}

export class ObstacleFactory {
  static createPlane(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.PlaneGeometry(4, 4);
    const mat = createObstacleMaterial();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(5, 2, 0));
    return setupMesh(mesh, id, `Plane`, 'plane');
  }

  static createBox(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.BoxGeometry(2, 2, 2);
    const mat = createObstacleMaterial();
    mat.opacity = 0.7;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(6, 1, 0));
    return setupMesh(mesh, id, `Box`, 'box');
  }

  static createSphere(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.SphereGeometry(1.2, 32, 24);
    const mat = createObstacleMaterial();
    mat.opacity = 0.7;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(6, 1.2, 0));
    return setupMesh(mesh, id, `Sphere`, 'sphere');
  }

  static createCylinder(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.CylinderGeometry(0.8, 0.8, 3, 24);
    const mat = createObstacleMaterial();
    mat.opacity = 0.7;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(6, 1.5, 0));
    return setupMesh(mesh, id, `Cylinder`, 'cylinder');
  }

  static createTorus(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.TorusGeometry(1.2, 0.4, 16, 32);
    const mat = createObstacleMaterial();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(6, 1.5, 0));
    return setupMesh(mesh, id, `Torus`, 'torus');
  }

  static createCone(position?: THREE.Vector3): ObstacleData {
    const id = generateId();
    const geo = new THREE.ConeGeometry(1, 2.5, 24);
    const mat = createObstacleMaterial();
    mat.opacity = 0.7;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position ?? new THREE.Vector3(6, 1.25, 0));
    return setupMesh(mesh, id, `Cone`, 'cone');
  }

  static createFromType(type: ObstacleType): ObstacleData | null {
    switch (type) {
      case 'plane': return this.createPlane();
      case 'box': return this.createBox();
      case 'sphere': return this.createSphere();
      case 'cylinder': return this.createCylinder();
      case 'torus': return this.createTorus();
      case 'cone': return this.createCone();
      default: return null;
    }
  }
}
