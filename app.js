const presets = [
  {
    id: 'iphone-11-pro-max',
    name: 'iPhone 11 Pro Max',
    width: 1242,
    height: 2688,
    modes: {
      lockScreen: [
        { id: 'status-date', label: 'Status / date', x: 0, y: 0, width: 1242, height: 300, kind: 'danger' },
        { id: 'clock', label: 'Clock block', x: 0, y: 300, width: 1242, height: 340, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 0, y: 640, width: 1242, height: 300, kind: 'danger' },
        { id: 'safe-content', label: 'Artwork safe area', x: 0, y: 940, width: 1242, height: 1520, kind: 'informational' },
        { id: 'bottom-gesture', label: 'Bottom gesture area', x: 0, y: 2586, width: 1242, height: 102, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1242, height: 140, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 80, y: 220, width: 1080, height: 1780, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 80, y: 2130, width: 1080, height: 260, kind: 'danger' }
      ]
    }
  },
  {
    id: 'iphone-12-12-pro',
    name: 'iPhone 12 / 12 Pro',
    width: 1170,
    height: 2532,
    modes: {
      lockScreen: [
        { id: 'notch', label: 'Notch', x: 345, y: 36, width: 480, height: 120, kind: 'cutout' },
        { id: 'clock', label: 'Clock area', x: 120, y: 165, width: 930, height: 290, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 85, y: 450, width: 995, height: 495, kind: 'danger' },
        { id: 'bottom', label: 'Bottom area', x: 0, y: 2368, width: 1170, height: 164, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1170, height: 145, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 74, y: 220, width: 1020, height: 1660, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 74, y: 2000, width: 1020, height: 240, kind: 'danger' }
      ]
    }
  },
  {
    id: 'iphone-13-13-pro',
    name: 'iPhone 13 / 13 Pro',
    width: 1170,
    height: 2532,
    modes: {
      lockScreen: [
        { id: 'notch', label: 'Notch', x: 355, y: 30, width: 460, height: 115, kind: 'cutout' },
        { id: 'clock', label: 'Clock area', x: 120, y: 156, width: 930, height: 280, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 86, y: 440, width: 996, height: 500, kind: 'danger' },
        { id: 'bottom', label: 'Bottom area', x: 0, y: 2368, width: 1170, height: 164, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1170, height: 138, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 74, y: 220, width: 1020, height: 1660, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 74, y: 2000, width: 1020, height: 240, kind: 'danger' }
      ]
    }
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    width: 1179,
    height: 2556,
    modes: {
      lockScreen: [
        { id: 'island', label: 'Dynamic Island', x: 386, y: 34, width: 408, height: 120, kind: 'cutout' },
        { id: 'clock', label: 'Clock area', x: 120, y: 165, width: 940, height: 280, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 90, y: 450, width: 1000, height: 500, kind: 'danger' },
        { id: 'bottom', label: 'Bottom area', x: 0, y: 2380, width: 1179, height: 176, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1179, height: 160, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 70, y: 240, width: 1040, height: 1700, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 70, y: 2060, width: 1040, height: 260, kind: 'danger' }
      ]
    }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    width: 1179,
    height: 2556,
    modes: {
      lockScreen: [
        { id: 'island', label: 'Dynamic Island', x: 390, y: 35, width: 400, height: 120, kind: 'cutout' },
        { id: 'clock', label: 'Clock area', x: 120, y: 160, width: 940, height: 260, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 90, y: 440, width: 1000, height: 500, kind: 'danger' },
        { id: 'bottom', label: 'Bottom safe margin', x: 0, y: 2380, width: 1179, height: 176, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1179, height: 160, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 70, y: 240, width: 1040, height: 1700, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 70, y: 2060, width: 1040, height: 260, kind: 'danger' }
      ]
    }
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    width: 1290,
    height: 2796,
    modes: {
      lockScreen: [
        { id: 'island', label: 'Dynamic Island', x: 430, y: 36, width: 430, height: 130, kind: 'cutout' },
        { id: 'clock', label: 'Clock area', x: 130, y: 180, width: 1030, height: 300, kind: 'danger' },
        { id: 'widgets', label: 'Widget area', x: 100, y: 500, width: 1090, height: 560, kind: 'danger' },
        { id: 'bottom', label: 'Bottom area', x: 0, y: 2610, width: 1290, height: 186, kind: 'danger' }
      ],
      homeScreen: [
        { id: 'status', label: 'Status bar', x: 0, y: 0, width: 1290, height: 170, kind: 'danger' },
        { id: 'grid', label: 'Icon grid', x: 80, y: 260, width: 1130, height: 1860, kind: 'informational' },
        { id: 'dock', label: 'Dock', x: 80, y: 2250, width: 1130, height: 280, kind: 'danger' }
      ]
    }
  }
];

