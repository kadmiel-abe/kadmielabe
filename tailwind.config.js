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
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb', // Bleu Électrique
          700: '#1d4ed8', // Hover
          800: '#1e40af',
          900: '#1e3a8a',
        },
        surface: {
          pure: '#ffffff',
          alt: '#f9fafb',
          muted: '#f3f4f6',
          border: '#e5e7eb',
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
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
