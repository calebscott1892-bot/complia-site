import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Reveal, Button, Motif, ArrowRight } from './primitives.jsx';

export default function FinalCTA() {
  return (
    <Section className="border-t border-line">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-accent-line bg-card px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 h-64"
            style={{ background: 'radial-gradient(50% 70% at 50% 0%, var(--accent-glow), transparent 70%)' }}
          />
          <div className="relative">
            <Motif size={18} className="justify-center" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {content.finalHeadline}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">{content.finalSub}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href={product.ctaHref} variant="primary" className="px-8 py-4 text-base">
                {product.ctaLabel}
                <ArrowRight />
              </Button>
              <Button href={product.lifetime.href} variant="secondary" className="px-8 py-4 text-base">
                Get lifetime — ${product.lifetime.price}
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-subtle">No credit card to start · paid plans unlock in-app</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
