import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import LandingPage from './components/LandingPage.jsx';

// Consumed by scripts/prerender.mjs to produce static HTML (pure Node, no browser).
export function render() {
  return renderToString(<App />);
}

// Renders a single programmatic-SEO landing page to static HTML.
export function renderPage(page) {
  return renderToString(<LandingPage page={page} />);
}
