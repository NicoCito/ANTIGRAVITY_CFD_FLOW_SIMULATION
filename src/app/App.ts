// ===== Application Orchestrator =====

import * as THREE from 'three';
import { EventBus, type SceneState } from './types';
import { DEFAULT_EMITTER, DEFAULT_FLOW, DEFAULT_DISPLAY } from './config';
import { RendererManager } from '../core/RendererManager';
import { SceneManager } from '../core/SceneManager';
import { CameraManager } from '../core/CameraManager';
import { ResizeManager } from '../core/ResizeManager';
import { TimeManager } from '../core/TimeManager';
import { OrbitController } from '../controls/OrbitController';
import { TransformController } from '../controls/TransformController';
import { SelectionManager } from '../controls/SelectionManager';
import { InputManager } from '../controls/InputManager';
import { EmitterManager } from '../emitter/EmitterManager';
import { ObstacleFactory } from '../obstacles/ObstacleFactory';
import { ObstacleManager } from '../obstacles/ObstacleManager';
import { FlowSimulation } from '../simulation/FlowSimulation';
import { STLImportManager } from '../importers/STLImportManager';
import { UIPanel } from '../ui/UIPanel';
import { downloadJSON, downloadBlob } from '../utils/fileUtils';

export class App {
  private bus: EventBus;
  private canvas: HTMLCanvasElement;
  
  // Core
  private rendererMgr!: RendererManager;
  private sceneMgr!: SceneManager;
  private cameraMgr!: CameraManager;
  private resizeMgr!: ResizeManager;
  private timeMgr!: TimeManager;
  
  // Controls
  private orbitCtrl!: OrbitController;
  private transformCtrl!: TransformController;
  private selectionMgr!: SelectionManager;
  private inputMgr!: InputManager;
  
  // Systems
  private emitterMgr!: EmitterManager;
  private obstacleMgr!: ObstacleManager;
  private flowSim!: FlowSimulation;
  private stlImporter!: STLImportManager;

  // UI
  private uiPanel!: UIPanel;
  
  // State
  private currentDisplayConfig = { ...DEFAULT_DISPLAY };

  constructor() {
    this.bus = new EventBus();
    this.canvas = document.getElementById('render-canvas') as HTMLCanvasElement;

    this.init();
    this.setupEvents();
    this.startLoop();
    this.showToast('Ready', 'success');
  }

  private init(): void {
    // 1. Core Engine
    this.rendererMgr = new RendererManager(this.canvas);
    this.timeMgr = new TimeManager();
    this.sceneMgr = new SceneManager();
    this.sceneMgr.updateDisplay(this.currentDisplayConfig);

    const aspect = this.rendererMgr.getWidth() / this.rendererMgr.getHeight();
    this.cameraMgr = new CameraManager(aspect);
    this.resizeMgr = new ResizeManager(this.rendererMgr, this.cameraMgr);

    // 2. Systems
    this.emitterMgr = new EmitterManager(DEFAULT_EMITTER, this.bus);
    this.sceneMgr.scene.add(this.emitterMgr.emitter.mesh);

    this.obstacleMgr = new ObstacleManager(this.sceneMgr.scene, this.bus);
    
    this.flowSim = new FlowSimulation(
      this.emitterMgr.emitter,
      this.obstacleMgr,
      DEFAULT_FLOW,
      DEFAULT_DISPLAY,
      DEFAULT_EMITTER,
      this.bus
    );
    this.flowSim.getObjects().forEach(obj => this.sceneMgr.scene.add(obj));

    this.stlImporter = new STLImportManager(this.bus);

    // 3. Controls
    this.orbitCtrl = new OrbitController(this.cameraMgr.camera, this.rendererMgr.renderer.domElement);
    
    this.transformCtrl = new TransformController(
      this.cameraMgr.camera,
      this.rendererMgr.renderer.domElement,
      this.sceneMgr.scene,
      this.bus,
      () => this.orbitCtrl.setEnabled(false),
      () => this.orbitCtrl.setEnabled(true)
    );

    this.selectionMgr = new SelectionManager(this.cameraMgr.camera, this.rendererMgr.renderer.domElement, this.bus);
    this.selectionMgr.registerSelectable(this.emitterMgr.emitter.mesh);

    this.inputMgr = new InputManager(this.bus, this.transformCtrl, this.selectionMgr, (id) => this.obstacleMgr.remove(id));

    // 4. UI
    this.uiPanel = new UIPanel(
      this.bus,
      DEFAULT_FLOW,
      DEFAULT_DISPLAY,
      DEFAULT_EMITTER,
      {
        onAddObstacle: (type) => this.addObstacle(type),
        onUploadSTL: () => this.stlImporter.openFilePicker(),
        onDeleteSelected: () => {
          const sel = this.selectionMgr.selected;
          if (sel && sel.type !== 'emitter') {
            this.obstacleMgr.remove(sel.id);
            this.selectionMgr.deselect();
          }
        },
        onDuplicateSelected: () => {
          const sel = this.selectionMgr.selected;
          if (sel && sel.type !== 'emitter') {
            this.obstacleMgr.duplicate(sel.id);
          }
        },
        onFocusSelected: () => {
          const sel = this.selectionMgr.selected;
          if (sel) this.cameraMgr.focusObject(sel.mesh);
        },
        onFrameAll: () => this.cameraMgr.frameAll(this.sceneMgr.scene),
        onScreenshot: () => this.takeScreenshot(),
        onSaveState: () => this.saveState(),
        onLoadState: () => this.loadState(),
        onExportJSON: () => this.exportState(),
        onImportJSON: () => this.importState(),
        onRecenterSTL: () => { /* Add recenter logic if needed */ },
        onRefitCamera: () => this.cameraMgr.frameAll(this.sceneMgr.scene),
      }
    );

    // Initial default obstacle
    this.addObstacle('sphere');
  }

