/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'm-green': {
          100: "#dcf9f3",
          200: "#b9f4e7",
          300: "#96eeda",
          400: "#73e9ce",
          500: "#50e3c2",
          600: "#40b69b",
          700: "#308874",
          800: "#205b4e",
          900: "#102d27"
        },
        'm-red': '#E74C3C',
        'm-blue': {
          100: "#d5d8dc",
          200: "#abb2b9",
          300: "#808b96",
          400: "#566573",
          500: "#2c3e50",
          600: "#233240",
          700: "#1a2530",
          800: "#121920",
          900: "#090c10"
        },
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'], // Replace with 'Mulish' if desired
        handwritten: ['Pacifico', 'cursive'], // Replace with 'Pacifico' if desired
      },
      boxShadow: {
        'custom': '0px 15px 25px -4px rgba(9, 12, 16, 0.24)',
      }
    },
  },
  plugins: [],
}

