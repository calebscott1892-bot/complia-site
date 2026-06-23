import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card } from './primitives.jsx';

export default function Outcomes() {
  return (
    <Section id="outcomes" className="border-b border-line">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.outcomesHeadline}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.75] text-ink-muted">{content.outcomesSub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {product.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.07}>
              <Card className="h-full p-8 md:p-9">
                <div className="text-[clamp(2.2rem,3.4vw,3rem)] font-semibold tabular-nums leading-none tracking-[-0.04em] text-ink">
                  {h.stat}
                </div>
                <div className="mono mt-4 text-[10px] uppercase tracking-[0.2em] text-ink-subtle">{h.label}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
