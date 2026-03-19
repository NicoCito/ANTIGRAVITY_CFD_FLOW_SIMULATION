// ===== Emitter =====

import * as THREE from 'three';
import type { EmitterConfig, SelectionInfo } from '../app/types';

export class Emitter {
  public mesh: THREE.Mesh;
  public id = 'emitter';
  public name = 'Flow Emitter';
  private config: EmitterConfig;
  private spawnPoints: THREE.Vector3[] = [];
  private _flowDirection = new THREE.Vector3(0, 0, 1);

  // Reusable vectors
  private _normal = new THREE.Vector3(0, 0, 1);
  private _worldPos = new THREE.Vector3();
  private _worldQuat = new THREE.Quaternion();
  private _worldScale = new THREE.Vector3();

  constructor(config: EmitterConfig) {
    this.config = { ...config };

    // Create emitter plane mesh
    const geometry = new THREE.PlaneGeometry(config.width, config.height);
    const material = new THREE.MeshPhongMaterial({
      color: 0x58a6ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      wireframe: false,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.name = 'FlowEmitter';

    // Add wireframe overlay for visibility
    const wireGeo = new THREE.EdgesGeometry(geometry);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x58a6ff, transparent: true, opacity: 0.6 });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    wireframe.name = 'EmitterWireframe';
    this.mesh.add(wireframe);

    // Store selection info on the mesh
    this.mesh.userData.selectionInfo = {
      id: this.id,
      name: this.name,
      type: 'emitter',
      mesh: this.mesh,
    } as SelectionInfo;

    this.updateSpawnPoints();
  }

  getSelectionInfo(): SelectionInfo {
    return this.mesh.userData.selectionInfo as SelectionInfo;
  }

  /** Recompute the grid of spawn points on the emitter plane */
  updateSpawnPoints(): void {
    this.spawnPoints = [];
    const { width, height, densityX, densityY } = this.config;
    const nx = Math.max(1, Math.round(densityX));
    const ny = Math.max(1, Math.round(densityY));

    for (let ix = 0; ix < nx; ix++) {
      for (let iy = 0; iy < ny; iy++) {
        const u = nx === 1 ? 0.5 : ix / (nx - 1);
        const v = ny === 1 ? 0.5 : iy / (ny - 1);
        const x = (u - 0.5) * width;
        const y = (v - 0.5) * height;
        this.spawnPoints.push(new THREE.Vector3(x, y, 0));
      }
    }
  }

  /** Get spawn positions in world space */
  getWorldSpawnPoints(): THREE.Vector3[] {
    this.mesh.updateMatrixWorld(true);
    return this.spawnPoints.map(p => p.clone().applyMatrix4(this.mesh.matrixWorld));
  }

  /** Get the emitter flow direction in world space */
  getFlowDirection(): THREE.Vector3 {
    this.mesh.getWorldQuaternion(this._worldQuat);
    this._flowDirection.copy(this._normal).applyQuaternion(this._worldQuat).normalize();
    return this._flowDirection.clone();
  }

  /** Get emitter world position */
  getWorldPosition(): THREE.Vector3 {
    this.mesh.getWorldPosition(this._worldPos);
    return this._worldPos.clone();
  }

  updateConfig(config: Partial<EmitterConfig>): void {
    const needsRebuild = 
      config.width !== undefined || 
      config.height !== undefined || 
      config.densityX !== undefined || 
      config.densityY !== undefined;

    Object.assign(this.config, config);

    if (config.visible !== undefined) {
      this.mesh.visible = config.visible;
    }

    if (needsRebuild) {
      // Rebuild geometry if size changed
      if (config.width !== undefined || config.height !== undefined) {
        const newGeo = new THREE.PlaneGeometry(this.config.width, this.config.height);
        this.mesh.geometry.dispose();
        this.mesh.geometry = newGeo;

        // Update wireframe
        const wire = this.mesh.children.find(c => c.name === 'EmitterWireframe') as THREE.LineSegments | undefined;
        if (wire) {
          wire.geometry.dispose();
          wire.geometry = new THREE.EdgesGeometry(newGeo);
        }
      }
      this.updateSpawnPoints();
    }
  }

  getConfig(): EmitterConfig {
    return { ...this.config };
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.mesh.children.forEach(child => {
      if (child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
  }
}
