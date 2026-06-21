import React from 'react';
import { content } from '../data/product.js';
import { Container, Section, Reveal, Stars } from './primitives.jsx';

/** Placeholders — clearly marked illustrative. Quotes live in content.testimonials. */
export default function SocialProof() {
  return (
    <Section className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="max-w-[20ch] text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {content.socialHeadline}
          </h2>
          <span className="mono shrink-0 rounded-full border border-line px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            Illustrative
          </span>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06} className="flex flex-col bg-card p-7">
              <Stars size={14} />
              <p className="mt-4 flex-1 text-[14.5px] leading-[1.65] text-ink">“{t.quote}”</p>
              <div className="mono mt-6 border-t border-line-light pt-4 text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                Sample · {t.role}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
