const presets = [
  {
    id: 'iphone-11-pro-max',
    name: 'iPhone 11 Pro Max',
    width: 1242,
    height: 2688,
    modes: {
      lockScreen: [
        { id: 'status-date', label: 'Date / weather', x: 60, y: 230, width: 1122, height: 90, kind: 'danger' },
        { id: 'clock', label: 'Clock container', x: 60, y: 350, width: 1122, height: 395, kind: 'danger' },
        { id: 'widgets', label: 'Widgets container', x: 60, y: 770, width: 1122, height: 285, kind: 'danger' },
        { id: 'safe-content', label: 'Artwork safe area', x: 60, y: 1055, width: 1122, height: 1515, kind: 'informational' },
        { id: 'safe-content-conservative', label: 'Safe area (conservative)', x: 60, y: 1080, width: 1122, height: 1470, kind: 'informational' },
        { id: 'bottom-gesture', label: 'Bottom gesture area', x: 60, y: 2570, width: 1122, height: 118, kind: 'danger' }
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
  canvasColor: '#0b0f20',
  snapToBottom: false,
  retroFilter: {
    enabled: false,
    preset: 'custom',
    strength: 0.45,
    softness: 0.35,
    scanlines: 0.30,
    noise: 0.25,
    rgbSplit: 0.22,
    glow: 0.24,
    vignette: 0.22
  }
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
const snapBottomToggle = document.getElementById('snapBottomToggle');
const zoomRange = document.getElementById('zoomRange');
const rotateRange = document.getElementById('rotateRange');
const fitBtn = document.getElementById('fitBtn');
const fillBtn = document.getElementById('fillBtn');
const centerBtn = document.getElementById('centerBtn');
const alignBottomBtn = document.getElementById('alignBottomBtn');
const resetBtn = document.getElementById('resetBtn');
const retroFilterEnabled = document.getElementById('retroFilterEnabled');
const retroControls = document.getElementById('retroControls');
const retroPreset = document.getElementById('retroPreset');
const retroStrength = document.getElementById('retroStrength');
const retroSoftness = document.getElementById('retroSoftness');
const retroScanlines = document.getElementById('retroScanlines');
const retroNoise = document.getElementById('retroNoise');
const retroRgbSplit = document.getElementById('retroRgbSplit');
const retroGlow = document.getElementById('retroGlow');
const retroVignette = document.getElementById('retroVignette');
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
  renderImageToContext(ctx, canvas.width, canvas.height, { showPlaceholder: true });
}

function renderImageToContext(targetCtx, width, height, options = { showPlaceholder: false }) {
  targetCtx.save();
  targetCtx.fillStyle = state.canvasColor;
  targetCtx.fillRect(0, 0, width, height);

  if (!state.image?.element) {
    if (options.showPlaceholder) {
      targetCtx.fillStyle = '#95a0c7';
      targetCtx.font = '32px system-ui';
      targetCtx.textAlign = 'center';
      targetCtx.fillText('Upload an image to begin', width / 2, height / 2);
    }
    targetCtx.restore();
    return;
  }

  targetCtx.translate(state.image.x, state.image.y);
  targetCtx.rotate((state.image.rotation * Math.PI) / 180);
  targetCtx.scale(state.image.scale, state.image.scale);
  targetCtx.drawImage(
    state.image.element,
    -state.image.naturalWidth / 2,
    -state.image.naturalHeight / 2,
    state.image.naturalWidth,
    state.image.naturalHeight
  );
  targetCtx.restore();

  if (state.retroFilter.enabled) {
    applyRetroFilter(targetCtx, width, height, state.retroFilter);
  }
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

function alignImageBottom() {
  if (!state.image) return;
  const renderedWidth = state.image.naturalWidth * state.image.scale;
  const renderedHeight = state.image.naturalHeight * state.image.scale;
  state.image.x = (canvas.width - renderedWidth) / 2 + renderedWidth / 2;
  state.image.y = canvas.height - renderedHeight + renderedHeight / 2;
}

function applySnapToBottomIfEnabled() {
  if (!state.image || !state.snapToBottom) return;
  alignImageBottom();
}

function fitImage() {
  if (!state.image) return;
  const sx = canvas.width / state.image.naturalWidth;
  const sy = canvas.height / state.image.naturalHeight;
  state.image.scale = Math.min(sx, sy);
  zoomRange.value = String(state.image.scale);
  if (state.snapToBottom) {
    alignImageBottom();
  } else {
    centerImage();
  }
}

function fillImage() {
  if (!state.image) return;
  const sx = canvas.width / state.image.naturalWidth;
  const sy = canvas.height / state.image.naturalHeight;
  state.image.scale = Math.max(sx, sy);
  zoomRange.value = String(state.image.scale);
  if (state.snapToBottom) {
    alignImageBottom();
  } else {
    centerImage();
  }
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
    if (state.snapToBottom) {
      alignImageBottom();
    } else {
      centerImage();
    }
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
    applySnapToBottomIfEnabled();
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
    applySnapToBottomIfEnabled();
    render();
  });

  rotateRange.addEventListener('input', () => {
    if (!state.image) return;
    state.image.rotation = Number(rotateRange.value);
    applySnapToBottomIfEnabled();
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
    state.snapToBottom = false;
    snapBottomToggle.checked = false;
    render();
  });

  alignBottomBtn.addEventListener('click', () => {
    alignImageBottom();
    render();
  });

  snapBottomToggle.addEventListener('change', () => {
    state.snapToBottom = snapBottomToggle.checked;
    applySnapToBottomIfEnabled();
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

  retroFilterEnabled.addEventListener('change', () => {
    state.retroFilter.enabled = retroFilterEnabled.checked;
    retroControls.classList.toggle('hidden', !state.retroFilter.enabled);
    render();
  });

  retroPreset.addEventListener('change', () => {
    applyRetroPreset(retroPreset.value);
    render();
  });

  [retroStrength, retroSoftness, retroScanlines, retroNoise, retroRgbSplit, retroGlow, retroVignette].forEach((control) => {
    control.addEventListener('input', () => {
      updateRetroFromControls();
      render();
    });
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
    if (state.snapToBottom) {
      state.snapToBottom = false;
      snapBottomToggle.checked = false;
    }
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

function clampByte(value) {
  return Math.max(0, Math.min(255, value));
}

function coordinateNoise(x, y) {
  const seed = (x * 374761393 + y * 668265263) ^ (x * y);
  const value = Math.sin(seed) * 43758.5453123;
  return value - Math.floor(value);
}

function setRetroControlValues() {
  retroFilterEnabled.checked = state.retroFilter.enabled;
  retroControls.classList.toggle('hidden', !state.retroFilter.enabled);
  retroPreset.value = state.retroFilter.preset;
  retroStrength.value = String(state.retroFilter.strength);
  retroSoftness.value = String(state.retroFilter.softness);
  retroScanlines.value = String(state.retroFilter.scanlines);
  retroNoise.value = String(state.retroFilter.noise);
  retroRgbSplit.value = String(state.retroFilter.rgbSplit);
  retroGlow.value = String(state.retroFilter.glow);
  retroVignette.value = String(state.retroFilter.vignette);
}

function applyRetroPreset(presetName) {
  const presets = {
    'soft-crt': { strength: 0.38, softness: 0.45, scanlines: 0.22, noise: 0.18, rgbSplit: 0.14, glow: 0.28, vignette: 0.16 },
    'retro-anime': { strength: 0.52, softness: 0.40, scanlines: 0.34, noise: 0.27, rgbSplit: 0.24, glow: 0.30, vignette: 0.22 },
    'vhs-tape': { strength: 0.62, softness: 0.50, scanlines: 0.45, noise: 0.34, rgbSplit: 0.34, glow: 0.22, vignette: 0.28 }
  };

  if (presetName === 'custom' || !presets[presetName]) {
    state.retroFilter.preset = 'custom';
    return;
  }

  Object.assign(state.retroFilter, presets[presetName], { preset: presetName });
  setRetroControlValues();
}

function updateRetroFromControls() {
  state.retroFilter.strength = Number(retroStrength.value);
  state.retroFilter.softness = Number(retroSoftness.value);
  state.retroFilter.scanlines = Number(retroScanlines.value);
  state.retroFilter.noise = Number(retroNoise.value);
  state.retroFilter.rgbSplit = Number(retroRgbSplit.value);
  state.retroFilter.glow = Number(retroGlow.value);
  state.retroFilter.vignette = Number(retroVignette.value);
  if (state.retroFilter.preset !== 'custom') {
    state.retroFilter.preset = 'custom';
    retroPreset.value = 'custom';
  }
}

function applyRetroFilter(targetCtx, width, height, settings) {
  const strength = settings.strength;

  if (settings.softness > 0.01) {
    const softnessCanvas = document.createElement('canvas');
    softnessCanvas.width = Math.max(1, Math.floor(width * (1 - 0.20 * settings.softness * strength)));
    softnessCanvas.height = Math.max(1, Math.floor(height * (1 - 0.20 * settings.softness * strength)));
    const softnessCtx = softnessCanvas.getContext('2d');
    softnessCtx.drawImage(targetCtx.canvas, 0, 0, softnessCanvas.width, softnessCanvas.height);
    targetCtx.clearRect(0, 0, width, height);
    targetCtx.imageSmoothingEnabled = true;
    targetCtx.drawImage(softnessCanvas, 0, 0, width, height);
  }

  if (settings.glow > 0.01) {
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = width;
    glowCanvas.height = height;
    const glowCtx = glowCanvas.getContext('2d');
    glowCtx.drawImage(targetCtx.canvas, 0, 0);

    targetCtx.save();
    targetCtx.globalAlpha = settings.glow * strength * 0.45;
    targetCtx.globalCompositeOperation = 'screen';
    targetCtx.filter = `blur(${(2 + settings.glow * 3).toFixed(2)}px)`;
    targetCtx.drawImage(glowCanvas, 0, 0);
    targetCtx.restore();
  }

  const imageData = targetCtx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const src = new Uint8ClampedArray(data);
  const splitPixels = Math.max(0, Math.round(settings.rgbSplit * strength * 3));
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = (y * width + x) * 4;
      const offset = Math.min(splitPixels, Math.floor((Math.abs(x - centerX) / centerX) * splitPixels));
      const rIdx = (y * width + Math.min(width - 1, x + offset)) * 4;
      const bIdx = (y * width + Math.max(0, x - offset)) * 4;

      let r = src[rIdx];
      let g = src[idx + 1];
      let b = src[bIdx + 2];

      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      const saturation = 1 - settings.strength * 0.18;
      r = gray + (r - gray) * saturation;
      g = gray + (g - gray) * saturation;
      b = gray + (b - gray) * saturation;

      const lift = settings.strength * 12;
      r += lift;
      g += lift;
      b += lift;

      const coolShadow = settings.strength * 10;
      const warmHighlight = settings.strength * 8;
      if (gray < 120) {
        b += coolShadow;
      } else {
        r += warmHighlight;
        g += warmHighlight * 0.3;
      }

      const lineFactor = 1 - settings.scanlines * strength * (y % 2 === 0 ? 0.16 : 0.05);
      r *= lineFactor;
      g *= lineFactor;
      b *= lineFactor;

      const noise = (coordinateNoise(x, y) - 0.5) * 2 * settings.noise * strength * 20;
      r += noise;
      g += noise;
      b += noise;

      const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) / maxDist;
      const vignette = 1 - settings.vignette * strength * Math.max(0, dist - 0.3) * 0.7;
      r *= vignette;
      g *= vignette;
      b *= vignette;

      data[idx] = clampByte(r);
      data[idx + 1] = clampByte(g);
      data[idx + 2] = clampByte(b);
    }
  }

  targetCtx.putImageData(imageData, 0, 0);
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
  renderImageToContext(exportCtx, exportCanvas.width, exportCanvas.height, { showPlaceholder: false });
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
  snapBottomToggle.checked = state.snapToBottom;
  setRetroControlValues();
  seedGuideVisibility();
  renderGuideControls();
  updateCanvasSize();
  bindEvents();
  render();
}

init();
