import React from 'react';
import { product } from '../data/product.js';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import {
  Container,
  Section,
  Reveal,
  Button,
  Eyebrow,
  Motif,
  Check,
  ArrowRight,
} from './primitives.jsx';

/**
 * Standalone, prerendered SEO landing page (a "guide").
 *
 * Rendered to its own dist/<slug>/index.html by scripts/prerender.mjs. Reuses
 * the shared Nav / Footer / primitives so every guide matches the C4 family
 * look. Reached by a normal full-page <a href> — no client routing needed.
 */
export default function LandingPage({ page }) {
  const siteUrl = product.siteUrl;
  const pageUrl = `${siteUrl}/${page.slug}`;

  return (
    <>
      <a
        href="#guide-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--accent-ink)]"
      >
        Skip to content
      </a>
      <Nav />

      <main id="guide-main" tabIndex={-1}>
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-line">
          <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 opacity-70" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line" />
          <Container className="relative pt-14 pb-16 md:pt-16 md:pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="mono flex flex-wrap items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
                <li>
                  <a href={`${siteUrl}/`} className="transition-colors hover:text-ink">Home</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a href={`${siteUrl}/#guides`} className="transition-colors hover:text-ink">Guides</a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-subtle">{page.breadcrumb}</li>
              </ol>
            </nav>

            <Reveal>
              <Eyebrow>{page.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1
                className="mt-6 max-w-[20ch] text-[clamp(2.2rem,4.6vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink"
                style={{ textWrap: 'balance' }}
              >
                {page.h1}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[58ch] text-[16.5px] leading-[1.75] text-ink-muted">{page.intro}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href={product.ctaHref} variant="primary">
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
                <Button href={`${siteUrl}/`} variant="ghost" external={false}>
                  Explore Complia
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
          </Container>
        </div>

        {/* Not-advice caveat — required on every page */}
        <div className="border-b border-line bg-bg-alt">
          <Container className="flex items-start gap-3 py-3.5">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent-line text-accent">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M12 8v5M12 17h.01" />
              </svg>
            </span>
            <p className="text-[12.5px] leading-[1.6] text-ink-muted">{product.caveat}</p>
          </Container>
        </div>

        {/* Body sections */}
        <Section className="border-b border-line">
          <Container>
            <div className="mx-auto max-w-[68ch] space-y-14">
              {page.sections.map((s, i) => (
                <Reveal key={i} as="section" delay={Math.min(i * 0.05, 0.2)}>
                  <h2 className="text-[clamp(1.4rem,2.6vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                    {s.h2}
                  </h2>
                  <p className="mt-4 text-[16px] leading-[1.78] text-ink-muted">{s.body}</p>
                  {s.list && (
                    <ul className="mt-5 space-y-2.5">
                      {s.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[15.5px] leading-[1.6] text-ink">
                          <span className="mt-1 shrink-0 text-accent">
                            <Check size={15} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="border-b border-line bg-bg-alt">
          <Container>
            <div className="mx-auto max-w-[68ch]">
              <Reveal>
                <Eyebrow>Common questions</Eyebrow>
                <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
                  Frequently asked
                </h2>
              </Reveal>
              <dl className="mt-10 divide-y divide-line border-t border-line">
                {page.faqs.map((f, i) => (
                  <Reveal key={i} as="div" delay={Math.min(i * 0.04, 0.16)} className="py-6">
                    <dt className="text-[16.5px] font-semibold leading-[1.4] tracking-[-0.01em] text-ink">{f.q}</dt>
                    <dd className="mt-3 text-[15.5px] leading-[1.7] text-ink-muted">{f.a}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="border-b border-line">
          <Container>
            <Reveal className="mx-auto max-w-[60ch] text-center">
              <span className="inline-flex justify-center">
                <Motif size={16} />
              </span>
              <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
                Put this deadline on autopilot.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
                {product.summary}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={product.ctaHref} variant="primary">
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
