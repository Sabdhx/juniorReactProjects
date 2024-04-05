
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'merriweather': ['Merriweather', 'serif'],
        'tacone': ['Tac One', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'], 
        'Roboto': ["Roboto", 'sans-serif'],
        'oxygen': ["Oxygen", 'sans-serif']
      }
    },
  },
  plugins: [],
}