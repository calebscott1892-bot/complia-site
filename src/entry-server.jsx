import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Consumed by scripts/prerender.mjs to produce static HTML (pure Node, no browser).
export function render() {
  return renderToString(<App />);
}