  private setupEvents(): void {
    this.bus.on('selection:changed', (e) => {
      const info = e.data as any;
      if (info) {
        this.transformCtrl.attach(info.mesh);
      } else {
        this.transformCtrl.detach();
      }
    });

    this.bus.on('config:display', (e) => {
      const partial = e.data as any;
      Object.assign(this.currentDisplayConfig, partial);
      this.sceneMgr.updateDisplay(this.currentDisplayConfig);
      
      if (partial.showObstacleBounds !== undefined) {
        this.obstacleMgr.setShowBounds(partial.showObstacleBounds);
      }
    });

    this.bus.on('config:emitter', (e) => {
      this.emitterMgr.updateConfig(e.data as any);
    });

    this.bus.on('transform:mode', (e) => {
      this.transformCtrl.setMode(e.data as 'translate' | 'rotate' | 'scale');
    });

    this.bus.on('stl:loaded', (e) => {
      const obstacle = e.data as any;
      this.obstacleMgr.add(obstacle);
      this.selectionMgr.registerSelectable(obstacle.mesh);
      this.selectionMgr.select(obstacle.mesh.userData.selectionInfo);
      this.cameraMgr.focusObject(obstacle.mesh);
      this.showToast(`Loaded STL: ${obstacle.name}`, 'info');
    });

    this.bus.on('stl:error', (e) => {
      const err = e.data as any;
      this.showToast(err.message, 'error');
    });

    this.bus.on('obstacle:removed', (e) => {
      const obs = e.data as any;
      this.selectionMgr.unregisterSelectable(obs.mesh);
    });
  }

  private addObstacle(type: string): void {
    const obstacle = ObstacleFactory.createFromType(type as any);
    if (!obstacle) return;
    
    this.obstacleMgr.add(obstacle);
    this.selectionMgr.registerSelectable(obstacle.mesh);
    this.selectionMgr.select(obstacle.mesh.userData.selectionInfo);
  }

  private takeScreenshot(): void {
    try {
      this.rendererMgr.render(this.sceneMgr.scene, this.cameraMgr.camera);
      const dataUrl = this.rendererMgr.takeScreenshot();
      
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `antigravity_render_${Date.now()}.png`;
      a.click();
      this.showToast('Screenshot saved', 'success');
    } catch (e) {
      this.showToast('Failed to save screenshot', 'error');
    }
  }

  // --- State Management ---

