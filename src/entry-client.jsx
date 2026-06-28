import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
// Self-hosted Inter (replaces the render-blocking Google Fonts <link>).
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import './index.css';

const root = document.getElementById('root');

// Prerendered HTML (from scripts/prerender.mjs) has real element children → hydrate.
// Dev / un-prerendered has only the <!--app-html--> comment → fresh render.
if (root.childElementCount > 0) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
