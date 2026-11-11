/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        alicia: {
          sage: {
            50: '#f3f7f4',
            100: '#e2ede6',
            200: '#c7ddd0',
            300: '#9fc4af',
            400: '#78a68c',
            500: '#678d75', // Color institucional exacto del logo ALI.C.I.A
            600: '#4e715b',
            700: '#3f5b4a',
            800: '#34493d',
            900: '#2b3d33',
            950: '#16211b',
          },
          forest: {
            950: '#07120c',
            900: '#0c1d14',
            850: '#11271b',
            800: '#163223',
            750: '#1c3e2c',
            700: '#234d37',
          },
          ochre: {
            50: '#fdf9ed',
            100: '#f9f0d1',
            200: '#f2dea2',
            300: '#e9c66b',
            400: '#e0ad42',
            500: '#d19228',
            600: '#b5731e',
            700: '#91561b',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
