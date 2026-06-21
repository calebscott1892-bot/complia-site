import React from 'react';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal } from './primitives.jsx';
import { Icon } from './icons.jsx';

export default function Features() {
  return (
    <Section id="features" className="border-t border-line bg-bg-alt/40">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {content.featuresHeadline}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{content.featuresSub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {product.features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 2) * 0.08}
              className="group rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent-line"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bg text-accent transition-colors duration-300 group-hover:border-accent-line group-hover:bg-accent-soft">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

