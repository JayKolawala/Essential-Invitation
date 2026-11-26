/** @type {import('tailwindcss').Config} */
function withOpacity(varName) {
  return `rgb(var(${varName}) / <alpha-value>)`;
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        heritageDisplay: ['var(--ih-font-heading)', 'Georgia', 'serif'],
        heritageScript: ['var(--ih-font-script)', 'cursive'],
        heritageBody: ['var(--ih-font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        essential: {
          primary: withOpacity('--essential-primary-rgb'),
          secondary: withOpacity('--essential-secondary-rgb'),
          bg: withOpacity('--essential-bg-rgb'),
          surface: withOpacity('--essential-surface-rgb'),
          surfaceAlt: withOpacity('--essential-surface-alt-rgb'),
          text: withOpacity('--essential-text-rgb'),
          muted: withOpacity('--essential-text-muted-rgb'),
          accent: withOpacity('--essential-accent-rgb'),
          onPrimary: withOpacity('--essential-on-primary-rgb'),
          onSecondary: withOpacity('--essential-on-secondary-rgb'),
          onAccent: withOpacity('--essential-on-accent-rgb'),
          border: 'var(--essential-border)',
          borderStrong: 'var(--essential-border-strong)',
          tintPrimary: 'var(--essential-tint-primary)',
          tintSecondary: 'var(--essential-tint-secondary)',
          tintAccent: 'var(--essential-tint-accent)',
        },
        ih: {
          maroon: withOpacity('--ih-maroon-rgb'),
          red: withOpacity('--ih-red-rgb'),
          gold: withOpacity('--ih-gold-rgb'),
          ivory: withOpacity('--ih-ivory-rgb'),
          ivoryCard: withOpacity('--ih-ivory-card-rgb'),
          ivoryAlt: withOpacity('--ih-ivory-alt-rgb'),
          green: withOpacity('--ih-green-rgb'),
          terracotta: withOpacity('--ih-terracotta-rgb'),
          ink: withOpacity('--ih-ink-rgb'),
          inkMuted: withOpacity('--ih-ink-muted-rgb'),
          onMaroon: withOpacity('--ih-on-maroon-rgb'),
          onGold: withOpacity('--ih-on-gold-rgb'),
          border: 'var(--ih-border)',
          borderGold: 'var(--ih-border-gold)',
        },
      },
      boxShadow: {
        soft: '0 10px 32px -14px var(--essential-shadow)',
        card: '0 6px 20px -10px var(--essential-shadow)',
        storybook: '0 22px 54px -18px rgba(112, 38, 50, 0.22)',
        parchment: '0 12px 30px -12px rgba(112, 38, 50, 0.14)',
      },
    },
  },
  plugins: [],
};
