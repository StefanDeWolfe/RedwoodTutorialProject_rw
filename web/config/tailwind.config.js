/** @type {import('tailwindcss').Config} */
// Icterine #fbfb5d
//
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {colors: {
        icterine: '#fbfb5d',
        cinder: '#25292f',
        teleMagenta: '#da3675',
        fountainBlue: '#61c2bc',
        stormDust: '#636363'
      }
    },
    fontFamily: {
      sans:['Inter', 'sans-serif'],
      condensed: ['Bebas Neue', 'sans-serif']
    }
  },
  plugins: [],
}

