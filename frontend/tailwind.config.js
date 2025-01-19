/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'm-green': '#50E3C2', // Mint Green
        'm-red': '#E74C3C',   // Muted Red
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

