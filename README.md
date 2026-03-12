# Wallpaperomizer v1 (Browser MVP)

A privacy-first, browser-based iPhone wallpaper editor with device presets, lock/home mode guides, image transforms, and local export to PNG/JPG.

## Features

- iPhone portrait presets with exact export dimensions
- Lock screen and home screen guide modes
- Upload JPG/PNG/WebP images locally
- Pan, zoom, rotate controls
- Fit, fill, center, and reset helpers
- Per-guide visibility toggles + global guide toggle
- Guide overlays are preview-only (not exported)
- Export PNG or JPG with quality control

## Run locally

Because this is a static app, you can open `index.html` directly in a browser, or serve it:

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Notes

Guide coordinates are practical v1 placeholders and should be validated on physical devices in future iterations.
