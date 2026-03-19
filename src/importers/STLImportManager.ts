// ===== STL Import Manager =====

import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import type { EventBus, STLObstacleData, STLMetadata, SelectionInfo } from '../app/types';
import { generateId } from '../utils/ids';
import { computeBounds, getBoundingSize } from '../utils/bounds';

const MAX_TRIANGLE_WARNING = 500000;

export class STLImportManager {
  private bus: EventBus;
  private loader: STLLoader;
  private dropOverlay: HTMLElement;

  constructor(bus: EventBus) {
    this.bus = bus;
    this.loader = new STLLoader();
    this.dropOverlay = document.getElementById('drop-overlay')!;

    this.setupDragDrop();
  }

  /** Open file picker for STL */
  async openFilePicker(): Promise<void> {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.stl';
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) this.loadFile(file);
    };
    input.click();
  }

  /** Setup drag and drop on the canvas */
  private setupDragDrop(): void {
    const body = document.body;
    let dragCounter = 0;

    body.addEventListener('dragenter', (e) => {
      e.preventDefault();
      dragCounter++;
      if (this.hasSTLFile(e)) {
        this.dropOverlay.classList.add('visible');
      }
    });

    body.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        this.dropOverlay.classList.remove('visible');
      }
    });

    body.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
    });

    body.addEventListener('drop', (e) => {
      e.preventDefault();
      dragCounter = 0;
      this.dropOverlay.classList.remove('visible');

      const file = e.dataTransfer?.files?.[0];
      if (file && file.name.toLowerCase().endsWith('.stl')) {
        this.loadFile(file);
      }
    });
  }

  private hasSTLFile(e: DragEvent): boolean {
    if (!e.dataTransfer?.items) return false;
    for (let i = 0; i < e.dataTransfer.items.length; i++) {
      if (e.dataTransfer.items[i].kind === 'file') return true;
    }
    return false;
  }

  /** Load an STL file and create an obstacle */
  async loadFile(file: File): Promise<void> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const geometry = this.loader.parse(arrayBuffer);

      if (!geometry || geometry.attributes.position.count === 0) {
        this.bus.emit('stl:error', { message: 'STL file is empty or invalid.' });
        return;
      }

      // Compute normals if missing
      if (!geometry.attributes.normal) {
        geometry.computeVertexNormals();
      }

      const triangleCount = geometry.attributes.position.count / 3;

      // Warning for heavy meshes
      if (triangleCount > MAX_TRIANGLE_WARNING) {
        console.warn(`STL has ${triangleCount} triangles — may impact performance`);
      }

      // Create mesh
      const material = new THREE.MeshPhongMaterial({
        color: 0x9eaab8,
        specular: 0x222222,
        shininess: 40,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = file.name;

      // Extract pre-shift offsets for centering calculations
      geometry.computeBoundingBox();
      const tempBox = geometry.boundingBox!;
      const geoSize = new THREE.Vector3();
      tempBox.getSize(geoSize);
      const geoCenter = new THREE.Vector3();
      tempBox.getCenter(geoCenter);

      const originalBoundingSize = geoSize.clone();

      // Auto-center: shift geometry so its mathematically perfect pivot is at 0,0,0
      geometry.translate(-geoCenter.x, -geoCenter.y, -geoCenter.z);

      // NOW officially compute final boundaries and rigorous BVH spatial trees for exact collisions!
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      if ((geometry as any).computeBoundsTree) {
        (geometry as any).computeBoundsTree();
      }

      // Auto-scale: fit within a reasonable scene size (max dim = 5 units)
      const maxDim = Math.max(geoSize.x, geoSize.y, geoSize.z);
      let scaleFactor = 1;
      if (maxDim > 0) {
        scaleFactor = 5 / maxDim;
        mesh.scale.setScalar(scaleFactor);
      }

      // Position in front of the emitter
      mesh.position.set(6, 1.5, 0);

      // Setup as obstacle
      const id = generateId();
      const bounds = computeBounds(mesh);

      const stlMetadata: STLMetadata = {
        sourceFileName: file.name,
        triangleCount,
        autoCentered: true,
        autoScaled: true,
        originalBoundingSize,
      };

      const obstacleData: STLObstacleData = {
        id,
        name: file.name,
        type: 'stl',
        mesh,
        visible: true,
        selectable: true,
        transformable: true,
        boundingBox: bounds.box,
        boundingSphere: bounds.sphere,
        collisionMode: 'simplified',
        metadata: stlMetadata,
      };

      mesh.userData.selectionInfo = {
        id,
        name: file.name,
        type: 'stl',
        mesh,
      } as SelectionInfo;

      mesh.userData.obstacleData = obstacleData;

      this.bus.emit('stl:loaded', obstacleData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error loading STL file';
      this.bus.emit('stl:error', { message });
    }
  }

  dispose(): void {
    // Cleanup listeners handled by page unload
  }
}
