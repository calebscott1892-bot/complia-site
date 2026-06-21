import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Wordmark, Motif } from './primitives.jsx';

// The C4 product family. Each will live on its own subdomain; until a sibling
// site is live its link resolves via the C4 software page.
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
    <footer className="border-t border-line bg-[var(--footer-bg)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark logo={product.logo} name={product.name} />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-subtle">
              {product.oneLiner} A product of{' '}
              <a href="https://c4studios.com.au" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink">
                C4 Studios
              </a>
              .
            </p>
            <div className="mt-5 flex items-center gap-2 text-ink-subtle">
              <Motif size={13} />
              <span className="text-[13px]">{content.footerTagline}</span>
            </div>
          </div>

          <nav aria-label="C4 products">
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">C4 products</h3>
            <ul className="mt-4 space-y-2.5">
              {FAMILY.map((f) => (
                <li key={f.name}>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-current={f.current ? 'page' : undefined}
                    className={`text-[14px] transition-colors ${
                      f.current ? 'font-semibold text-accent' : 'text-ink-subtle hover:text-ink'
                    }`}
                  >
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-[14px] text-ink-subtle transition-colors hover:text-ink"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[13px] text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} C4 Studios. All rights reserved.</p>
          <p>Built in Perth, Western Australia.</p>
        </div>
      </Container>
    </footer>
  );
}
