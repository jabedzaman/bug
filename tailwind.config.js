/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232120',
      }
    },
  },
  plugins: [
    require('tailwindcss-elevation')(
      [],
      {
        color: '#f2f2f2',
        opacityBoost: '0.23'
      }
    )
  ],
}
