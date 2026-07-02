/**
 * Prerender → static HTML (pure Node, no browser).
 *
 * 1. Renders <App/> to HTML via the SSR build (dist-server/entry-server.js).
 * 2. Injects the rendered markup into <div id="root"> in the client index.html.
 * 3. Injects <title>/meta/OG/Twitter/JSON-LD into <head> from src/lib/seo.js.
 * 4. Renders each programmatic-SEO landing page to its own dist/<slug>/index.html
 *    with per-page meta + FAQPage/BreadcrumbList JSON-LD.
 * 5. Writes robots.txt + sitemap.xml (homepage + every landing page) and cleans
 *    up the SSR build.
 *
 * Mirrors the intent of C4's scripts/prerender.mjs but, since this site is fully
 * static, uses Vite SSG instead of a Playwright capture — so it runs anywhere,
 * including CI with no browser.
 */
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { render, renderPage } = await import(pathToFileURL(resolve(root, 'dist-server/entry-server.js')).href);
const { renderHead, renderPageHead } = await import(pathToFileURL(resolve(root, 'src/lib/seo.js')).href);
const { seo } = await import(pathToFileURL(resolve(root, 'src/data/product.js')).href);
const { landingPages } = await import(pathToFileURL(resolve(root, 'src/data/landingPages.js')).href);

const templatePath = resolve(root, 'dist/index.html');
// Read the built client template ONCE, before mutating it — landing pages reuse
// it as their base so they inherit the hashed asset <script>/<link> tags.
const template = await readFile(templatePath, 'utf8');

/** Inject rendered markup + head into a copy of the client template. */
function buildDocument(appHtml, headHtml) {
  let html = template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );
  if (html.includes('<!--app-head-->')) {
    html = html.replace('<!--app-head-->', headHtml);
  } else {
    html = html.replace('</head>', `    ${headHtml}\n  </head>`);
  }
  return html;
}

// ── Homepage ──────────────────────────────────────────────────────────────
await writeFile(templatePath, buildDocument(render(), renderHead()), 'utf8');
const homeKb = (render().length / 1024).toFixed(1);

// ── Programmatic SEO landing pages → dist/<slug>/index.html ─────────────────
const landingUrls = [];
for (const page of landingPages) {
  const outDir = resolve(root, 'dist', page.slug);
  await mkdir(outDir, { recursive: true });
  const pageHtml = buildDocument(renderPage(page), renderPageHead(page));
  await writeFile(resolve(outDir, 'index.html'), pageHtml, 'utf8');
  landingUrls.push(`${seo.url}/${page.slug}`);
}

// ── robots.txt + sitemap.xml — URLs single-sourced from seo.url ─────────────
const origin = new URL(seo.url).origin;
await writeFile(
  resolve(root, 'dist/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  'utf8'
);

const urlEntry = (loc, priority, changefreq) =>
  `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const sitemapEntries = [
  urlEntry(seo.url, '1.0', 'weekly'),
  ...landingUrls.map((u) => urlEntry(u, '0.8', 'monthly')),
].join('\n');

await writeFile(
  resolve(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
  'utf8'
);

await rm(resolve(root, 'dist-server'), { recursive: true, force: true });

console.log(
  `✓ Prerendered dist/index.html (${homeKb}kb static markup) + ${landingPages.length} landing pages + robots.txt + sitemap.xml`
);
for (const u of landingUrls) console.log('  → ' + u);
