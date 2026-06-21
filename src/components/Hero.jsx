import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { product, content } from '../data/product.js';
import { Container, Button, Eyebrow, ArrowRight, EASE } from './primitives.jsx';
import ProductMock from './ProductMock.jsx';

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: EASE } };

  return (
    <div id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line" />

      <Container className="relative pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:gap-16">
          {/* Copy */}
          <div data-reveal="">
            <motion.div {...item(0)}>
              <Eyebrow>{content.heroBadge}</Eyebrow>
            </motion.div>

            <motion.h1
              {...item(0.08)}
              className="mt-6 max-w-[16ch] text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-ink"
              style={{ textWrap: 'balance' }}
            >
              {content.heroLead} <span className="text-accent">{content.heroAccent}</span>
              {content.heroTrail}
            </motion.h1>

            <motion.p {...item(0.16)} className="mt-7 max-w-[40ch] text-[15.5px] leading-[1.8] text-ink-muted">
              {product.summary}
            </motion.p>

            <motion.div {...item(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={product.ctaHref} variant="primary">
                {product.ctaLabel}
                <ArrowRight />
              </Button>
              <Button href="#how" variant="ghost" external={false}>
                See how it works
                <ArrowRight />
              </Button>
            </motion.div>

            <motion.p {...item(0.32)} className="mono mt-6 text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
              {content.heroNote}
            </motion.p>
          </div>

          {/* Visual */}
          <div data-reveal="">
            <ProductMock />
          </div>
        </div>
      </Container>

      {/* Bottom meta strip — C4 signature */}
      <div className="border-t border-line">
        <Container className="py-4">
          <div className="mono grid grid-cols-2 gap-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint sm:grid-cols-4">
            <span>Perth-built</span>
            <span>Start free</span>
            <span className="hidden sm:inline">{content.heroMetaTag}</span>
            <span>By C4 Studios</span>
          </div>
        </Container>
      </div>
    </div>
  );
}
