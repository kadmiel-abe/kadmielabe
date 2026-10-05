/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669', // Vert Émeraude principal
          700: '#047857', // Hover
          800: '#065f46',
          900: '#064e3b',
        },
        surface: {
          pure: '#ffffff',
          alt: '#f8fafc',
          muted: '#f1f5f9',
          border: '#e2e8f0',
        },
        content: {
          primary: '#111827',
          secondary: '#4b5563',
          tertiary: '#9ca3af',
        }
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 25px -5px rgba(5, 150, 105, 0.25)',
      },
    },
  },
  plugins: [],
};
