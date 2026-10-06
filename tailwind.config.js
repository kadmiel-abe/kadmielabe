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
        // Dark mode design tokens
        canvas: {
          DEFAULT: '#0a0a0a',
          secondary: '#111111',
          card: '#161616',
        },
        accent: {
          DEFAULT: '#6ee7b7',
          dim: 'rgba(110,231,183,0.12)',
          glow: 'rgba(110,231,183,0.25)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.16)',
        },
        ink: {
          primary: '#f5f5f5',
          secondary: '#a1a1aa',
          muted: '#52525b',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-lines': `
          linear-gradient(to right, #80808012 1px, transparent 1px),
          linear-gradient(to bottom, #80808012 1px, transparent 1px)
        `,
        'accent-gradient': 'linear-gradient(135deg, #6ee7b7 0%, #3b82f6 50%, #8b5cf6 100%)',
        'glow-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(110,231,183,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(110,231,183,0.3)',
        'glow-md': '0 0 40px -10px rgba(110,231,183,0.4)',
        'card': '0 1px 0 rgba(255,255,255,0.05), 0 20px 50px -20px rgba(0,0,0,0.8)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
