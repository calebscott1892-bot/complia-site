import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { product } from '../data/product.js';
import { Button, Wordmark, ArrowRight, EASE } from './primitives.jsx';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState('');
  const reduce = useReducedMotion();

  // Close on Escape; lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Condense the header once the page scrolls past ~40px.
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link whose section is currently in view.
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });
        let best = '';
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        setActive(best);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-line backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: condensed
          ? 'color-mix(in srgb, var(--bg) 94%, transparent)'
          : 'color-mix(in srgb, var(--bg) 85%, transparent)',
      }}
    >
      <div
        className={`mx-auto flex w-full max-w-container items-center justify-between px-6 transition-[height] duration-300 md:px-12 ${
          condensed ? 'h-14' : 'h-16'
        }`}
      >
        <a href="#top" className="rounded-[3px]" aria-label={`${product.name} home`}>
          <Wordmark logo={product.logo} name={product.name} />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'true' : undefined}
                className={`mono text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  isActive ? 'text-accent' : 'text-ink-subtle hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://c4studios.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="mono hidden text-[10px] font-medium uppercase tracking-[0.16em] text-ink-faint transition-colors hover:text-ink lg:inline"
          >
            by C4 Studios
          </a>
          <span className="hidden sm:inline-flex">
            <Button href={product.ctaHref} variant="primary" className="px-5 py-2.5">
              {product.ctaLabel}
              <ArrowRight />
            </Button>
          </span>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-grid h-11 w-11 place-items-center rounded-md text-ink md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="border-t border-line bg-[color:var(--bg)] md:hidden"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <nav className="mx-auto flex w-full max-w-container flex-col px-6 py-2" aria-label="Mobile">
              {LINKS.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`mono flex min-h-[48px] items-center border-b border-line/60 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-accent' : 'text-ink-subtle hover:text-ink'
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <div className="flex items-center justify-between gap-4 py-4">
                <a
                  href="https://c4studios.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-faint"
                >
                  by C4 Studios
                </a>
                <Button href={product.ctaHref} variant="primary" className="px-5 py-2.5">
                  {product.ctaLabel}
                  <ArrowRight />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
