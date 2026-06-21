import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

/** Centered max-width container. */
export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-container px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Vertical section rhythm. */
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Scroll-reveal wrapper. SSR-safe: renders hidden initial state on the server,
 *  hydrates to the same markup, then animates in view. <noscript> in index.html
 *  forces [data-reveal] visible when JS is off. */
export function Reveal({ children, as = 'div', delay = 0, y = 18, className = '', ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      data-reveal=""
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Small uppercase eyebrow label with a leading tick. */
export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/** Primary / secondary CTA button. Renders as <a>. */
export function Button({ href, children, variant = 'primary', external = true, className = '', ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2';
  const styles = {
    primary:
      'bg-accent text-[color:var(--accent-ink)] hover:bg-accent-strong shadow-[0_8px_30px_-8px_var(--accent-glow)] hover:shadow-[0_12px_40px_-8px_var(--accent-glow)] hover:-translate-y-0.5',
    secondary:
      'border border-line bg-white/[0.02] text-ink hover:border-accent-line hover:bg-white/[0.04] hover:-translate-y-0.5',
    ghost: 'text-ink-muted hover:text-ink',
  };
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Product signature motif (decorative). Complia = a compliance tick. */
export function Motif({ size = 14, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md bg-accent-soft text-accent ${className}`}
      aria-hidden="true"
      style={{ width: size + 6, height: size + 6 }}
    >
      <svg width={size - 1} height={size - 1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

/** Five-star row — ReviewLoop's signature motif. */
export function Stars({ count = 5, className = '', size = 16 }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

export function Star({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-accent ${className}`}>
      <path d="M12 2.5l2.9 6.06 6.6.78-4.9 4.5 1.32 6.56L12 17.9l-5.92 3.0 1.32-6.56-4.9-4.5 6.6-.78z" />
    </svg>
  );
}

/** Wordmark lockup: ReviewLoop logo + name. */
export function Wordmark({ logo, name, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={logo} alt="" width={28} height={28} className="h-7 w-7 rounded-md object-contain" />
      <span className="text-[17px] font-bold tracking-tight text-ink">{name}</span>
    </span>
  );
}

export function ArrowRight({ className = '' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 group-hover:translate-x-0.5 ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = '' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
