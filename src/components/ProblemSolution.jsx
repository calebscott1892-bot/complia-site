import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Motif, Check } from './primitives.jsx';

export default function ProblemSolution() {
  return (
    <Section id="why" className="border-t border-line bg-bg-alt/40">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{content.problemEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {content.problemHeadline}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{product.problem}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Without */}
          <Reveal delay={0.05} className="rounded-2xl border border-line bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">{content.withoutTitle}</p>
            <ul className="mt-5 space-y-3.5">
              {content.without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-ink-faint">
                    <Dash />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* With */}
          <Reveal delay={0.12} className="relative overflow-hidden rounded-2xl border border-accent-line bg-card p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-2xl"
              style={{ background: 'var(--accent-glow)' }}
            />
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{content.withTitle}</p>
              <Motif size={14} />
            </div>
            <ul className="mt-5 space-y-3.5">
              {content.with.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-[15px] leading-relaxed text-ink-muted">
              {product.solution}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Dash() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M5 12h14" />
    </svg>
  );
}
