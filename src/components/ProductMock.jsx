import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, EASE } from './primitives.jsx';

/**
 * Crafted in-product mockup of Complia — an Australian compliance calendar that
 * tracks BAS / super / ASIC obligations with checklists and reminders. C4 dark
 * language with Complia's green accent. (Swap for a real suite-app screenshot later.)
 */
const OBLIGATIONS = [
  { title: 'BAS — Quarter 4', due: 'Due 28 Feb', days: '9 days', progress: 3, total: 5, top: true },
  { title: 'Super guarantee', due: 'Due 28 Apr', status: 'Not started' },
  { title: 'ASIC annual review', due: 'Due 14 May', status: 'Reminder set' },
];

const CHECKLIST = [
  { label: 'Reconcile Q4 transactions', done: true },
  { label: 'Confirm GST on sales & purchases', done: true },
  { label: 'Review payroll & PAYG', done: true },
  { label: 'Check fuel tax credits', done: false },
];

export default function ProductMock() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(60% 60% at 70% 20%, var(--accent-glow), transparent 70%)' }}
      />

      <motion.div
        {...rise(0.05)}
        className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-medium text-ink-subtle">Complia · Compliance calendar</span>
          <span className="ml-auto rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            AU
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-5">
          {/* Obligations list */}
          <div className="sm:col-span-3 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">Upcoming obligations</p>
            {OBLIGATIONS.map((o, i) => (
              <motion.div
                key={o.title}
                {...rise(0.18 + i * 0.1)}
                className={`flex items-center gap-3 rounded-xl border p-3 ${
                  o.top ? 'border-accent-line bg-accent-soft' : 'border-line bg-bg-alt'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                    o.top ? 'border-accent-line text-accent' : 'border-line text-ink-subtle'
                  }`}
                >
                  <CalIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-semibold text-ink">{o.title}</div>
                  <div className="text-[11px] text-ink-subtle">{o.due}</div>
                </div>
                {o.top ? (
                  <span className="shrink-0 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">{o.days}</span>
                ) : (
                  <span className="shrink-0 text-[10px] text-ink-faint">{o.status}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Checklist for the top obligation */}
          <motion.div {...rise(0.42)} className="sm:col-span-2 rounded-xl border border-line bg-bg-alt p-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">Prepare</p>
              <span className="text-[10px] font-semibold text-accent">3 / 5</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg">
              <div className="h-full rounded-full bg-accent" style={{ width: '60%' }} />
            </div>
            <ul className="mt-3 space-y-2">
              {CHECKLIST.map((c) => (
                <li key={c.label} className="flex items-start gap-2 text-[11.5px] leading-snug">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      c.done ? 'border-accent-line bg-accent-soft text-accent' : 'border-line text-transparent'
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span className={c.done ? 'text-ink-muted line-through decoration-ink-faint' : 'text-ink'}>{c.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          {...rise(0.6)}
          className="grid grid-cols-3 divide-x divide-line border-t border-line bg-white/[0.015] text-center"
        >
          <Stat value="0" label="missed" />
          <Stat value="4" label="upcoming" />
          <Stat value="AU" label="calendar" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="px-2 py-3">
      <div className="text-base font-bold text-ink">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-ink-faint">{label}</div>
    </div>
  );
}

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}
