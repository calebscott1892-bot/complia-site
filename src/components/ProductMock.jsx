import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CornerBrackets, Check, EASE } from './primitives.jsx';

/**
 * Complia hero visual — an editorial "blueprint" of the compliance calendar,
 * C4 engineering-drawing style: hairline borders, monospace labels, minimal
 * radius, accent used sparingly. Light, not a dark neon window.
 */
const OBLIGATIONS = [
  { title: 'BAS — Quarter 4', due: 'DUE 28 FEB', tag: '9 DAYS', top: true },
  { title: 'Super guarantee', due: 'DUE 28 APR', tag: 'NOT STARTED' },
  { title: 'ASIC annual review', due: 'DUE 14 MAY', tag: 'REMINDER SET' },
];
const CHECKLIST = [
  { label: 'Reconcile Q4 transactions', done: true },
  { label: 'Confirm GST on sales', done: true },
  { label: 'Review payroll & PAYG', done: true },
  { label: 'Check fuel tax credits', done: false },
];

export default function ProductMock() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } };

  return (
    <div className="relative">
      <motion.div {...rise(0.1)} className="relative rounded-[10px] border border-line bg-card" style={{ boxShadow: 'var(--shadow-panel)' }}>
        <CornerBrackets inset={10} size={16} />

        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="mono inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Complia · Obligation calendar
          </span>
          <span className="mono hidden text-[9px] uppercase tracking-[0.2em] text-ink-faint sm:inline">Sheet · CO-01</span>
        </div>

        <div className="space-y-2 px-4 pt-4">
          {OBLIGATIONS.map((o, i) => (
            <motion.div
              key={o.title}
              {...rise(0.2 + i * 0.08)}
              className={`flex items-center gap-3 rounded-[3px] border p-3 ${o.top ? 'border-accent-line bg-[color:var(--accent-soft)]' : 'border-line bg-bg-alt'}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] border ${o.top ? 'border-accent-line text-accent' : 'border-line text-ink-subtle'}`}>
                <CalIcon />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-semibold text-ink">{o.title}</div>
                <div className="mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">{o.due}</div>
              </div>
              <span className={`mono shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.1em] ${o.top ? 'bg-accent text-[color:var(--accent-ink)]' : 'text-ink-faint'}`}>
                {o.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <motion.div {...rise(0.44)} className="mx-4 mt-3 rounded-[3px] border border-line bg-bg-alt p-3">
          <div className="flex items-center justify-between">
            <span className="mono text-[9px] font-medium uppercase tracking-[0.18em] text-ink-subtle">Prepare — BAS Q4</span>
            <span className="mono text-[9px] font-semibold text-accent">3 / 5</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line">
            <div className="h-full bg-accent" style={{ width: '60%' }} />
          </div>
          <ul className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {CHECKLIST.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5 text-[10.5px] leading-tight">
                <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] border ${c.done ? 'border-accent-line bg-[color:var(--accent-soft)] text-accent' : 'border-line text-transparent'}`}>
                  <Check size={9} />
                </span>
                <span className={c.done ? 'text-ink-muted' : 'text-ink'}>{c.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...rise(0.56)} className="mt-4 grid grid-cols-3 border-t border-line">
          <Stat n="0" label="Missed" />
          <Stat n="4" label="Upcoming" divider />
          <Stat n="AU" label="Calendar" divider />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Stat({ n, label, divider }) {
  return (
    <div className={`px-4 py-4 ${divider ? 'border-l border-line' : ''}`}>
      <div className="text-[22px] font-semibold tabular-nums tracking-[-0.02em] text-ink">{n}</div>
      <div className="mono mt-1 text-[9px] uppercase tracking-[0.18em] text-ink-faint">{label}</div>
    </div>
  );
}

function CalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}
