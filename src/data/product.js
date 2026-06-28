/**
 * Complia — single source of truth for this site.
 *
 * ⚠️  PRICING & COPY MIRRORED VERBATIM FROM THE C4 MARKETING REPO:
 *     calebscott1892-bot/C4 → src/components/software/productData.js  (slug: 'complia')
 *     Never hardcode a price or link anywhere else — import from here.
 */

export const SUITE_APP_URL = 'https://c4-saas-suite.vercel.app';

// The standalone Complia product app (where signups + billing happen).
export const APP_URL = 'https://app.complia.c4studios.com.au';

export const SUITE_BUNDLE = {
  price: 149,
  href: `${SUITE_APP_URL}?ref=complia-suite`,
  blurb: 'Every C4 product — ReviewLoop, ReturnDesk, Complia, FirmFlow and more — in one subscription.',
};

export const product = {
  slug: 'complia',
  name: 'Complia',
  status: 'Live',
  logo: '/complia-logo.png',
  oneLiner: 'Australian compliance calendar and assistant.',
  summary:
    'Complia keeps small Australian businesses ahead of every lodgement and obligation — BAS, super, ASIC — with checklists and reminders built around the real ATO calendar.',
  features: [
    {
      icon: 'calendar',
      title: 'BAS, super, and ASIC tracking',
      body: 'Your obligations mapped to the real Australian calendar, so every lodgement date is accounted for.',
    },
    {
      icon: 'checklist',
      title: 'Preparation checklists per obligation',
      body: 'Each obligation comes with a step-by-step checklist, so you know exactly what to gather and lodge.',
    },
    {
      icon: 'clock',
      title: 'Email reminders before due dates',
      body: 'Reminders land with enough lead time to actually prepare — never the morning it’s due.',
    },
    {
      icon: 'flag',
      title: 'Built for the Australian calendar',
      body: 'Made around ATO and ASIC obligations and dates — not a generic to-do list bent to fit.',
    },
  ],
  highlights: [
    { stat: '0', label: 'missed lodgement deadlines' },
    { stat: 'AU', label: 'built for local obligations' },
    { stat: 'Checklist', label: 'for every obligation' },
  ],
  problem:
    'Compliance deadlines are non-negotiable and easy to miss. A late BAS or ASIC review means penalties that dwarf the cost of staying organised.',
  solution:
    'Complia maps your obligations to the Australian calendar, reminds you before each one, and walks you through exactly what to prepare.',
  howItWorks: [
    {
      step: '01',
      title: 'Tell us your obligations',
      body: 'Pick the lodgements that apply to you — BAS, super, ASIC review and more — mapped to the real Australian calendar.',
    },
    {
      step: '02',
      title: 'Get reminded in time',
      body: 'Complia emails you before each due date, with enough lead time to actually prepare.',
    },
    {
      step: '03',
      title: 'Work the checklist',
      body: 'Each obligation comes with a preparation checklist, so you know exactly what to gather and lodge.',
    },
  ],
  faqs: [
    {
      q: 'Is this tax or legal advice?',
      a: 'No. Complia is an organisational tool that tracks dates and preparation steps — it doesn’t replace your accountant.',
    },
    {
      q: 'Is it specific to Australia?',
      a: 'Yes. Complia is built around the Australian ATO and ASIC calendar and obligations.',
    },
    {
      q: 'Can I add my own deadlines?',
      a: 'Yes. Alongside the standard obligations you can add custom ones with their own checklist and reminders.',
    },
    {
      q: 'Who is it for?',
      a: 'Small Australian businesses and sole traders who want to stay ahead of BAS, super and ASIC without living in a spreadsheet.',
    },
  ],
  tiers: [
    {
      label: 'Starter',
      price: 29,
      tagline: 'Stay on top of your core lodgement dates and checklists.',
      includes: [
        'BAS, super and ASIC tracking',
        'Preparation checklist per obligation',
        'Email reminders before due dates',
        'Australian calendar built in',
      ],
    },
    {
      label: 'Pro',
      price: 59,
      featured: true,
      tagline: 'For businesses juggling more obligations and custom deadlines.',
      includes: [
        'Everything in Starter',
        'Custom obligations and checklists',
        'Earlier + repeated reminders',
        'Priority support',
      ],
    },
  ],
  // Routes to the standalone Complia app, which handles lifetime checkout
  // + grants access on payment.
  lifetime: { price: 690, href: `${APP_URL}/billing?ref=complia-lifetime` },
  pricing: 'Starter $29/mo · Pro $59/mo. Start free — paid plans unlock inside the app.',

  ctaHref: `${APP_URL}?ref=complia`,
  ctaLabel: 'Start free',

  c4Url: 'https://c4studios.com.au',
  siteUrl: 'https://complia.c4studios.com.au',

  // REQUIRED disclaimer — Complia is organisational, not advice.
  caveat:
    'Complia is an organisational tool that tracks dates and preparation steps. It is not tax, legal or financial advice and does not replace your accountant.',
};

export const content = {
  heroBadge: 'Never miss a lodgement again',
  heroLead: 'Stay ahead of every',
  heroAccent: 'compliance deadline',
  heroTrail: '.',
  heroNote: 'Start free · built for the Australian calendar · not tax advice',
  heroMetaTag: 'AU calendar',

  problemEyebrow: 'The reality',
  problemHeadline: 'A missed deadline costs far more than staying organised.',
  withoutTitle: 'Without Complia',
  without: [
    'Due dates live in your head and a messy calendar',
    'You find out a BAS is late after the fact',
    'ASIC reviews sneak up once a year',
    'Penalties cost more than the work itself',
  ],
  withTitle: 'With Complia',
  with: [
    'Obligations mapped to the real ATO calendar',
    'Reminders with time to actually prepare',
    'A checklist for exactly what to lodge',
    'Custom deadlines tracked alongside the rest',
  ],

  howHeadline: 'Three steps to never missing a deadline.',
  howSub: 'Tell Complia your obligations, get reminded in time, and work the checklist for each one.',

  featuresHeadline: 'Everything that keeps you compliant — nothing that pretends to be your accountant.',
  featuresSub: 'Built around the real Australian calendar, so the dates and steps are the ones that actually apply.',

  outcomesHeadline: 'Compliance shouldn’t depend on remembering.',
  outcomesSub:
    'Complia turns every obligation into a date, a reminder and a checklist — so staying compliant is a system, not a scramble.',

  socialHeadline: 'Built for Australian businesses that can’t afford to miss',
  // Flip to true + add a real `name` to each testimonial below to ship real social proof.
  testimonialsAreReal: false,
  testimonials: [
    { quote: 'BAS used to ambush me every quarter. Now I get a reminder with time to actually get the numbers together.', role: 'Sole trader' },
    { quote: 'The ASIC annual review is the one I always forgot. Complia put it on the calendar with a checklist.', role: 'Café owner' },
    { quote: 'It’s not pretending to be my accountant — it just makes sure I never miss a date. Exactly what I needed.', role: 'Trades business' },
  ],

  finalHeadline: 'Put every deadline on autopilot.',
  finalSub: 'Start free. Add your obligations and let Complia keep you ahead of every lodgement.',

  footerTagline: 'Organisational tool — not tax advice.',
};

export const seo = {
  title: 'Complia — Australian compliance calendar and assistant',
  description:
    'Complia keeps small Australian businesses ahead of BAS, super and ASIC obligations with checklists and reminders built around the real ATO calendar. An organisational tool — not tax advice. A C4 Studios product.',
  url: product.siteUrl,
  ogImage: `${product.siteUrl}/og.png`,
  themeColor: '#f7f5f2',
};
