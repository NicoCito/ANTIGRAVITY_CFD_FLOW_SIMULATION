import './styles/base.css';
import './styles/layout.css';
import './styles/panel.css';
import './styles/canvas.css';

import * as THREE from 'three';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

(THREE.BufferGeometry.prototype as any).computeBoundsTree = computeBoundsTree;
(THREE.BufferGeometry.prototype as any).disposeBoundsTree = disposeBoundsTree;
(THREE.Mesh.prototype as any).raycast = acceleratedRaycast;

import { App } from './app/App';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
