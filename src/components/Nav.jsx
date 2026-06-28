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

  return (
    <header
      className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <div className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-6 md:px-12">
        <a href="#top" className="rounded-[3px]" aria-label={`${product.name} home`}>
          <Wordmark logo={product.logo} name={product.name} />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
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
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="mono flex min-h-[48px] items-center border-b border-line/60 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-subtle transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
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
