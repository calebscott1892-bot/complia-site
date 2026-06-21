import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

export default function Outcomes() {
  return (
    <Section id="outcomes">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {content.outcomesHeadline}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{content.outcomesSub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {product.highlights.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 0.08}
              className="rounded-2xl border border-line bg-card p-8 text-center"
            >
              <div className="text-gradient-gold text-4xl font-extrabold tracking-tight sm:text-5xl">{h.stat}</div>
              <div className="mt-3 text-[15px] text-ink-muted">{h.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