const state = {
  selectedDeviceId: presets[0].id,
  mode: 'lockScreen',
  image: null,
  showGuides: true,
  visibleGuideIds: [],
  exportFormat: 'png',
  exportQuality: 0.92,
  canvasColor: '#0b0f20'
};

const startEditingBtn = document.getElementById('startEditingBtn');
const landing = document.getElementById('landing');
const editor = document.getElementById('editor');
const deviceSelect = document.getElementById('deviceSelect');
const showGuides = document.getElementById('showGuides');
const guideToggleList = document.getElementById('guideToggleList');
const canvas = document.getElementById('editorCanvas');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('fileInput');
const canvasColorInput = document.getElementById('canvasColorInput');
const colorSuggestions = document.getElementById('colorSuggestions');
const zoomRange = document.getElementById('zoomRange');
const rotateRange = document.getElementById('rotateRange');
const fitBtn = document.getElementById('fitBtn');
const fillBtn = document.getElementById('fillBtn');
const centerBtn = document.getElementById('centerBtn');
const resetBtn = document.getElementById('resetBtn');
const exportFormat = document.getElementById('exportFormat');
const qualityRange = document.getElementById('qualityRange');
const qualityWrap = document.getElementById('qualityWrap');
const downloadBtn = document.getElementById('downloadBtn');
const canvasMeta = document.getElementById('canvasMeta');
const helpBtn = document.getElementById('helpBtn');
const helpDialog = document.getElementById('helpDialog');
const closeHelpBtn = document.getElementById('closeHelpBtn');

function getSelectedPreset() {
  return presets.find((preset) => preset.id === state.selectedDeviceId) ?? presets[0];
}

function getCurrentGuides() {
  const preset = getSelectedPreset();
  return preset.modes[state.mode];
}

function seedGuideVisibility() {
  state.visibleGuideIds = getCurrentGuides().map((guide) => guide.id);
}

function setupDeviceOptions() {
  for (const preset of presets) {
    const option = document.createElement('option');
    option.value = preset.id;
    option.textContent = `${preset.name} (${preset.width}×${preset.height})`;
    deviceSelect.append(option);
  }
}

function updateCanvasSize() {
  const preset = getSelectedPreset();
  canvas.width = preset.width;
  canvas.height = preset.height;
  canvasMeta.textContent = `${preset.name} · ${state.mode === 'lockScreen' ? 'Lock screen' : 'Home screen'} · ${preset.width}×${preset.height}`;
}

function colorForKind(kind) {
  if (kind === 'danger') return 'rgba(255, 80, 80, 0.28)';
  if (kind === 'cutout') return 'rgba(255, 186, 72, 0.38)';
  if (kind === 'informational') return 'rgba(94, 135, 255, 0.25)';
  return 'rgba(255,255,255,0.2)';
}

function drawGuides() {
  if (!state.showGuides) return;
  const guides = getCurrentGuides().filter((guide) => state.visibleGuideIds.includes(guide.id));
  for (const guide of guides) {
    ctx.save();
    ctx.fillStyle = colorForKind(guide.kind);
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 2;
    ctx.fillRect(guide.x, guide.y, guide.width, guide.height);
    ctx.strokeRect(guide.x, guide.y, guide.width, guide.height);
    ctx.fillStyle = 'rgba(4, 10, 28, 0.85)';
    ctx.fillRect(guide.x + 6, guide.y + 6, Math.min(guide.width - 12, 260), 28);
    ctx.fillStyle = 'white';
    ctx.font = '18px system-ui';
    ctx.fillText(guide.label, guide.x + 14, guide.y + 26);
    ctx.restore();
  }
}

