import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card } from './primitives.jsx';
import { Icon } from './icons.jsx';

export default function Features() {
  return (
    <Section id="features" className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.featuresHeadline}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.75] text-ink-muted">{content.featuresSub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.06}>
              <Card hover className="h-full p-8 md:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[color:var(--accent-soft)] text-accent">
                  <Icon name={f.icon} size={20} />
                </span>
                <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-ink">{f.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-ink-muted">{f.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
