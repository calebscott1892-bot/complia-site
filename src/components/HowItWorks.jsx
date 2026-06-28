import React from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { product, content } from '../data/product.js';
import { Container, Section, Eyebrow, Reveal, Check, EASE } from './primitives.jsx';

/**
 * Animated "How it works" — an auto-advancing stepper.
 *
 * Three steps walk through Complia's flow. The active step auto-advances once
 * the section scrolls into view (paced, calm); a vertical progress rail tracks
 * position and each step is clickable to jump. Each step pairs the copy from
 * product.js with a small animated panel that *shows* that step happening:
 *   1) a short business profile filling in,
 *   2) an obligation calendar mapping out, source-labelled,
 *   3) a reminder landing ahead of the deadline.
 *
 * SSR/prerender-safe: renders all three steps' copy server-side (the static
 * frame shows step 1 active + every step's title/body present, so there is no
 * blank content before hydration). Auto-advance only runs after mount and is
 * fully disabled under prefers-reduced-motion.
 */

const STEPS = [
  {
    step: '01',
    title: 'Tell us about your business',
    body: 'A short profile — company structure, GST registration, employees. Complia uses it to work out exactly which obligations apply to you.',
    panel: ProfilePanel,
  },
  {
    step: '02',
    title: 'Get your obligation calendar',
    body: 'Every deadline that applies to you — source-labelled ATO or ASIC — mapped across the year on the real Australian calendar.',
    panel: CalendarPanel,
  },
  {
    step: '03',
    title: 'Reminders before every deadline',
    body: 'A reminder lands with enough lead time to actually prepare — so each obligation is prepared in advance and never lodged late.',
    panel: ReminderPanel,
  },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  const total = STEPS.length;

  // Auto-advance only while the section is in view (and motion is allowed).
  React.useEffect(() => {
    if (reduce || !inView) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % total), 3400);
    return () => clearTimeout(t);
  }, [active, inView, reduce, total]);

  const ActivePanel = STEPS[active].panel;

  return (
    <Section id="how" className="border-b border-line">
      <Container>
        <Reveal
          className="max-w-2xl"
          onViewportEnter={() => setInView(true)}
        >
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink">
            {content.howHeadline}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.75] text-ink-muted">{content.howSub}</p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:gap-16">
          {/* Left — the stepper */}
          <div className="relative">
            {/* progress rail */}
            <div
              aria-hidden="true"
              className="absolute left-[15px] top-2 bottom-2 w-px"
              style={{ background: 'var(--border)' }}
            >
              <motion.span
                className="absolute left-0 top-0 w-px"
                style={{ background: 'var(--accent)' }}
                animate={{ height: `${(active / (total - 1)) * 100}%` }}
                transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
              />
            </div>

            <ol className="space-y-2">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={s.step}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? 'step' : undefined}
                      className="group relative flex w-full items-start gap-5 rounded-[8px] py-3 pl-0 pr-3 text-left transition-colors duration-300"
                    >
                      {/* node */}
                      <span
                        className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-card transition-all duration-400"
                        style={{
                          borderColor: isActive || isDone ? 'var(--accent)' : 'var(--border)',
                          background: isActive || isDone ? 'var(--accent)' : 'var(--card)',
                          color: isActive || isDone ? 'var(--accent-ink)' : 'var(--text-subtle)',
                        }}
                      >
                        {isDone ? (
                          <Check size={13} />
                        ) : (
                          <span className="mono text-[11px] font-semibold tabular-nums">{i + 1}</span>
                        )}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[17px] font-semibold tracking-[-0.015em] transition-colors duration-300"
                          style={{ color: isActive ? 'var(--text)' : 'var(--text-subtle)' }}
                        >
                          {s.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.span
                              key="body"
                              initial={reduce ? false : { opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={reduce ? undefined : { opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: EASE }}
                              className="block overflow-hidden"
                            >
                              <span className="mt-2 block max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-muted">
                                {s.body}
                              </span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right — the animated panel that demonstrates the active step */}
          <div className="lg:sticky lg:top-28">
            <Reveal
              className="relative overflow-hidden rounded-[10px] border border-line bg-card"
              y={16}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-70"
                style={{ background: 'radial-gradient(58% 52% at 70% 24%, var(--accent-soft), transparent 72%)' }}
              />
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="mono inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Step {STEPS[active].step}
                </span>
                <span className="mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">Complia</span>
              </div>

              <div className="relative min-h-[268px] p-5">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <ActivePanel reduce={reduce} active={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────── panels ───────────────────────── */

function fieldRise(reduce, i) {
  return reduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, delay: 0.1 + i * 0.12, ease: EASE } };
}

function ProfilePanel({ reduce }) {
  const fields = [
    { label: 'Business structure', value: 'Pty Ltd company' },
    { label: 'GST registered', value: 'Yes — quarterly BAS' },
    { label: 'Employees', value: '3 (super applies)' },
  ];
  return (
    <div>
      <div className="mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">Your business profile</div>
      <div className="mt-3 space-y-2.5">
        {fields.map((f, i) => (
          <motion.div
            key={f.label}
            {...fieldRise(reduce, i)}
            className="flex items-center justify-between rounded-[5px] border border-line bg-bg-alt px-3.5 py-3"
          >
            <span className="text-[12.5px] text-ink-muted">{f.label}</span>
            <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-ink">
              {f.value}
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full text-[color:var(--accent-ink)]"
                style={{ background: 'var(--accent)' }}
              >
                <Check size={10} />
              </span>
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        {...fieldRise(reduce, 3)}
        className="mono mt-3.5 text-[9px] uppercase tracking-[0.14em] text-accent"
      >
        Profile complete — matching your obligations
      </motion.div>
    </div>
  );
}

function CalendarPanel({ reduce }) {
  const rows = [
    { m: 'FEB', d: 28, t: 'BAS — Quarter 4', s: 'ATO' },
    { m: 'APR', d: 28, t: 'Super guarantee', s: 'ATO' },
    { m: 'MAY', d: 14, t: 'ASIC annual review', s: 'ASIC' },
    { m: 'JUL', d: 28, t: 'PAYG instalment', s: 'ATO' },
  ];
  return (
    <div>
      <div className="mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">Mapped to your year</div>
      <div className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <motion.div
            key={r.t}
            {...fieldRise(reduce, i)}
            className="flex items-center gap-3 rounded-[5px] border border-line bg-bg-alt px-3 py-2.5"
          >
            <div
              className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-[4px] border text-center leading-none"
              style={{ borderColor: 'var(--accent-line)', color: 'var(--accent)' }}
            >
              <span className="mono text-[7px] font-semibold uppercase tracking-[0.1em]">{r.m}</span>
              <span className="text-[14px] font-semibold tabular-nums">{r.d}</span>
            </div>
            <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-ink">{r.t}</span>
            <span
              className="mono shrink-0 rounded-[2px] border px-1.5 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.1em]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
            >
              {r.s}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReminderPanel({ reduce }) {
  const checklist = [
    'Reconcile Q4 transactions',
    'Confirm GST on sales',
    'Review payroll & PAYG',
  ];
  return (
    <div>
      <div className="mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">Inbox · 14 days before due</div>

      <motion.div
        {...fieldRise(reduce, 0)}
        className="mt-3 rounded-[6px] border p-3.5"
        style={{ borderColor: 'var(--accent-line)', background: 'var(--accent-soft)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-[color:var(--accent-ink)]"
            style={{ background: 'var(--accent)' }}
          >
            <BellIcon />
          </span>
          <div className="min-w-0">
            <div className="text-[12.5px] font-semibold text-ink">BAS Q4 is due in 14 days</div>
            <div className="mono text-[8.5px] uppercase tracking-[0.12em] text-ink-faint">From Complia · Source ATO</div>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 border-t border-accent-line pt-3">
          {checklist.map((c, i) => (
            <motion.div key={c} {...fieldRise(reduce, i + 1)} className="flex items-center gap-2 text-[12px] text-ink-muted">
              <span
                className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[2px] text-[color:var(--accent-ink)]"
                style={{ background: 'var(--accent)' }}
              >
                <Check size={9} />
              </span>
              {c}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fieldRise(reduce, 4)}
        className="mono mt-3.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-accent"
      >
        <Check size={11} />
        Prepared in advance — never lodged late
      </motion.div>
    </div>
  );
}

function BellIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
