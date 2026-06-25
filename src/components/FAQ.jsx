import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card, Plus } from './primitives.jsx';

/** Native <details> accordion — works without JS, accessible by default (C4 pattern). */
export default function FAQ() {
  return (
    <Section id="faq" className="border-b border-line bg-bg-alt">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
              Questions, answered.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted">
              Still wondering something? Start free in the app, or email the C4 team at{' '}
              <a href="mailto:caleb@c4studios.com.au" className="text-accent underline decoration-accent-line underline-offset-2 hover:text-accent-strong">
                caleb@c4studios.com.au
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <Card className="overflow-hidden">
              {product.faqs.map((f, i) => (
                <details key={f.q} className="group" style={i === 0 ? undefined : { borderTop: '1px solid var(--border-light)' }}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[15px] font-medium text-ink transition-colors hover:text-accent-strong [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus size={15} className="shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[62ch] px-7 pb-6 text-[14px] leading-[1.75] text-ink-muted">{f.a}</p>
                </details>
              ))}
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
