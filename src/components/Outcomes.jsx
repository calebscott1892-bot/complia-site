import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

export default function Outcomes() {
  return (
    <Section id="outcomes" className="border-b border-line">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {content.outcomesHeadline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.8] text-ink-muted">{content.outcomesSub}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-3">
          {product.highlights.map((h) => (
            <div key={h.label} className="bg-card p-8">
              <div className="text-[clamp(1.9rem,3vw,2.6rem)] font-semibold tabular-nums leading-none tracking-[-0.03em] text-ink">
                {h.stat}
              </div>
              <div className="mono mt-3 text-[10px] uppercase tracking-[0.18em] text-ink-subtle">{h.label}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
