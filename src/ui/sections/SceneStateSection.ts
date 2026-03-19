// ===== Scene State Section =====

import { createSection, createButton } from './UIHelpers';

export class SceneStateSection {
  constructor(
    parent: HTMLElement,
    callbacks: {
      onSave: () => void;
      onLoad: () => void;
      onExport: () => void;
      onImport: () => void;
      onScreenshot: () => void;
      onFrameAll: () => void;
    },
  ) {
    const { body } = createSection(parent, '💾', 'Scene State', true);

    const row1 = document.createElement('div');
    row1.className = 'btn-row';
    createButton(row1, '💾 Save', callbacks.onSave, '', 'Save scene to localStorage');
    createButton(row1, '📂 Load', callbacks.onLoad, '', 'Load scene from localStorage');
    body.appendChild(row1);

    const row2 = document.createElement('div');
    row2.className = 'btn-row';
    createButton(row2, '📤 Export', callbacks.onExport, '', 'Export scene as JSON');
    createButton(row2, '📥 Import', callbacks.onImport, '', 'Import scene from JSON');
    body.appendChild(row2);

    const sep = document.createElement('div');
    sep.className = 'separator';
    body.appendChild(sep);

    const row3 = document.createElement('div');
    row3.className = 'btn-row';
    createButton(row3, '📷 Screenshot', callbacks.onScreenshot, '', 'Capture canvas as PNG');
    createButton(row3, '🔲 Frame All', callbacks.onFrameAll, '', 'Frame all objects');
    body.appendChild(row3);
  }
}
