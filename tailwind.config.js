/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        // C4 family tokens, surfaced as Tailwind utilities (values come from CSS vars).
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        card: 'var(--card)',
        ink: 'var(--text)',
        'ink-muted': 'var(--text-muted)',
        'ink-subtle': 'var(--text-subtle)',
        'ink-faint': 'var(--text-faint)',
        line: 'var(--border)',
        'line-light': 'var(--border-light)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
      },
      maxWidth: {
        container: '76rem',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
