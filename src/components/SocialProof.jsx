import React from 'react';
import { content } from '../data/product.js';
import { Container, Section, Reveal, Card, Stars } from './primitives.jsx';

/**
 * Social proof. Until real customer quotes are approved, testimonials render as
 * clearly-marked *illustrative* placeholders.
 *
 * TO GO LIVE WITH REAL TESTIMONIALS — edit data/product.js → content:
 *   1. set  testimonialsAreReal: true
 *   2. give each testimonial a real  name: 'First L.'  (and keep quote + role)
 * That hides the "Illustrative" badge and shows the real attribution.
 */
export default function SocialProof() {
  const real = content.testimonialsAreReal === true;
  return (
    <Section className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="max-w-[20ch] text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.socialHeadline}
          </h2>
          {!real && (
            <span className="mono shrink-0 rounded-full border border-line bg-card px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Illustrative
            </span>
          )}
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <Card hover className="flex h-full flex-col p-8">
                <Stars size={14} />
                <p className="mt-5 flex-1 text-[15px] leading-[1.6] text-ink">“{t.quote}”</p>
                <div className="mono mt-7 border-t border-line-light pt-5 text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                  {real ? [t.name, t.role].filter(Boolean).join(' · ') : `Sample · ${t.role}`}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
