import React from 'react';
import { product } from '../data/product.js';
import { Button, Wordmark, ArrowRight } from './primitives.jsx';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <div className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-6 md:px-12">
        <a href="#top" className="rounded-[3px]" aria-label="ReviewLoop home">
          <Wordmark logo={product.logo} name={product.name} />
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://c4studios.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="mono hidden text-[10px] font-medium uppercase tracking-[0.16em] text-ink-faint transition-colors hover:text-ink lg:inline"
          >
            by C4 Studios
          </a>
          <Button href={product.ctaHref} variant="primary" className="px-5 py-2.5">
            {product.ctaLabel}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
