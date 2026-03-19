// ===== UI Section Helper =====
// Reusable factory for section elements

export function createSection(
  parent: HTMLElement,
  icon: string,
  title: string,
  collapsed = false,
): { header: HTMLElement; body: HTMLElement } {
  const section = document.createElement('div');
  section.className = 'ui-section';

  const header = document.createElement('div');
  header.className = `section-header${collapsed ? ' collapsed' : ''}`;
  header.innerHTML = `
    <span class="section-title"><span class="icon">${icon}</span>${title}</span>
    <span class="section-chevron">▼</span>
  `;

  const body = document.createElement('div');
  body.className = `section-body${collapsed ? ' collapsed' : ''}`;
  if (!collapsed) {
    body.style.maxHeight = 'none';
  }

  header.addEventListener('click', () => {
    const isCollapsed = header.classList.contains('collapsed');
    if (isCollapsed) {
      header.classList.remove('collapsed');
      body.classList.remove('collapsed');
      body.style.maxHeight = 'none';
    } else {
      header.classList.add('collapsed');
      body.classList.add('collapsed');
      body.style.maxHeight = '0';
    }
  });

  section.appendChild(header);
  section.appendChild(body);
  parent.appendChild(section);

  return { header, body };
}

export function createSlider(
  parent: HTMLElement,
  label: string,
  value: number,
  min: number,
  max: number,
  step: number,
  onChange: (val: number) => void,
  tooltip?: string,
): HTMLInputElement {
  const row = document.createElement('div');
  row.className = 'control-row';
  if (tooltip) row.setAttribute('data-tooltip', tooltip);

  const lbl = document.createElement('span');
  lbl.className = 'control-label';
  lbl.textContent = label;

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.className = 'control-slider';
  slider.min = String(min);
  slider.max = String(max);
  slider.step = String(step);
  slider.value = String(value);

  const valSpan = document.createElement('span');
  valSpan.className = 'control-value';
  valSpan.textContent = formatValue(value);

  slider.addEventListener('input', () => {
    const v = parseFloat(slider.value);
    valSpan.textContent = formatValue(v);
    onChange(v);
  });

  row.appendChild(lbl);
  row.appendChild(slider);
  row.appendChild(valSpan);
  parent.appendChild(row);
  return slider;
}

export function createToggle(
  parent: HTMLElement,
  label: string,
  value: boolean,
  onChange: (val: boolean) => void,
  tooltip?: string,
): HTMLElement {
  const row = document.createElement('div');
  row.className = 'control-row';
  if (tooltip) row.setAttribute('data-tooltip', tooltip);

  const lbl = document.createElement('span');
  lbl.className = 'control-label';
  lbl.textContent = label;

  const toggle = document.createElement('div');
  toggle.className = `toggle${value ? ' active' : ''}`;

  toggle.addEventListener('click', () => {
    const active = toggle.classList.toggle('active');
    onChange(active);
  });

  row.appendChild(lbl);
  row.appendChild(toggle);
  parent.appendChild(row);
  return toggle;
}

export function createColorPicker(
  parent: HTMLElement,
  label: string,
  value: string,
  onChange: (val: string) => void,
): HTMLInputElement {
  const row = document.createElement('div');
  row.className = 'control-row';

  const lbl = document.createElement('span');
  lbl.className = 'control-label';
  lbl.textContent = label;

  const input = document.createElement('input');
  input.type = 'color';
  input.className = 'control-color';
  input.value = value;

  input.addEventListener('input', () => {
    onChange(input.value);
  });

  row.appendChild(lbl);
  row.appendChild(input);
  parent.appendChild(row);
  return input;
}

export function createButton(
  parent: HTMLElement,
  text: string,
  onClick: () => void,
  className = '',
  tooltip?: string,
): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = `btn ${className}`.trim();
  btn.textContent = text;
  if (tooltip) btn.setAttribute('data-tooltip', tooltip);
  btn.addEventListener('click', onClick);
  parent.appendChild(btn);
  return btn;
}

export function createInfoRow(
  parent: HTMLElement,
  label: string,
  value: string,
): HTMLElement {
  const row = document.createElement('div');
  row.className = 'info-row';

  const lbl = document.createElement('span');
  lbl.className = 'info-label';
  lbl.textContent = label;

  const val = document.createElement('span');
  val.className = 'info-value';
  val.textContent = value;

  row.appendChild(lbl);
  row.appendChild(val);
  parent.appendChild(row);
  return val;
}

function formatValue(v: number): string {
  if (Number.isInteger(v)) return String(v);
  if (Math.abs(v) >= 10) return v.toFixed(1);
  return v.toFixed(2);
}
