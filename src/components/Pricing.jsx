import React from 'react';
import { product, SUITE_BUNDLE } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Button, Check, ArrowUpRight } from './primitives.jsx';

export default function Pricing() {
  return (
    <Section id="pricing" className="border-b border-line">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            Start free. Upgrade when it’s paying for itself.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.8] text-ink-muted">
            Paid plans unlock inside the app. No contracts — cancel anytime.
          </p>
        </Reveal>

        {/* Tier cards */}
        <Reveal delay={0.06} className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
          {product.tiers.map((t) => (
            <div key={t.label} className="flex flex-col bg-card p-8">
              <div className="flex items-center justify-between">
                <span className="mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-subtle">{t.label}</span>
                {t.featured && (
                  <span className="mono rounded-full bg-accent-soft px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-[2.6rem] font-semibold tabular-nums leading-none tracking-[-0.03em] text-ink">${t.price}</span>
                <span className="mono text-[12px] text-ink-faint">/mo</span>
              </div>
              <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-muted">{t.tagline}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-ink-muted">
                    <Check size={14} className="mt-[3px] shrink-0 text-accent" />
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href={product.ctaHref} variant={t.featured ? 'primary' : 'soft'} className="w-full">
                  {product.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Lifetime + Suite */}
        <Reveal delay={0.1} className="mt-px grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2">
          <PriceRow
            label="Lifetime access"
            body={<>One payment of <span className="font-semibold tabular-nums text-ink">${product.lifetime.price}</span> — yours for good.</>}
            cta="Get lifetime"
            href={product.lifetime.href}
          />
          <PriceRow
            label="The C4 Suite"
            body={<>Get everything for <span className="font-semibold tabular-nums text-ink">${SUITE_BUNDLE.price}/mo</span>.</>}
            cta="Explore the Suite"
            href={SUITE_BUNDLE.href}
          />
        </Reveal>

        <Reveal className="mono mt-8 text-[11px] uppercase tracking-[0.14em] text-ink-faint">{product.pricing}</Reveal>
      </Container>
    </Section>
  );
}

function PriceRow({ label, body, cta, href }) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-card p-7 sm:flex-row sm:items-center">
      <div>
        <p className="mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-subtle">{label}</p>
        <p className="mt-2 text-[13.5px] text-ink-muted">{body}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mono inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent hover:text-accent-strong"
      >
        {cta} <ArrowUpRight size={12} />
      </a>
    </div>
  );
}
