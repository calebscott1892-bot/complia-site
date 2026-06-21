import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { product, content } from '../data/product.js';
import { Container, Button, Motif, ArrowRight, EASE } from './primitives.jsx';
import ProductMock from './ProductMock.jsx';

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <div id="top" className="relative overflow-hidden">
      {/* Backdrop: grid + gold aurora */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.4]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[520px]"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 0%, var(--accent-glow), transparent 70%)',
        }}
      />

      <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy column */}
          <div data-reveal="">
            <motion.a
              {...item(0)}
              href={product.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent"
            >
              <Motif size={12} />
              <span className="text-ink-muted">{content.heroBadge}</span>
            </motion.a>

            <motion.h1
              {...item(0.08)}
              className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            >
              {content.heroLead}{' '}
              <span className="text-gradient-gold">{content.heroAccent}</span>
              {content.heroTrail}
            </motion.h1>

            <motion.p {...item(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {product.summary}
            </motion.p>

            <motion.div {...item(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={product.ctaHref} variant="primary" className="px-7 py-3.5 text-base">
                {product.ctaLabel}
                <ArrowRight />
              </Button>
              <Button href="#how" variant="secondary" external={false} className="px-7 py-3.5 text-base">
                See how it works
              </Button>
            </motion.div>

            <motion.p {...item(0.32)} className="mt-5 text-sm text-ink-subtle">
              {content.heroNote}
            </motion.p>
          </div>

          {/* Visual column */}
          <div data-reveal="" className="lg:pl-4">
            <ProductMock />
          </div>
        </div>
      </Container>
    </div>
  );
}