  private serializeState(): SceneState {
    const obstaclesData = this.obstacleMgr.getAll().map(obs => {
      const pos = obs.mesh.position;
      const rot = obs.mesh.rotation;
      const scale = obs.mesh.scale;
      
      return {
        id: obs.id,
        name: obs.name,
        type: obs.type,
        position: [pos.x, pos.y, pos.z],
        rotation: [rot.x, rot.y, rot.z],
        scale: [scale.x, scale.y, scale.z],
        collisionMode: obs.collisionMode,
        stlMetadata: (obs as any).metadata
      } as any;
    });

    const emitterPos = this.emitterMgr.emitter.mesh.position;
    const emitterRot = this.emitterMgr.emitter.mesh.rotation;

    return {
      version: 1,
      emitter: {
        ...this.emitterMgr.getConfig(),
        position: [emitterPos.x, emitterPos.y, emitterPos.z],
        rotation: [emitterRot.x, emitterRot.y, emitterRot.z],
      },
      flow: (this.flowSim as any).flowConfig,
      display: (this.flowSim as any).displayConfig,
      obstacles: obstaclesData
    };
  }

  private saveState(): void {
    try {
      const state = this.serializeState();
      localStorage.setItem('antigravity_sceneState', JSON.stringify(state));
      this.showToast('Scene saved to LocalStorage', 'success');
    } catch (e) {
      this.showToast('Failed to save scene', 'error');
    }
  }

  private loadState(): void {
    try {
      const json = localStorage.getItem('antigravity_sceneState');
      if (!json) {
        this.showToast('No saved scene found', 'warning');
        return;
      }
      const state = JSON.parse(json);
      this.restoreState(state);
      this.showToast('Scene loaded', 'success');
    } catch (e) {
      this.showToast('Failed to load scene', 'error');
    }
  }

  private exportState(): void {
    const state = this.serializeState();
    downloadJSON(state, `antigravity_scene_${Date.now()}.json`);
    this.showToast('Scene exported', 'success');
  }

  private importState(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const state = JSON.parse(text);
        this.restoreState(state);
        this.showToast('Scene imported successfully', 'success');
      } catch (e) {
        this.showToast('Invalid JSON file', 'error');
      }
    };
    input.click();
  }

  private restoreState(state: SceneState): void {
    // Note: restoring UI completely from state is complex without a bound framework like React.
    // For this implementation, we will restore the scene objects and core config, 
    // and let the user re-tweak UI sizes if needed, or trigger reload of page.
    this.obstacleMgr.clear();
    
    // Restore basic parametric obstacles (STL restore requires actual files which aren't in JSON)
    for (const obsData of state.obstacles) {
      if (obsData.type === 'stl') {
        this.showToast(`Skipped STL '${obsData.name}' (upload manually)`, 'warning');
        continue;
      }
      
      const obstacle = ObstacleFactory.createFromType(obsData.type);
      if (obstacle) {
        obstacle.mesh.position.set(obsData.position[0], obsData.position[1], obsData.position[2]);
        obstacle.mesh.rotation.set(obsData.rotation[0], obsData.rotation[1], obsData.rotation[2]);
        obstacle.mesh.scale.set(obsData.scale[0], obsData.scale[1], obsData.scale[2]);
        
        obstacle.name = obsData.name;
        obstacle.collisionMode = obsData.collisionMode;
        
        this.obstacleMgr.add(obstacle);
        this.selectionMgr.registerSelectable(obstacle.mesh);
      }
    }
    
    // Restore Emitter
    if (state.emitter) {
      this.bus.emit('config:emitter', state.emitter);
      this.emitterMgr.emitter.mesh.position.set(state.emitter.position[0], state.emitter.position[1], state.emitter.position[2]);
      this.emitterMgr.emitter.mesh.rotation.set(state.emitter.rotation[0], state.emitter.rotation[1], state.emitter.rotation[2]);
    }

    if (state.flow) this.bus.emit('config:flow', state.flow);
    if (state.display) this.bus.emit('config:display', state.display);
    
    this.obstacleMgr.updateAllBounds();
    this.flowSim.restart();
  }

  private showToast(message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info'): void {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  private startLoop(): void {
    const loop = () => {
      requestAnimationFrame(loop);
      
      this.timeMgr.update();
      const dt = this.timeMgr.deltaTime;

      this.orbitCtrl.update();
      this.flowSim.update(dt);
      this.rendererMgr.render(this.sceneMgr.scene, this.cameraMgr.camera);
    };
    loop();
  }
}
