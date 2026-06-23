import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

export default function HowItWorks() {
  return (
    <Section id="how" className="border-b border-line">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.howHeadline}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.75] text-ink-muted">{content.howSub}</p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {product.howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.09} className="relative">
              <div className="mono text-[13px] font-semibold tabular-nums tracking-[0.12em] text-accent">{s.step}</div>
              <div className="mt-4 h-px w-9 bg-accent-line" />
              <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.015em] text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
