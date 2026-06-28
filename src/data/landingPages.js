/**
 * Programmatic SEO landing pages for Complia.
 *
 * Each entry prerenders to its own static file at dist/<slug>/index.html via
 * scripts/prerender.mjs (rendering <LandingPage page={...} />). High-intent,
 * genuinely-useful compliance-calendar guides — NOT advice. The not-advice
 * caveat from product.caveat is rendered on every page.
 *
 * Keep copy specific and real. Never hardcode prices/links — those come from
 * product.js (ctaHref / ctaLabel) at render time.
 */

export const landingPages = [
  {
    slug: 'guides/bas-due-dates-2026',
    eyebrow: 'Compliance calendar · BAS',
    breadcrumb: 'BAS due dates 2026',
    h1: 'BAS due dates 2026: the quarterly and monthly lodgement calendar',
    title: 'BAS Due Dates 2026 — Quarterly & Monthly Lodgement Calendar | Complia',
    description:
      'Every 2026 BAS lodgement date for Australian businesses — quarterly and monthly cycles, the standard concession dates, and how to never miss one. An organisational guide, not tax advice.',
    intro:
      'Your Business Activity Statement (BAS) is how you report GST, PAYG withholding and PAYG instalments to the ATO. The lodgement date depends on whether you report quarterly or monthly — and on whether you lodge yourself or through a registered agent. Here is the 2026 picture, laid out so you can plan the year ahead instead of reacting the morning a statement is due.',
    sections: [
      {
        h2: 'Quarterly BAS due dates for 2026',
        body: 'Most small businesses lodge BAS quarterly. The standard ATO due date is the 28th of the month following the end of each quarter, with an extra month for the December quarter to cover the holiday period.',
        list: [
          'Quarter 2 (Oct–Dec 2025): due 28 February 2026',
          'Quarter 3 (Jan–Mar 2026): due 28 April 2026',
          'Quarter 4 (Apr–Jun 2026): due 28 July 2026',
          'Quarter 1 (Jul–Sep 2026): due 28 October 2026',
        ],
      },
      {
        h2: 'Monthly BAS due dates',
        body: 'If you report monthly — common once your GST turnover passes the threshold or if you elect to — each monthly BAS is generally due on the 21st of the following month. There is no quarterly concession on the monthly cycle, so the cadence is relentless and worth automating reminders for.',
      },
      {
        h2: 'The registered agent concession',
        body: 'Lodging through a registered BAS or tax agent usually buys you additional time beyond the standard dates above, often around four extra weeks for quarterly lodgers. The exact concession depends on your lodgement program, so confirm the dates that apply to your business with your agent — then put those dates, not the standard ones, on your calendar.',
      },
      {
        h2: 'How to stop a BAS deadline sneaking up',
        body: 'The penalty for a late BAS — failure-to-lodge penalties plus general interest charge on unpaid amounts — almost always dwarfs the cost of staying organised. The fix is boring but effective: map each quarter to a date, set a reminder with enough lead time to gather your figures, and work a short preparation checklist before each lodgement. That is exactly what Complia does, built around the real Australian calendar rather than a generic to-do list.',
      },
    ],
    faqs: [
      {
        q: 'When is the December quarter BAS due in 2026?',
        a: 'The October–December 2025 quarter BAS is generally due 28 February 2026 under the standard ATO concession that adds an extra month over the holiday period.',
      },
      {
        q: 'Do I get more time if I use a BAS or tax agent?',
        a: 'Usually yes. Registered agents typically receive lodgement concessions beyond the standard dates. Confirm the exact dates for your business with your agent and track those.',
      },
      {
        q: 'What happens if I lodge my BAS late?',
        a: 'The ATO can apply failure-to-lodge penalties and a general interest charge on amounts owing. Staying ahead of the date is far cheaper than catching up after one is missed.',
      },
      {
        q: 'Is this page tax advice?',
        a: 'No. This is an organisational guide to help you plan around lodgement dates. It does not replace your accountant or registered agent.',
      },
    ],
  },
  {
    slug: 'guides/asic-annual-review-explained',
    eyebrow: 'Compliance calendar · ASIC',
    breadcrumb: 'ASIC annual review explained',
    h1: 'The ASIC annual review explained: what it is and when it is due',
    title: 'ASIC Annual Review Explained — Dates, Fees & Checklist | Complia',
    description:
      'A plain-English guide to the ASIC annual review for Australian companies: what it is, when it is due, the late fees, and the checklist to stay on top of it. An organisational guide, not legal advice.',
    intro:
      'Every company registered with ASIC gets an annual review on the anniversary of its registration. It is one of the easiest obligations to forget because it only happens once a year — and one of the more expensive to miss, because the late fees escalate quickly. Here is what the annual review involves and how to make sure it never catches you off guard.',
    sections: [
      {
        h2: 'What the ASIC annual review actually is',
        body: 'Shortly before each anniversary of your company registration, ASIC issues an annual statement listing the company details on the register — address, officeholders, share structure and members. Your job is to check those details are correct, pay the annual review fee, and confirm the company can pay its debts via a solvency resolution. It is a confirmation exercise, not a tax return.',
      },
      {
        h2: 'When it is due',
        body: 'The annual statement is issued on your review date — the anniversary of registration. The annual review fee is then due within two months of that date. Because the date is tied to registration rather than the financial year, it rarely lines up with your BAS or income tax dates, which is exactly why it is so easy to lose track of.',
      },
      {
        h2: 'The fees and what late costs',
        body: 'ASIC charges an annual review fee that differs for proprietary companies and special-purpose companies. Pay late and ASIC adds late-payment penalties that increase the longer the fee is outstanding — a small amount for a short delay, more for a longer one. Keeping the company in good standing is simply a matter of paying on time.',
      },
      {
        h2: 'A simple annual review checklist',
        body: 'When your statement arrives: review every detail on the register and lodge any changes within 28 days, pass and minute a solvency resolution, pay the annual review fee before the due date, and file the statement with your records. Complia puts the review date on your calendar with this checklist attached, so the once-a-year obligation becomes a scheduled task instead of a surprise.',
        list: [
          'Check company address, officeholders, shares and members',
          'Lodge any changes to ASIC within 28 days',
          'Pass and minute a solvency resolution',
          'Pay the annual review fee before the due date',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is the ASIC annual review due?',
        a: 'The annual statement is issued on the anniversary of your company registration, and the annual review fee is generally due within two months of that review date.',
      },
      {
        q: 'What happens if I pay the ASIC fee late?',
        a: 'ASIC applies late-payment penalties that increase the longer the fee remains unpaid, and persistent non-payment can put the company at risk of deregistration.',
      },
      {
        q: 'Do I have to lodge anything every year?',
        a: 'You must review the details on the annual statement, update anything that has changed, pass a solvency resolution and pay the fee. You only lodge changes if the register details are no longer correct.',
      },
      {
        q: 'Is this page legal advice?',
        a: 'No. This is an organisational guide to help you track and prepare for the annual review. It does not replace your accountant, lawyer or registered agent.',
      },
    ],
  },
  {
    slug: 'guides/super-guarantee-due-dates',
    eyebrow: 'Compliance calendar · Super',
    breadcrumb: 'Super guarantee due dates',
    h1: 'Super guarantee due dates: the quarterly payment calendar for employers',
    title: 'Super Guarantee Due Dates — Quarterly Payment Calendar | Complia',
    description:
      'The quarterly super guarantee (SG) payment dates every Australian employer needs, plus how the contribution must actually be received by the fund — not just sent. An organisational guide, not financial advice.',
    intro:
      'If you employ staff, you must pay the super guarantee (SG) into each eligible employee’s fund at least quarterly. The catch that trips up many employers: the contribution has to be received by the fund by the due date, not merely paid by you. Clearing houses and processing times mean you need to act well before the date itself. Here is the calendar and how to stay ahead of it.',
    sections: [
      {
        h2: 'Quarterly super guarantee due dates',
        body: 'Super guarantee is paid on a quarterly cycle, with each payment due 28 days after the end of the quarter.',
        list: [
          'Quarter 1 (Jul–Sep): due 28 October',
          'Quarter 2 (Oct–Dec): due 28 January',
          'Quarter 3 (Jan–Mar): due 28 April',
          'Quarter 4 (Apr–Jun): due 28 July',
        ],
      },
      {
        h2: '"Paid" means received by the fund',
        body: 'SG is only counted as paid once the money is received by the employee’s super fund — not when it leaves your account. If you use a clearing house, allow for its processing time, which can be several business days. The practical rule is to initiate payment a week or more before the due date so it clears in time.',
      },
      {
        h2: 'What happens if you pay super late',
        body: 'Miss the date, even by a day, and the contribution is no longer deductible. You then have to lodge a Super Guarantee Charge (SGC) statement and pay the SGC, which includes the shortfall, interest and an administration component, none of which is tax-deductible. Paying on time keeps the contribution deductible and avoids the SGC entirely.',
      },
      {
        h2: 'Building super into your compliance rhythm',
        body: 'Because the SG dates sit close to BAS dates but are not the same, it pays to track them together in one place. Set a reminder a week before each quarterly due date, confirm the funds will clear in time, and tick off each employee. Complia maps the SG cycle to the Australian calendar alongside your BAS and ASIC obligations, so every payment date is accounted for in one view.',
      },
    ],
    faqs: [
      {
        q: 'When is super guarantee due each quarter?',
        a: 'SG is due 28 days after the end of each quarter: 28 October, 28 January, 28 April and 28 July.',
      },
      {
        q: 'Does super count as paid when I send it or when the fund receives it?',
        a: 'When the fund receives it. If you use a clearing house, allow for its processing time and pay early so the contribution is received by the due date.',
      },
      {
        q: 'What is the Super Guarantee Charge?',
        a: 'If you pay SG late you must lodge an SGC statement and pay the charge, which includes the shortfall, interest and an administration fee, and is not tax-deductible.',
      },
      {
        q: 'Is this page financial advice?',
        a: 'No. This is an organisational guide to help you plan around super payment dates. It does not replace your accountant or registered agent.',
      },
    ],
  },
];
