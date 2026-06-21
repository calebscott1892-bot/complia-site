import React from 'react';
import { product } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';

/** Native <details> accordion — works without JS, accessible by default (C4 pattern). */
export default function FAQ() {
  return (
    <Section id="faq" className="border-t border-line bg-bg-alt/40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Still wondering something? Start free in the app and see it work, or reach the C4 team at{' '}
              <a href="mailto:caleb@c4studios.com.au" className="text-accent hover:text-accent-strong">
                caleb@c4studios.com.au
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.08} className="divide-y divide-line border-y border-line">
            {product.faqs.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-ink transition-colors hover:text-accent-strong">
                  {f.q}
                  <Chevron />
                </summary>
                <div className="overflow-hidden pb-5 pr-8 text-[15px] leading-relaxed text-ink-muted">
                  {f.a}
                </div>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
