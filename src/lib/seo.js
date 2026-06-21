/**
 * SEO + JSON-LD builders for the ReviewLoop site.
 * Adapted from the C4 marketing repo (src/lib/schema.js). Pure functions — no React,
 * no browser — so the prerender script (Node) can call them directly.
 */
import { product, seo } from '../data/product.js';

export const ORG = {
  name: 'C4 Studios',
  legalName: 'C4 Studios',
  url: 'https://c4studios.com.au',
  logo: 'https://c4studios.com.au/c4-logo.png',
  email: 'caleb@c4studios.com.au',
  founder: 'Caleb Walker',
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.url,
    logo: ORG.logo,
    email: ORG.email,
    founder: { '@type': 'Person', name: ORG.founder },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** SoftwareApplication — offers derived from product.tiers + lifetime (no hardcoded prices). */
export function softwareApplicationSchema() {
  const offers = [
    ...product.tiers.map((t) => ({
      '@type': 'Offer',
      name: `${product.name} ${t.label}`,
      price: String(t.price),
      priceCurrency: 'AUD',
      url: product.ctaHref,
      availability: 'https://schema.org/InStock',
    })),
    {
      '@type': 'Offer',
      name: `${product.name} Lifetime`,
      price: String(product.lifetime.price),
      priceCurrency: 'AUD',
      url: product.lifetime.href,
      availability: 'https://schema.org/InStock',
    },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: seo.description,
    url: seo.url,
    image: seo.ogImage,
    offers,
    publisher: { '@type': 'Organization', name: ORG.name, url: ORG.url },
  };
}

export function allSchemas() {
  return [
    organizationSchema(),
    softwareApplicationSchema(),
    faqSchema(product.faqs),
    breadcrumbSchema([
      { name: 'C4 Studios', url: ORG.url },
      { name: 'ReviewLoop', url: seo.url },
    ]),
  ];
}

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Returns the full <head> tag string injected by the prerender script. */
export function renderHead() {
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="theme-color" content="${seo.themeColor}" />`,
    `<link rel="canonical" href="${seo.url}" />`,
    // Open Graph
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="ReviewLoop" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${seo.url}" />`,
    `<meta property="og:image" content="${seo.ogImage}" />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.ogImage}" />`,
    // JSON-LD
    `<script type="application/ld+json">${JSON.stringify(allSchemas())}</script>`,
  ];
  return tags.join('\n    ');
}
