// ===== STL Section =====

import type { EventBus, STLObstacleData } from '../../app/types';
import { createSection, createInfoRow, createToggle, createButton } from './UIHelpers';

export class STLSection {
  private body: HTMLElement;
  private emptyState: HTMLElement;
  private infoContainer: HTMLElement;
  private fileNameEl: HTMLElement;
  private dimXEl: HTMLElement;
  private dimYEl: HTMLElement;
  private dimZEl: HTMLElement;
  private triCountEl: HTMLElement;

  constructor(
    parent: HTMLElement,
    bus: EventBus,
    callbacks: {
      onRecenter: () => void;
      onRefit: () => void;
    },
  ) {
    const section = createSection(parent, '📐', 'STL Import', true);
    this.body = section.body;

    // Empty
    this.emptyState = document.createElement('div');
    this.emptyState.className = 'empty-state';
    this.emptyState.textContent = 'No STL loaded';
    this.body.appendChild(this.emptyState);

    // Info
    this.infoContainer = document.createElement('div');
    this.infoContainer.style.display = 'none';

    this.fileNameEl = createInfoRow(this.infoContainer, 'File', '-');
    this.triCountEl = createInfoRow(this.infoContainer, 'Triangles', '-');
    this.dimXEl = createInfoRow(this.infoContainer, 'Size X', '-');
    this.dimYEl = createInfoRow(this.infoContainer, 'Size Y', '-');
    this.dimZEl = createInfoRow(this.infoContainer, 'Size Z', '-');

    const sep = document.createElement('div');
    sep.className = 'separator';
    this.infoContainer.appendChild(sep);

    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';
    createButton(btnRow, 'Recenter', callbacks.onRecenter, '');
    createButton(btnRow, 'Fit Camera', callbacks.onRefit, '');
    this.infoContainer.appendChild(btnRow);

    this.body.appendChild(this.infoContainer);

    bus.on('stl:loaded', (e) => {
      this.showSTLInfo(e.data as STLObstacleData);
    });
  }

  showSTLInfo(data: STLObstacleData): void {
    this.emptyState.style.display = 'none';
    this.infoContainer.style.display = 'block';

    const meta = data.metadata;
    this.fileNameEl.textContent = meta.sourceFileName;
    this.triCountEl.textContent = meta.triangleCount.toLocaleString();

    const size = meta.originalBoundingSize;
    this.dimXEl.textContent = size.x.toFixed(2);
    this.dimYEl.textContent = size.y.toFixed(2);
    this.dimZEl.textContent = size.z.toFixed(2);
  }
}
