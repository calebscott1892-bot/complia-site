import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

export default function HowItWorks() {
  return (
    <Section id="how">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {content.howHeadline}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{content.howSub}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block"
          />
          {product.howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-line bg-bg text-lg font-bold text-accent">
                {s.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
