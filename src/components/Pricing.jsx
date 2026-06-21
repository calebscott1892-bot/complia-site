import React from 'react';
import { product, SUITE_BUNDLE } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Button, Check, ArrowRight } from './primitives.jsx';

export default function Pricing() {
  return (
    <Section id="pricing" className="border-t border-line">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Start free. Upgrade when it’s paying for itself.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Paid plans unlock inside the app. No contracts — cancel anytime.
          </p>
        </Reveal>

        {/* Tier cards */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {product.tiers.map((t) => (
            <Reveal
              key={t.label}
              delay={t.featured ? 0.08 : 0}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.featured
                  ? 'border-accent-line bg-card shadow-[0_30px_80px_-40px_var(--accent-glow)]'
                  : 'border-line bg-card'
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-7 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  Most popular
                </span>
              )}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-subtle">{t.label}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-ink">${t.price}</span>
                <span className="text-ink-faint">/mo</span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{t.tagline}</p>
              <ul className="mt-6 space-y-3">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-[14px] text-ink-muted">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-1">
                <Button
                  href={product.ctaHref}
                  variant={t.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lifetime + Suite upsell */}
        <div className="mx-auto mt-5 grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-2xl border border-line bg-bg-alt/60 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-ink">Lifetime access</p>
              <p className="mt-1 text-[13px] text-ink-muted">
                One payment of <span className="font-semibold text-ink">${product.lifetime.price}</span> — yours for good.
              </p>
            </div>
            <a
              href={product.lifetime.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong sm:mt-0"
            >
              Get lifetime <ArrowRight />
            </a>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col justify-between rounded-2xl border border-line bg-bg-alt/60 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-ink">Want everything?</p>
              <p className="mt-1 text-[13px] text-ink-muted">
                Get the whole C4 Suite for{' '}
                <span className="font-semibold text-ink">${SUITE_BUNDLE.price}/mo</span>.
              </p>
            </div>
            <a
              href={SUITE_BUNDLE.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong sm:mt-0"
            >
              Explore the Suite <ArrowRight />
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center text-[13px] text-ink-faint">{product.pricing}</Reveal>
      </Container>
    </Section>
  );
}