function drawImage() {
  if (!state.image?.element) {
    ctx.fillStyle = state.canvasColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#95a0c7';
    ctx.font = '32px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Upload an image to begin', canvas.width / 2, canvas.height / 2);
    return;
  }

  ctx.save();
  ctx.fillStyle = state.canvasColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.translate(state.image.x, state.image.y);
  ctx.rotate((state.image.rotation * Math.PI) / 180);
  ctx.scale(state.image.scale, state.image.scale);
  ctx.drawImage(
    state.image.element,
    -state.image.naturalWidth / 2,
    -state.image.naturalHeight / 2,
    state.image.naturalWidth,
    state.image.naturalHeight
  );
  ctx.restore();
}

function render() {
  drawImage();
  drawGuides();
}

function renderGuideControls() {
  guideToggleList.innerHTML = '';
  for (const guide of getCurrentGuides()) {
    const row = document.createElement('label');
    row.innerHTML = `<span><input type="checkbox" value="${guide.id}" ${state.visibleGuideIds.includes(guide.id) ? 'checked' : ''} /> ${guide.label}</span>`;
    const input = row.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) {
        state.visibleGuideIds.push(guide.id);
      } else {
        state.visibleGuideIds = state.visibleGuideIds.filter((id) => id !== guide.id);
      }
      render();
    });
    guideToggleList.append(row);
  }
}

function centerImage() {
  if (!state.image) return;
  state.image.x = canvas.width / 2;
  state.image.y = canvas.height / 2;
}

function fitImage() {
  if (!state.image) return;
  const sx = canvas.width / state.image.naturalWidth;
  const sy = canvas.height / state.image.naturalHeight;
  state.image.scale = Math.min(sx, sy);
  zoomRange.value = String(state.image.scale);
  centerImage();
}

function fillImage() {
  if (!state.image) return;
  const sx = canvas.width / state.image.naturalWidth;
  const sy = canvas.height / state.image.naturalHeight;
  state.image.scale = Math.max(sx, sy);
  zoomRange.value = String(state.image.scale);
  centerImage();
}

function resetImage() {
  if (!state.image) return;
  state.image.rotation = 0;
  rotateRange.value = '0';
  fitImage();
}

function updateForPresetOrMode() {
  updateCanvasSize();
  seedGuideVisibility();
  renderGuideControls();
  if (state.image) {
    centerImage();
  }
  render();
}

function bindEvents() {
  startEditingBtn.addEventListener('click', () => {
    landing.classList.add('hidden');
    editor.classList.remove('hidden');
    updateForPresetOrMode();
  });

  deviceSelect.addEventListener('change', () => {
    state.selectedDeviceId = deviceSelect.value;
    updateForPresetOrMode();
  });

  document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
      state.mode = event.target.value;
      updateForPresetOrMode();
    });
  });

  showGuides.addEventListener('change', () => {
    state.showGuides = showGuides.checked;
    render();
  });

  fileInput.addEventListener('change', async () => {
    const [file] = fileInput.files;
    if (!file) return;

    const src = URL.createObjectURL(file);
    const imageElement = await loadImage(src);
    state.image = {
      src,
      element: imageElement,
      naturalWidth: imageElement.naturalWidth,
      naturalHeight: imageElement.naturalHeight,
      x: canvas.width / 2,
      y: canvas.height / 2,
      scale: 1,
      rotation: 0
    };
    fitImage();
    const suggestions = getSuggestedColors(imageElement);
    renderColorSuggestions(suggestions);
    if (suggestions[0]) {
      state.canvasColor = suggestions[0];
      canvasColorInput.value = suggestions[0];
    }
    render();
  });

  zoomRange.addEventListener('input', () => {
    if (!state.image) return;
    state.image.scale = Number(zoomRange.value);
    render();
  });

  rotateRange.addEventListener('input', () => {
    if (!state.image) return;
    state.image.rotation = Number(rotateRange.value);
    render();
  });

  fitBtn.addEventListener('click', () => {
    fitImage();
    render();
  });

  fillBtn.addEventListener('click', () => {
    fillImage();
    render();
  });

  centerBtn.addEventListener('click', () => {
    centerImage();
    render();
  });

  resetBtn.addEventListener('click', () => {
    resetImage();
    render();
  });

  exportFormat.addEventListener('change', () => {
    state.exportFormat = exportFormat.value;
    qualityWrap.classList.toggle('hidden', state.exportFormat !== 'jpg');
  });

  qualityRange.addEventListener('input', () => {
    state.exportQuality = Number(qualityRange.value);
  });

  canvasColorInput.addEventListener('input', () => {
    state.canvasColor = normalizeHexColor(canvasColorInput.value);
    render();
  });

  downloadBtn.addEventListener('click', () => {
    if (!state.image) {
      alert('Upload an image before exporting.');
      return;
    }
    downloadWallpaper();
  });

  let isDragging = false;
  let dragStart = { x: 0, y: 0 };

  const onPointerDown = (event) => {
    if (!state.image) return;
    isDragging = true;
    canvas.setPointerCapture(event.pointerId);
    const point = getCanvasPoint(event);
    dragStart = { x: point.x - state.image.x, y: point.y - state.image.y };
  };

  const onPointerMove = (event) => {
    if (!isDragging || !state.image) return;
    const point = getCanvasPoint(event);
    state.image.x = point.x - dragStart.x;
    state.image.y = point.y - dragStart.y;
    render();
  };

  const onPointerUp = (event) => {
    isDragging = false;
    canvas.releasePointerCapture(event.pointerId);
  };

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);

  helpBtn.addEventListener('click', () => helpDialog.showModal());
  closeHelpBtn.addEventListener('click', () => helpDialog.close());
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function normalizeHexColor(hex) {
  if (!hex) return '#0b0f20';
  const normalized = hex.trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/.test(normalized)) return normalized;
  return '#0b0f20';
}

