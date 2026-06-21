import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

export default function HowItWorks() {
  return (
    <Section id="how" className="border-b border-line">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {content.howHeadline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.8] text-ink-muted">{content.howSub}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-3">
          {product.howItWorks.map((s) => (
            <div key={s.step} className="bg-card p-7 md:p-8">
              <span className="mono text-[12px] font-semibold tabular-nums tracking-[0.1em] text-accent">{s.step}</span>
              <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
