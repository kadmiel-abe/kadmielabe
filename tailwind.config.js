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
        dark: {
          bg: '#0B0B0C',
          card: '#121214',
          'card-hover': '#17171A',
          border: '#1E1E22',
          'border-hover': '#2A2A30',
        },
        // Vert exact extrait du logo (#119134) et ses déclinaisons
        primary: {
          DEFAULT: '#119134',
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce99b',
          400: '#34d368', // Variante claire (accents de texte, lueurs)
          500: '#119134', // Vert exact du logo
          600: '#0d7a2b', // Variante plus foncée (survol boutons)
          700: '#085d20',
          800: '#054417',
          900: '#033010',
        },
        emerald: {
          DEFAULT: '#119134',
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce99b',
          400: '#34d368',
          500: '#119134',
          600: '#0d7a2b',
          700: '#085d20',
          800: '#054417',
          900: '#033010',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 40px -10px rgba(17, 145, 52, 0.3)',
        'glow-emerald-lg': '0 0 60px -15px rgba(17, 145, 52, 0.45)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
