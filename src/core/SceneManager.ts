// ===== Scene Manager =====

import * as THREE from 'three';
import type { DisplayConfig } from '../app/types';

export class SceneManager {
  public scene: THREE.Scene;
  public gridHelper: THREE.GridHelper;
  public axesHelper: THREE.AxesHelper;
  public ambientLight: THREE.AmbientLight;
  public directionalLight: THREE.DirectionalLight;
  public fillLight: THREE.DirectionalLight;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0d1117');
    this.scene.fog = new THREE.FogExp2('#0d1117', 0.008);

    // Grid
    this.gridHelper = new THREE.GridHelper(80, 80, 0x1c2129, 0x1c2129);
    (this.gridHelper.material as THREE.Material).opacity = 0.6;
    (this.gridHelper.material as THREE.Material).transparent = true;
    this.scene.add(this.gridHelper);

    // Axes
    this.axesHelper = new THREE.AxesHelper(5);
    this.scene.add(this.axesHelper);

    // Ambient light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);

    // Main directional light
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(10, 15, 10);
    this.scene.add(this.directionalLight);

    // Fill light for better mesh readability
    this.fillLight = new THREE.DirectionalLight(0x8899bb, 0.3);
    this.fillLight.position.set(-8, 5, -5);
    this.scene.add(this.fillLight);
  }

  updateDisplay(config: DisplayConfig): void {
    this.gridHelper.visible = config.showGrid;
    this.axesHelper.visible = config.showAxes;
    this.scene.background = new THREE.Color(config.backgroundColor);
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.set(config.backgroundColor);
    }
  }

  dispose(): void {
    this.scene.clear();
  }
}
