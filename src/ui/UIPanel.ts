// ===== UI Panel =====
// Main panel container with collapsible sections

import type { EventBus, FlowConfig, DisplayConfig, EmitterConfig } from '../app/types';
import { SimulationSection } from './sections/SimulationSection';
import { DisplaySection } from './sections/DisplaySection';
import { EmitterSection } from './sections/EmitterSection';
import { FlowSection } from './sections/FlowSection';
import { ObstaclesSection } from './sections/ObstaclesSection';
import { SelectionSection } from './sections/SelectionSection';
import { STLSection } from './sections/STLSection';
import { SceneStateSection } from './sections/SceneStateSection';

export class UIPanel {
  private container: HTMLElement;
  public simulationSection: SimulationSection;
  public displaySection: DisplaySection;
  public emitterSection: EmitterSection;
  public flowSection: FlowSection;
  public obstaclesSection: ObstaclesSection;
  public selectionSection: SelectionSection;
  public stlSection: STLSection;
  public sceneStateSection: SceneStateSection;

  constructor(
    bus: EventBus,
    flowConfig: FlowConfig,
    displayConfig: DisplayConfig,
    emitterConfig: EmitterConfig,
    callbacks: {
      onAddObstacle: (type: string) => void;
      onUploadSTL: () => void;
      onDeleteSelected: () => void;
      onDuplicateSelected: () => void;
      onFocusSelected: () => void;
      onFrameAll: () => void;
      onScreenshot: () => void;
      onSaveState: () => void;
      onLoadState: () => void;
      onExportJSON: () => void;
      onImportJSON: () => void;
      onRecenterSTL: () => void;
      onRefitCamera: () => void;
    },
  ) {
    this.container = document.getElementById('ui-panel')!;
    this.container.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'panel-header';
    header.innerHTML = `
      <h1>Antigravity</h1>
      <div class="subtitle">3D Airflow Simulator</div>
    `;
    this.container.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'panel-body';
    this.container.appendChild(body);

    // Create sections
    this.simulationSection = new SimulationSection(body, bus);
    this.displaySection = new DisplaySection(body, bus, displayConfig);
    this.emitterSection = new EmitterSection(body, bus, emitterConfig);
    this.flowSection = new FlowSection(body, bus, flowConfig);
    this.obstaclesSection = new ObstaclesSection(body, callbacks.onAddObstacle, callbacks.onUploadSTL);
    this.selectionSection = new SelectionSection(body, bus, {
      onDelete: callbacks.onDeleteSelected,
      onDuplicate: callbacks.onDuplicateSelected,
      onFocus: callbacks.onFocusSelected,
    });
    this.stlSection = new STLSection(body, bus, {
      onRecenter: callbacks.onRecenterSTL,
      onRefit: callbacks.onRefitCamera,
    });
    this.sceneStateSection = new SceneStateSection(body, {
      onSave: callbacks.onSaveState,
      onLoad: callbacks.onLoadState,
      onExport: callbacks.onExportJSON,
      onImport: callbacks.onImportJSON,
      onScreenshot: callbacks.onScreenshot,
      onFrameAll: callbacks.onFrameAll,
    });
  }
}
