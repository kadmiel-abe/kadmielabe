/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#050505',
          black: '#000000',
          elevated: '#0a0a0a',
          surface: '#111111',
        },
        ink: {
          primary: '#EDEDED',
          secondary: '#A1A1AA',
          muted: '#71717A',
          faint: '#3F3F46',
        },
        luxe: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.2)',
          'border-active': 'rgba(255, 255, 255, 0.35)',
          glow: 'rgba(255, 255, 255, 0.04)',
          emerald: '#3ECF80',
          'emerald-glow': 'rgba(62, 207, 128, 0.25)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      transitionTimingFunction: {
        'luxe': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
