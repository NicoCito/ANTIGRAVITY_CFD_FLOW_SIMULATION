// ===== Obstacle Manager =====

import * as THREE from 'three';
import type { ObstacleData, EventBus, ObstacleType, STLObstacleData } from '../app/types';
import { updateBounds } from '../utils/bounds';
import { generateId } from '../utils/ids';

export class ObstacleManager {
  private obstacles = new Map<string, ObstacleData>();
  private scene: THREE.Scene;
  private bus: EventBus;
  private boundingHelpers = new Map<string, THREE.Box3Helper>();

  constructor(scene: THREE.Scene, bus: EventBus) {
    this.scene = scene;
    this.bus = bus;

    // Listen for transform events to update bounds
    this.bus.on('obstacle:transformed', (event) => {
      const obj = event.data as THREE.Object3D;
      for (const [, obs] of this.obstacles) {
        if (obs.mesh === obj) {
          this.updateObstacleBounds(obs);
          break;
        }
      }
    });
  }

  add(obstacle: ObstacleData): void {
    this.obstacles.set(obstacle.id, obstacle);
    this.scene.add(obstacle.mesh);
    this.bus.emit('obstacle:added', obstacle);
  }

  remove(id: string): ObstacleData | null {
    const obs = this.obstacles.get(id);
    if (!obs) return null;

    this.scene.remove(obs.mesh);
    obs.mesh.geometry.dispose();
    if (obs.mesh.material instanceof THREE.Material) {
      obs.mesh.material.dispose();
    }

    // Remove bounding helper
    const helper = this.boundingHelpers.get(id);
    if (helper) {
      this.scene.remove(helper);
      this.boundingHelpers.delete(id);
    }

    this.obstacles.delete(id);
    this.bus.emit('obstacle:removed', obs);
    return obs;
  }

  get(id: string): ObstacleData | undefined {
    return this.obstacles.get(id);
  }

  getAll(): ObstacleData[] {
    return Array.from(this.obstacles.values());
  }

  getCount(): number {
    return this.obstacles.size;
  }

  updateObstacleBounds(obs: ObstacleData): void {
    const bounds = updateBounds(obs.mesh);
    obs.boundingBox = bounds.box;
    obs.boundingSphere = bounds.sphere;

    // Update helper if visible
    const helper = this.boundingHelpers.get(obs.id);
    if (helper) {
      helper.box.copy(obs.boundingBox);
    }
  }

  setShowBounds(show: boolean): void {
    if (show) {
      for (const [id, obs] of this.obstacles) {
        if (!this.boundingHelpers.has(id)) {
          const helper = new THREE.Box3Helper(obs.boundingBox, new THREE.Color(0x58a6ff));
          this.scene.add(helper);
          this.boundingHelpers.set(id, helper);
        }
      }
    } else {
      for (const [id, helper] of this.boundingHelpers) {
        this.scene.remove(helper);
        this.boundingHelpers.delete(id);
      }
    }
  }

  /** Update all bounds (call after any transform) */
  updateAllBounds(): void {
    for (const obs of this.obstacles.values()) {
      this.updateObstacleBounds(obs);
    }
  }

  /** Duplicate an obstacle */
  duplicate(id: string): ObstacleData | null {
    const original = this.obstacles.get(id);
    if (!original) return null;

    const clonedMesh = original.mesh.clone();
    clonedMesh.position.add(new THREE.Vector3(2, 0, 2));

    const newId = generateId();
    const newName = `${original.name} Copy`;

    const bounds = updateBounds(clonedMesh);
    const newObs: ObstacleData = {
      id: newId,
      name: newName,
      type: original.type,
      mesh: clonedMesh,
      visible: true,
      selectable: true,
      transformable: true,
      boundingBox: bounds.box,
      boundingSphere: bounds.sphere,
      collisionMode: original.collisionMode,
    };

    if ((original as any).metadata) {
      (newObs as any).metadata = { ...(original as any).metadata };
    }

    clonedMesh.userData.selectionInfo = {
      id: newId,
      name: newName,
      type: original.type,
      mesh: clonedMesh,
    };
    clonedMesh.userData.obstacleData = newObs;

    this.add(newObs);
    return newObs;
  }

  clear(): void {
    const ids = Array.from(this.obstacles.keys());
    for (const id of ids) {
      this.remove(id);
    }
  }

  dispose(): void {
    this.clear();
  }
}
