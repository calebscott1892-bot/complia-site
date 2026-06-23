import React from 'react';
import { product, SUITE_BUNDLE } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Card, Button, Check, ArrowUpRight } from './primitives.jsx';

export default function Pricing() {
  return (
    <Section id="pricing" className="border-b border-line">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Pricing</Eyebrow>
          </div>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            Start free. Upgrade when it’s paying for itself.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">
            Paid plans unlock inside the app. No contracts — cancel anytime.
          </p>
        </Reveal>

        {/* Tier cards */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {product.tiers.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.07}>
              <Card
                className="relative flex h-full flex-col overflow-hidden p-8 md:p-9"
                style={t.featured ? { borderColor: 'var(--accent-line)', boxShadow: 'var(--shadow-lift)' } : undefined}
              >
                {t.featured && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-accent" />}
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-subtle">{t.label}</span>
                  {t.featured && (
                    <span className="mono rounded-full bg-[color:var(--accent-soft)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-[2.9rem] font-semibold tabular-nums leading-none tracking-[-0.04em] text-ink">${t.price}</span>
                  <span className="mono text-[12px] text-ink-faint">/mo</span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-ink-muted">{t.tagline}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-ink-muted">
                      <Check size={14} className="mt-[3px] shrink-0 text-accent" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={product.ctaHref} variant={t.featured ? 'primary' : 'soft'} className="w-full">
                    {product.ctaLabel}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Lifetime + Suite */}
        <div className="mx-auto mt-5 grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal delay={0.04}>
            <PriceRow
              label="Lifetime access"
              body={<>One payment of <span className="font-semibold tabular-nums text-ink">${product.lifetime.price}</span> — yours for good.</>}
              cta="Get lifetime"
              href={product.lifetime.href}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PriceRow
              label="The C4 Suite"
              body={<>Get everything for <span className="font-semibold tabular-nums text-ink">${SUITE_BUNDLE.price}/mo</span>.</>}
              cta="Explore the Suite"
              href={SUITE_BUNDLE.href}
            />
          </Reveal>
        </div>

        <Reveal className="mono mt-10 text-center text-[11px] uppercase tracking-[0.16em] text-ink-faint">{product.pricing}</Reveal>
      </Container>
    </Section>
  );
}

function PriceRow({ label, body, cta, href }) {
  return (
    <Card hover as="a" href={href} target="_blank" rel="noopener noreferrer" className="group flex h-full items-center justify-between gap-4 p-7">
      <div>
        <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-subtle">{label}</p>
        <p className="mt-2 text-[14px] text-ink-muted">{body}</p>
      </div>
      <span className="mono inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
        {cta} <ArrowUpRight size={12} />
      </span>
    </Card>
  );
}
