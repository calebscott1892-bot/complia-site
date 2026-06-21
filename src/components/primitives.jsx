import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-container px-6 md:px-12 ${className}`}>{children}</div>;
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Scroll-reveal. SSR-safe; <noscript> in index.html forces [data-reveal] visible. */
export function Reveal({ children, as = 'div', delay = 0, y = 12, className = '', ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      data-reveal=""
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Monospace technical eyebrow with a small accent tick — the C4 signature label. */
export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent ${className}`}>
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/** Pill CTA — accent (filled) / ghost (outlined) / minimal text-link. */
export function Button({ href, children, variant = 'primary', external = true, className = '', ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-300';
  const styles = {
    primary: 'bg-accent text-[color:var(--accent-ink)] hover:opacity-90',
    ghost: 'border border-ink text-ink hover:bg-ink hover:text-bg',
    soft: 'border border-line bg-card text-ink hover:border-ink',
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
export function Motif({ size = 13, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[3px] border border-accent-line text-accent ${className}`}
      aria-hidden="true"
      style={{ width: size + 7, height: size + 7 }}
    >
      <svg width={size - 1} height={size - 1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export function Stars({ count = 5, className = '', size = 14 }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-accent ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

export function Star({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 6.06 6.6.78-4.9 4.5 1.32 6.56L12 17.9l-5.92 3.0 1.32-6.56-4.9-4.5 6.6-.78z" />
    </svg>
  );
}

export function Wordmark({ logo, name, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-[3px] border border-line bg-card">
        <img src={logo} alt="" width={24} height={24} className="h-5 w-5 object-contain" />
      </span>
      <span className="text-[16px] font-semibold tracking-[-0.01em] text-ink">{name}</span>
    </span>
  );
}

/** Animated accent corner brackets around a blueprint panel (mirrors C4's hero). */
export function CornerBrackets({ inset = 10, size = 16 }) {
  const reduce = useReducedMotion();
  const defs = [
    { k: 'tl', style: { top: inset, left: inset, borderTop: '1.5px solid var(--accent)', borderLeft: '1.5px solid var(--accent)' }, d: [1, 1] },
    { k: 'tr', style: { top: inset, right: inset, borderTop: '1.5px solid var(--accent)', borderRight: '1.5px solid var(--accent)' }, d: [-1, 1] },
    { k: 'bl', style: { bottom: inset, left: inset, borderBottom: '1.5px solid var(--accent)', borderLeft: '1.5px solid var(--accent)' }, d: [1, -1] },
    { k: 'br', style: { bottom: inset, right: inset, borderBottom: '1.5px solid var(--accent)', borderRight: '1.5px solid var(--accent)' }, d: [-1, -1] },
  ];
  return (
    <>
      {defs.map((c, i) => (
        <motion.span
          key={c.k}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ width: size, height: size, ...c.style }}
          animate={reduce ? {} : { x: [0, c.d[0] * 3, 0], y: [0, c.d[1] * 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}
    </>
  );
}

export function ArrowRight({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 group-hover:translate-x-0.5 ${className}`}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 13, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function Check({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Plus({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
