// ===== Obstacles Section =====

import { createSection, createButton } from './UIHelpers';

export class ObstaclesSection {
  constructor(
    parent: HTMLElement,
    onAddObstacle: (type: string) => void,
    onUploadSTL: () => void,
  ) {
    const { body } = createSection(parent, '🧊', 'Obstacles');

    const grid = document.createElement('div');
    grid.className = 'obstacle-grid';

    createButton(grid, '◻ Plane', () => onAddObstacle('plane'));
    createButton(grid, '▣ Box', () => onAddObstacle('box'));
    createButton(grid, '● Sphere', () => onAddObstacle('sphere'));
    createButton(grid, '◎ Cylinder', () => onAddObstacle('cylinder'));
    createButton(grid, '◉ Torus', () => onAddObstacle('torus'));
    createButton(grid, '△ Cone', () => onAddObstacle('cone'));

    body.appendChild(grid);

    const sep = document.createElement('div');
    sep.className = 'separator';
    body.appendChild(sep);

    createButton(body, '📁 Upload STL', onUploadSTL, 'primary');
  }
}
