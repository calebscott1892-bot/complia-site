/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // C4 family tokens surfaced as utilities (values from CSS vars).
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        card: 'var(--card)',
        tag: 'var(--tag)',
        ink: 'var(--text)',
        'ink-muted': 'var(--text-muted)',
        'ink-subtle': 'var(--text-subtle)',
        'ink-faint': 'var(--text-faint)',
        line: 'var(--border)',
        'line-light': 'var(--border-light)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        'accent-soft': 'var(--accent-soft)',
        'accent-line': 'var(--accent-line)',
        // Inverted (dark) band
        'band': 'var(--ink-bg)',
        'band-text': 'var(--ink-text)',
        'band-muted': 'var(--ink-muted)',
        'band-faint': 'var(--ink-faint)',
        'band-line': 'var(--ink-border)',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
};
