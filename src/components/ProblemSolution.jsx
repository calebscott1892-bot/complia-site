import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card, Stars, Check } from './primitives.jsx';

export default function ProblemSolution() {
  return (
    <Section id="why" className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{content.problemEyebrow}</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.problemHeadline}
          </h2>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.75] text-ink-muted">{product.problem}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Without */}
          <Reveal delay={0.04}>
            <Card className="h-full p-8 md:p-10">
              <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint">{content.withoutTitle}</p>
              <ul className="mt-7 space-y-4">
                {content.without.map((t) => (
                  <li key={t} className="flex items-start gap-3.5 text-[15px] leading-[1.5] text-ink-muted">
                    <span className="mt-[9px] h-px w-3.5 shrink-0 bg-ink-faint" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* With — emphasized */}
          <Reveal delay={0.1}>
            <Card
              className="relative h-full overflow-hidden p-8 md:p-10"
              style={{ borderColor: 'var(--accent-line)', boxShadow: 'var(--shadow-lift)' }}
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-accent" />
              <div className="flex items-center justify-between">
                <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">{content.withTitle}</p>
                <Stars size={13} />
              </div>
              <ul className="mt-7 space-y-4">
                {content.with.map((t) => (
                  <li key={t} className="flex items-start gap-3.5 text-[15px] leading-[1.5] text-ink">
                    <Check size={15} className="mt-[3px] shrink-0 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line-light pt-6 text-[14.5px] leading-[1.7] text-ink-muted">{product.solution}</p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
