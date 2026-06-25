import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Motif, ArrowUpRight } from './primitives.jsx';

const FAMILY = [
  { name: 'ReviewLoop', href: 'https://reviewloop.c4studios.com.au' },
  { name: 'ReturnDesk', href: 'https://returndesk.c4studios.com.au' },
  { name: 'Complia', href: 'https://complia.c4studios.com.au' },
  { name: 'FirmFlow', href: 'https://firmflow.c4studios.com.au' },
].map((f) => ({ ...f, current: f.name === product.name }));

const COMPANY = [
  { name: 'C4 Studios', href: 'https://c4studios.com.au' },
  { name: 'All software', href: 'https://c4studios.com.au/software' },
  { name: 'Get in touch', href: 'mailto:caleb@c4studios.com.au' },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--ink-bg)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-[3px] bg-white/5">
                <img src={product.logo} alt="" width={24} height={24} className="h-5 w-5 object-contain" />
              </span>
              <span className="text-[16px] font-semibold tracking-[-0.01em] text-[color:var(--ink-text)]">{product.name}</span>
            </span>
            <p className="mt-4 max-w-[30ch] text-[13.5px] leading-[1.65] text-[color:var(--ink-muted)]">
              {product.oneLiner} A product of{' '}
              <a href="https://c4studios.com.au" target="_blank" rel="noopener noreferrer" className="text-[color:var(--ink-text)] underline decoration-[color:var(--ink-border)] underline-offset-2 hover:decoration-[color:var(--ink-text)]">
                C4 Studios
              </a>
              .
            </p>
            <div className="mt-5 flex items-center gap-2 text-[color:var(--ink-muted)]">
              <Motif size={12} />
              <span className="mono text-[10px] uppercase tracking-[0.14em]">{content.footerTagline}</span>
            </div>
          </div>

          <FooterCol title="C4 products" links={FAMILY} />
          <FooterCol title="Company" links={COMPANY} />
        </div>

        <div className="mono mt-14 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--ink-border)] pt-8 text-[10px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} C4 Studios</p>
          <p>Built in Perth, Western Australia</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <nav aria-label={title}>
      <h3 className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-faint)]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-current={l.current ? 'page' : undefined}
              className={`group inline-flex items-center gap-1.5 text-[13.5px] transition-colors ${
                l.current ? 'font-medium text-accent-strong' : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink-text)]'
              }`}
            >
              {l.name}
              {!l.href.startsWith('mailto') && <ArrowUpRight size={11} className="opacity-50" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
