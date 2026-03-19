// ===== Renderer Manager =====

import * as THREE from 'three';

export class RendererManager {
  public renderer: THREE.WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true, // needed for screenshots
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.getWidth(), this.getHeight());
    this.renderer.shadowMap.enabled = false;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  getWidth(): number {
    // Subtract panel width
    const panelWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--panel-width')) || 320;
    return window.innerWidth - panelWidth;
  }

  getHeight(): number {
    return window.innerHeight;
  }

  resize(): void {
    const w = this.getWidth();
    const h = this.getHeight();
    this.renderer.setSize(w, h);
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    this.renderer.render(scene, camera);
  }

  takeScreenshot(): string {
    return this.renderer.domElement.toDataURL('image/png');
  }

  dispose(): void {
    this.renderer.dispose();
  }
}
