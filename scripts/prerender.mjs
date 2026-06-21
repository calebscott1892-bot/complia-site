/**
 * Prerender → static HTML (pure Node, no browser).
 *
 * 1. Renders <App/> to HTML via the SSR build (dist-server/entry-server.js).
 * 2. Injects the rendered markup into <div id="root"> in the client index.html.
 * 3. Injects <title>/meta/OG/Twitter/JSON-LD into <head> from src/lib/seo.js.
 * 4. Overwrites dist/index.html and cleans up the SSR build.
 *
 * Mirrors the intent of C4's scripts/prerender.mjs but, since this site is fully
 * static, uses Vite SSG instead of a Playwright capture — so it runs anywhere,
 * including CI with no browser.
 */
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { render } = await import(resolve(root, 'dist-server/entry-server.js'));
const { renderHead } = await import(resolve(root, 'src/lib/seo.js'));
const { seo } = await import(resolve(root, 'src/data/product.js'));

const templatePath = resolve(root, 'dist/index.html');
let html = await readFile(templatePath, 'utf8');

const appHtml = render();
const head = renderHead();

// Inject body: replace the #root contents (comment placeholder or empty).
html = html.replace(
  /<div id="root">[\s\S]*?<\/div>/,
  `<div id="root">${appHtml}</div>`
);

// Inject head: replace the marker if present, else insert before </head>.
if (html.includes('<!--app-head-->')) {
  html = html.replace('<!--app-head-->', head);
} else {
  html = html.replace('</head>', `    ${head}\n  </head>`);
}

await writeFile(templatePath, html, 'utf8');

// robots.txt + sitemap.xml — URL single-sourced from seo.url.
const origin = new URL(seo.url).origin;
await writeFile(
  resolve(root, 'dist/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  'utf8'
);
await writeFile(
  resolve(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${seo.url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
  'utf8'
);

await rm(resolve(root, 'dist-server'), { recursive: true, force: true });

console.log('✓ Prerendered dist/index.html (' + (appHtml.length / 1024).toFixed(1) + 'kb static markup) + robots.txt + sitemap.xml');
