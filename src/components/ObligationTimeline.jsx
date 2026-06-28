import React from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { CornerBrackets, Check, EASE } from './primitives.jsx';

/**
 * Complia hero demo — a self-running obligation calendar.
 *
 * Upcoming Australian obligations sit on a month timeline, each source-labelled
 * (ATO / ASIC) with a due date. A "next due" countdown sits at the top. As the
 * demo's clock advances, the nearest item flips from "Reminder set" to a green
 * "Prepared ✓" — the product's promise (prepared in advance, never late) made
 * visible. After all four are prepared it parks briefly, then resets and loops.
 *
 * SSR/prerender-safe: renders a meaningful static first frame on the server
 * (step 0 — nothing yet prepared, full countdown). The self-running clock only
 * starts after mount via useEffect, and the whole motion layer is gated behind
 * useReducedMotion (reduced-motion users see the calm static frame, which is
 * also exactly what the prerendered HTML ships).
 *
 * Accent: the site's deep-green --accent is the single success/confirmation hue.
 */

// One success-green, drawn from the site accent system.
const GREEN = 'var(--accent)';

const OBLIGATIONS = [
  { id: 'bas', title: 'BAS — Quarter 4', source: 'ATO', month: 'FEB', day: 28, due: 'Due 28 Feb', lead: '14-day reminder' },
  { id: 'super', title: 'Super guarantee', source: 'ATO', month: 'APR', day: 28, due: 'Due 28 Apr', lead: '14-day reminder' },
  { id: 'asic', title: 'ASIC annual review', source: 'ASIC', month: 'MAY', day: 14, due: 'Due 14 May', lead: '21-day reminder' },
  { id: 'paygi', title: 'PAYG instalment', source: 'ATO', month: 'JUL', day: 28, due: 'Due 28 Jul', lead: '14-day reminder' },
];

// Countdown shown for the *next* not-yet-prepared item, by step index.
const COUNTDOWNS = ['09 days', '06 days', '12 days', '04 days', 'All clear'];

