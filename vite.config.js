import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone marketing site for ReviewLoop (a C4 Studios product).
// Client build → dist/. SSR build → dist-server/ (consumed by scripts/prerender.mjs).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
