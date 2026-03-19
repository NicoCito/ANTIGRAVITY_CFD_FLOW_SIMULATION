// ===== Selection Section =====

import * as THREE from 'three';
import type { EventBus, SelectionInfo, ObstacleData } from '../../app/types';
import { createSection, createInfoRow, createButton } from './UIHelpers';

export class SelectionSection {
  private body: HTMLElement;
  private nameEl: HTMLElement | null = null;
  private typeEl: HTMLElement | null = null;
  private posEls: HTMLElement[] = [];
  private rotEls: HTMLElement[] = [];
  private scaleEls: HTMLElement[] = [];
  private emptyState: HTMLElement | null = null;
  private infoContainer: HTMLElement | null = null;

  constructor(
    parent: HTMLElement,
    bus: EventBus,
    callbacks: {
      onDelete: () => void;
      onDuplicate: () => void;
      onFocus: () => void;
    },
  ) {
    const section = createSection(parent, '🎯', 'Selection');
    this.body = section.body;

    // Empty state
    this.emptyState = document.createElement('div');
    this.emptyState.className = 'empty-state';
    this.emptyState.textContent = 'No object selected';
    this.body.appendChild(this.emptyState);

    // Info container (hidden initially)
    this.infoContainer = document.createElement('div');
    this.infoContainer.style.display = 'none';

    this.nameEl = createInfoRow(this.infoContainer, 'Name', '-');
    this.typeEl = createInfoRow(this.infoContainer, 'Type', '-');

    const sep1 = document.createElement('div');
    sep1.className = 'separator';
    this.infoContainer.appendChild(sep1);

    // Transform Modes
    const modeLabel = document.createElement('div');
    modeLabel.className = 'control-label';
    modeLabel.textContent = 'Transform Mode';
    modeLabel.style.marginBottom = '4px';
    this.infoContainer.appendChild(modeLabel);

    const modeRow = document.createElement('div');
    modeRow.className = 'btn-row';
    modeRow.style.marginBottom = '12px';
    createButton(modeRow, 'Move (W)', () => bus.emit('transform:mode', 'translate'), '');
    createButton(modeRow, 'Rotate (E)', () => bus.emit('transform:mode', 'rotate'), '');
    createButton(modeRow, 'Scale (R)', () => bus.emit('transform:mode', 'scale'), '');
    this.infoContainer.appendChild(modeRow);

    // Position
    const posLabel = document.createElement('div');
    posLabel.className = 'control-label';
    posLabel.textContent = 'Position';
    posLabel.style.marginBottom = '4px';
    this.infoContainer.appendChild(posLabel);

    for (const axis of ['X', 'Y', 'Z']) {
      this.posEls.push(createInfoRow(this.infoContainer, `  ${axis}`, '0.00'));
    }

    // Rotation
    const rotLabel = document.createElement('div');
    rotLabel.className = 'control-label';
    rotLabel.textContent = 'Rotation (°)';
    rotLabel.style.marginBottom = '4px';
    rotLabel.style.marginTop = '8px';
    this.infoContainer.appendChild(rotLabel);

    for (const axis of ['X', 'Y', 'Z']) {
      this.rotEls.push(createInfoRow(this.infoContainer, `  ${axis}`, '0.0'));
    }

    // Scale
    const scaleLabel = document.createElement('div');
    scaleLabel.className = 'control-label';
    scaleLabel.textContent = 'Scale';
    scaleLabel.style.marginBottom = '4px';
    scaleLabel.style.marginTop = '8px';
    this.infoContainer.appendChild(scaleLabel);

    for (const axis of ['X', 'Y', 'Z']) {
      this.scaleEls.push(createInfoRow(this.infoContainer, `  ${axis}`, '1.00'));
    }

    const sep2 = document.createElement('div');
    sep2.className = 'separator';
    this.infoContainer.appendChild(sep2);

    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';
    createButton(btnRow, '🎯 Focus', callbacks.onFocus, '', 'Focus camera on selected');
    createButton(btnRow, '📋 Duplicate', callbacks.onDuplicate, '', 'Duplicate selected object');
    this.infoContainer.appendChild(btnRow);

    const deleteBtn = createButton(this.infoContainer, '🗑 Delete Selected', callbacks.onDelete, 'danger');
    deleteBtn.style.width = '100%';
    deleteBtn.style.marginTop = '8px';

    this.body.appendChild(this.infoContainer);

    // Listen for selection changes
    bus.on('selection:changed', (e) => {
      this.updateSelection(e.data as SelectionInfo | null);
    });
  }

  updateSelection(info: SelectionInfo | null): void {
    if (!info) {
      this.emptyState!.style.display = 'block';
      this.infoContainer!.style.display = 'none';
      return;
    }

    this.emptyState!.style.display = 'none';
    this.infoContainer!.style.display = 'block';

    this.nameEl!.textContent = info.name;
    this.typeEl!.textContent = info.type;

    this.updateTransform(info.mesh);
  }

  updateTransform(obj: THREE.Object3D): void {
    if (!obj) return;
    const pos = obj.position;
    const rot = obj.rotation;
    const scale = obj.scale;

    this.posEls[0].textContent = pos.x.toFixed(2);
    this.posEls[1].textContent = pos.y.toFixed(2);
    this.posEls[2].textContent = pos.z.toFixed(2);

    this.rotEls[0].textContent = (rot.x * 180 / Math.PI).toFixed(1);
    this.rotEls[1].textContent = (rot.y * 180 / Math.PI).toFixed(1);
    this.rotEls[2].textContent = (rot.z * 180 / Math.PI).toFixed(1);

    this.scaleEls[0].textContent = scale.x.toFixed(2);
    this.scaleEls[1].textContent = scale.y.toFixed(2);
    this.scaleEls[2].textContent = scale.z.toFixed(2);
  }
}