export default function ObligationTimeline() {
  const reduce = useReducedMotion();
  // step = how many obligations are prepared (0..4). Server renders step 0.
  const [step, setStep] = React.useState(0);
  const total = OBLIGATIONS.length;

  React.useEffect(() => {
    if (reduce) return;
    let timer;
    const tick = () => {
      setStep((s) => {
        // After all prepared, hold longer, then reset to loop calmly.
        if (s >= total) return 0;
        return s + 1;
      });
    };
    const schedule = () => {
      timer = setTimeout(() => {
        tick();
        schedule();
      }, step >= total ? 2600 : 2000);
    };
    schedule();
    return () => clearTimeout(timer);
  }, [step, reduce, total]);

  const nextIndex = Math.min(step, total - 1);
  const allClear = step >= total;
  const preparedCount = Math.min(step, total);

  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: EASE } };

  return (
    <div className="relative">
      {/* soft green halo behind the panel — single subtle wash, no drift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-70"
        style={{ background: 'radial-gradient(58% 52% at 72% 26%, var(--accent-soft), transparent 72%)' }}
      />

      <motion.div
        {...rise(0.1)}
        className="relative overflow-hidden rounded-[10px] border border-line bg-card"
        style={{ boxShadow: 'var(--shadow-panel)' }}
      >
        <CornerBrackets inset={10} size={16} />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="mono inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              {!reduce && (
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: GREEN }}
                  animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: GREEN }} />
            </span>
            Complia · Obligation calendar
          </span>
          <span className="mono hidden text-[9px] uppercase tracking-[0.2em] text-ink-faint sm:inline">FY 2025–26</span>
        </div>

        {/* Next-due countdown banner */}
        <div className="flex items-center justify-between border-b border-line bg-bg-alt px-5 py-3">
          <div className="min-w-0">
            <div className="mono text-[8.5px] uppercase tracking-[0.2em] text-ink-faint">
              {allClear ? 'Status' : 'Next due'}
            </div>
            <div className="mt-0.5 truncate text-[13px] font-semibold text-ink">
              {allClear ? 'Everything prepared in advance' : OBLIGATIONS[nextIndex].title}
            </div>
          </div>
          <div className="shrink-0 pl-3 text-right">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={allClear ? 'clear' : `cd-${step}`}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="text-[20px] font-semibold tabular-nums tracking-[-0.02em]"
                style={{ color: allClear ? GREEN : 'var(--text)' }}
              >
                {COUNTDOWNS[step] || COUNTDOWNS[COUNTDOWNS.length - 1]}
              </motion.div>
            </AnimatePresence>
            <div className="mono mt-0.5 text-[8.5px] uppercase tracking-[0.16em] text-ink-faint">
              {allClear ? 'No deadlines at risk' : 'until lodgement'}
            </div>
          </div>
        </div>

        {/* The month timeline */}
        <div className="space-y-2 px-4 pt-4">
          {OBLIGATIONS.map((o, i) => {
            const prepared = i < step;
            const isNext = !prepared && i === nextIndex && !allClear;
            return (
              <motion.div
                key={o.id}
                {...rise(0.22 + i * 0.08)}
                className="flex items-center gap-3 rounded-[4px] border p-3 transition-colors duration-500"
                style={{
                  borderColor: prepared
                    ? 'var(--accent-line)'
                    : isNext
                    ? 'var(--accent-line)'
                    : 'var(--border)',
                  background: prepared
                    ? 'var(--accent-soft)'
                    : isNext
                    ? 'var(--accent-soft)'
                    : 'var(--bg-alt)',
                }}
              >
                {/* Date chip */}
                <div
                  className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-[4px] border text-center leading-none transition-colors duration-500"
                  style={{
                    borderColor: prepared || isNext ? 'var(--accent-line)' : 'var(--border)',
                    color: prepared || isNext ? GREEN : 'var(--text-subtle)',
                  }}
                >
                  <span className="mono text-[7.5px] font-semibold uppercase tracking-[0.1em]">{o.month}</span>
                  <span className="text-[15px] font-semibold tabular-nums">{o.day}</span>
                </div>

                {/* Title + source label */}
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-semibold text-ink">{o.title}</div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span
                      className="mono inline-flex items-center rounded-[2px] border px-1 py-px text-[7.5px] font-semibold uppercase tracking-[0.1em]"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
                    >
                      Source · {o.source}
                    </span>
                    <span className="mono text-[8.5px] uppercase tracking-[0.12em] text-ink-faint">{o.due}</span>
                  </div>
                </div>

                {/* Status pill — flips to a green "Prepared ✓" */}
                <div className="shrink-0">
                  <AnimatePresence mode="wait" initial={false}>
                    {prepared ? (
                      <motion.span
                        key="done"
                        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.42, ease: EASE }}
                        className="mono inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[color:var(--accent-ink)]"
                        style={{ background: GREEN }}
                      >
                        <Check size={9} />
                        Prepared
                      </motion.span>
                    ) : (
                      <motion.span
                        key="pending"
                        initial={false}
                        exit={reduce ? undefined : { opacity: 0, scale: 0.85 }}
                        className="mono inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.1em]"
                        style={{
                          color: isNext ? GREEN : 'var(--text-faint)',
                          border: isNext ? '1px solid var(--accent-line)' : '1px solid var(--border)',
                        }}
                      >
                        {isNext && (
                          <span className="h-1 w-1 rounded-full" style={{ background: GREEN }} aria-hidden="true" />
                        )}
                        {isNext ? o.lead : 'Scheduled'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer — running tally of what's prepared */}
        <motion.div {...rise(0.5)} className="mt-4 flex items-center justify-between gap-3 border-t border-line px-5 py-3.5">
          <span className="mono text-[9px] uppercase tracking-[0.16em] text-ink-faint">Prepared in advance</span>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-24 overflow-hidden rounded-full" style={{ background: 'var(--bg-alt)' }}>
              <motion.span
                className="block h-full rounded-full"
                style={{ background: GREEN }}
                animate={{ width: `${(preparedCount / total) * 100}%` }}
                transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
              />
            </div>
            <span className="text-[12px] font-semibold tabular-nums text-ink">
              {preparedCount}<span className="text-ink-faint">/{total}</span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
