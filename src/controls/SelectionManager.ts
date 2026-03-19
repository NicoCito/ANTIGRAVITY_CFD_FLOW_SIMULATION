// ===== Selection Manager =====

import * as THREE from 'three';
import type { EventBus, SelectionInfo } from '../app/types';

const HIGHLIGHT_EMISSIVE = new THREE.Color(0x2255aa);

export class SelectionManager {
  private bus: EventBus;
  private camera: THREE.Camera;
  private domElement: HTMLElement;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private selectableObjects: THREE.Object3D[] = [];
  private _selected: SelectionInfo | null = null;
  private previousEmissive = new Map<THREE.Mesh, THREE.Color>();
  
  private onPointerDown: (e: PointerEvent) => void;
  private onPointerUp: (e: PointerEvent) => void;
  private pointerDownPos = new THREE.Vector2();

  constructor(camera: THREE.Camera, domElement: HTMLElement, bus: EventBus) {
    this.camera = camera;
    this.domElement = domElement;
    this.bus = bus;

    this.onPointerDown = this.handlePointerDown.bind(this);
    this.onPointerUp = this.handlePointerUp.bind(this);
    domElement.addEventListener('pointerdown', this.onPointerDown);
    domElement.addEventListener('pointerup', this.onPointerUp);
  }

  get selected(): SelectionInfo | null {
    return this._selected;
  }

  registerSelectable(obj: THREE.Object3D): void {
    if (!this.selectableObjects.includes(obj)) {
      this.selectableObjects.push(obj);
    }
  }

  unregisterSelectable(obj: THREE.Object3D): void {
    const idx = this.selectableObjects.indexOf(obj);
    if (idx >= 0) this.selectableObjects.splice(idx, 1);
    if (this._selected?.mesh === obj) {
      this.deselect();
    }
  }

  select(info: SelectionInfo): void {
    this.clearHighlight();
    this._selected = info;
    this.applyHighlight(info.mesh);
    this.bus.emit('selection:changed', info);
  }

  deselect(): void {
    this.clearHighlight();
    this._selected = null;
    this.bus.emit('selection:changed', null);
  }

  private handlePointerDown(e: PointerEvent): void {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('#ui-panel')) return;
    this.pointerDownPos.set(e.clientX, e.clientY);
  }

  private handlePointerUp(e: PointerEvent): void {
    // Only respond to left click
    if (e.button !== 0) return;

    // Ignore clicks on the UI panel
    const target = e.target as HTMLElement;
    if (target.closest('#ui-panel')) return;

    // Check distance to rule out camera drag
    const dx = e.clientX - this.pointerDownPos.x;
    const dy = e.clientY - this.pointerDownPos.y;
    if (dx * dx + dy * dy > 25) return;

    const rect = this.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Get all meshes from selectable objects
    const meshes: THREE.Object3D[] = [];
    for (const obj of this.selectableObjects) {
      obj.traverse(child => {
        if (child instanceof THREE.Mesh) {
          meshes.push(child);
        }
      });
    }

    const intersects = this.raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      // Find the top-level selectable parent
      let hit = intersects[0].object;
      let selectableParent: THREE.Object3D | null = null;
      while (hit) {
        if (this.selectableObjects.includes(hit)) {
          selectableParent = hit;
          break;
        }
        hit = hit.parent!;
      }

      if (selectableParent && selectableParent.userData.selectionInfo) {
        const info = selectableParent.userData.selectionInfo as SelectionInfo;
        if (this._selected?.id === info.id) return; // Already selected
        this.select(info);
        return;
      }
    }

    // Click on empty space → deselect
    if (this._selected) {
      this.deselect();
    }
  }

  private applyHighlight(obj: THREE.Object3D): void {
    obj.traverse(child => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshPhongMaterial | THREE.MeshStandardMaterial;
        if (mat.emissive) {
          this.previousEmissive.set(child, mat.emissive.clone());
          mat.emissive.copy(HIGHLIGHT_EMISSIVE);
        }
      }
    });
  }

  private clearHighlight(): void {
    if (!this._selected) return;
    this._selected.mesh.traverse(child => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshPhongMaterial | THREE.MeshStandardMaterial;
        const prev = this.previousEmissive.get(child);
        if (mat.emissive && prev) {
          mat.emissive.copy(prev);
        }
      }
    });
    this.previousEmissive.clear();
  }

  dispose(): void {
    this.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.domElement.removeEventListener('pointerup', this.onPointerUp);
  }
}
