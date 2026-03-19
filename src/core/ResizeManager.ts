// ===== Resize Manager =====

import { RendererManager } from './RendererManager';
import { CameraManager } from './CameraManager';

export class ResizeManager {
  private rendererManager: RendererManager;
  private cameraManager: CameraManager;
  private boundHandler: () => void;

  constructor(rendererManager: RendererManager, cameraManager: CameraManager) {
    this.rendererManager = rendererManager;
    this.cameraManager = cameraManager;
    this.boundHandler = this.onResize.bind(this);
    window.addEventListener('resize', this.boundHandler);
  }

  private onResize(): void {
    this.rendererManager.resize();
    const w = this.rendererManager.getWidth();
    const h = this.rendererManager.getHeight();
    this.cameraManager.resize(w / h);
  }

  dispose(): void {
    window.removeEventListener('resize', this.boundHandler);
  }
}