function rgbToHex(r, g, b) {
  const toHex = (value) => value.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getSuggestedColors(imageElement) {
  const sampleCanvas = document.createElement('canvas');
  const maxSample = 48;
  const ratio = Math.min(maxSample / imageElement.naturalWidth, maxSample / imageElement.naturalHeight, 1);
  sampleCanvas.width = Math.max(1, Math.floor(imageElement.naturalWidth * ratio));
  sampleCanvas.height = Math.max(1, Math.floor(imageElement.naturalHeight * ratio));
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
  sampleCtx.drawImage(imageElement, 0, 0, sampleCanvas.width, sampleCanvas.height);
  const pixels = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;

  const buckets = new Map();
  for (let i = 0; i < pixels.length; i += 16) {
    const alpha = pixels[i + 3];
    if (alpha < 200) continue;
    const r = Math.floor(pixels[i] / 32) * 32;
    const g = Math.floor(pixels[i + 1] / 32) * 32;
    const b = Math.floor(pixels[i + 2] / 32) * 32;
    const key = `${r},${g},${b}`;
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }

  return [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([key]) => {
      const [r, g, b] = key.split(',').map((value) => Number(value));
      return rgbToHex(r, g, b);
    });
}

function renderColorSuggestions(colors) {
  colorSuggestions.innerHTML = '';
  for (const color of colors) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'color-swatch';
    button.style.background = color;
    button.title = `Use ${color}`;
    button.ariaLabel = `Use ${color}`;
    button.addEventListener('click', () => {
      state.canvasColor = color;
      canvasColorInput.value = color;
      render();
    });
    colorSuggestions.append(button);
  }
}

function renderExportCanvas() {
  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = canvas.width;
  exportCanvas.height = canvas.height;
  const exportCtx = exportCanvas.getContext('2d');

  exportCtx.fillStyle = state.canvasColor;
  exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
  exportCtx.translate(state.image.x, state.image.y);
  exportCtx.rotate((state.image.rotation * Math.PI) / 180);
  exportCtx.scale(state.image.scale, state.image.scale);
  exportCtx.drawImage(
    state.image.element,
    -state.image.naturalWidth / 2,
    -state.image.naturalHeight / 2,
    state.image.naturalWidth,
    state.image.naturalHeight
  );
  return exportCanvas;
}

function downloadWallpaper() {
  const preset = getSelectedPreset();
  const exportCanvas = renderExportCanvas();
  const format = state.exportFormat;
  const mime = format === 'png' ? 'image/png' : 'image/jpeg';
  const quality = format === 'jpg' ? state.exportQuality : undefined;
  const dataUrl = exportCanvas.toDataURL(mime, quality);
  const modeName = state.mode === 'lockScreen' ? 'lockscreen' : 'homescreen';
  const extension = format === 'png' ? 'png' : 'jpg';

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `wallpaper-${preset.id}-${modeName}.${extension}`;
  link.click();
}

function init() {
  setupDeviceOptions();
  canvasColorInput.value = state.canvasColor;
  seedGuideVisibility();
  renderGuideControls();
  updateCanvasSize();
  bindEvents();
  render();
}

init();
