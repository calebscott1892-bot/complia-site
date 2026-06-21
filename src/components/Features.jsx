import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';
import { Icon } from './icons.jsx';

export default function Features() {
  return (
    <Section id="features" className="border-b border-line bg-bg-alt">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {content.featuresHeadline}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.8] text-ink-muted">{content.featuresSub}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
          {product.features.map((f) => (
            <div key={f.title} className="bg-card p-7 md:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line text-accent">
                <Icon name={f.icon} size={20} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.01em] text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{f.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
