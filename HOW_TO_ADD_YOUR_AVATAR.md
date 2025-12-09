# How to Add Your 3D Avatar

## Quick Start (Using Your Photo)

1. **Take a photo:**
   - Solid background
   - Front-facing
   - Good lighting

2. **Remove background:**
   - Use remove.bg or Photoshop
   - Save as PNG with transparent background

3. **Add to project:**
   - Save as `/public/avatar.png`
   - The Hero3D component will use it automatically

---

## Professional 3D Avatar (ReadyPlayer.me)

1. **Go to:** https://readyplayer.me/avatar

2. **Create avatar:**
   - Upload your photo
   - Customize if needed
   - Download as GLB file

3. **Install Three.js:**
   ```bash
   npm install three @types/three
   ```

4. **Add GLB to project:**
   - Save as `/public/avatar.glb`

5. **Switch to Hero3DAdvanced:**
   In `app/page.tsx`, change:
   ```tsx
   import Hero3D from '@/components/Hero3D';
   ```
   to:
   ```tsx
   import Hero3DAdvanced from '@/components/Hero3DAdvanced';
   ```

---

## Current Setup

Right now it's using a placeholder SVG. Replace `/public/avatar-placeholder.svg` with your photo for instant upgrade.
