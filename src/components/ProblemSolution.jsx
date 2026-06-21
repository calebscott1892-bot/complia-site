import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Stars, Check } from './primitives.jsx';

export default function ProblemSolution() {
  return (
    <Section id="why" className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{content.problemEyebrow}</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {content.problemHeadline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.8] text-ink-muted">{product.problem}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
          {/* Without */}
          <div className="bg-card p-8 md:p-10">
            <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint">{content.withoutTitle}</p>
            <ul className="mt-6 space-y-3.5">
              {content.without.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink-muted">
                  <span className="mt-[7px] h-px w-3 shrink-0 bg-ink-faint" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="bg-card p-8 md:p-10">
            <div className="flex items-center justify-between">
              <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">{content.withTitle}</p>
              <Stars size={13} />
            </div>
            <ul className="mt-6 space-y-3.5">
              {content.with.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink">
                  <Check size={15} className="mt-[3px] shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line-light pt-6 text-[14px] leading-[1.7] text-ink-muted">{product.solution}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
