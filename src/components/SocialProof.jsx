import React from 'react';
import { content } from '../data/product.js';
import { Container, Section, Reveal, Stars } from './primitives.jsx';

/**
 * Social-proof slot. These are PLACEHOLDERS — clearly marked as illustrative —
 * until real customer quotes are approved. Quotes live in data/product.js → content.testimonials.
 */
export default function SocialProof() {
  return (
    <Section className="border-t border-line bg-bg-alt/40">
      <Container>
        <Reveal className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{content.socialHeadline}</h2>
          <span className="hidden shrink-0 rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-faint sm:inline">
            Illustrative
          </span>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="flex flex-col rounded-2xl border border-line bg-card p-7">
              <Stars size={15} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">“{t.quote}”</p>
              <div className="mt-6 border-t border-line pt-4">
                <div className="text-sm font-semibold text-ink-muted">Sample testimonial</div>
                <div className="text-[13px] text-ink-faint">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center text-[13px] text-ink-faint sm:hidden">
          Placeholder quotes — real customer reviews coming soon.
        </Reveal>
      </Container>
    </Section>
  );
}
