import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Reveal, Button, Motif, ArrowRight } from './primitives.jsx';

export default function FinalCTA() {
  return (
    <Section>
      <Container>
        <Reveal className="relative overflow-hidden rounded-[3px] bg-[color:var(--ink-bg)] px-8 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line" />
          <div className="relative">
            <Motif size={16} className="justify-center" />
            <h2 className="mx-auto mt-6 max-w-[20ch] text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[color:var(--ink-text)]">
              {content.finalHeadline}
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">{content.finalSub}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={product.ctaHref} variant="primary">
                {product.ctaLabel}
                <ArrowRight />
              </Button>
              <a
                href={product.lifetime.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--ink-border)] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--ink-text)] transition-colors duration-300 hover:bg-[color:rgba(255,255,255,0.06)]"
              >
                Get lifetime — ${product.lifetime.price}
              </a>
            </div>
            <p className="mono mt-6 text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-faint)]">
              No card to start · paid plans unlock in-app
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
