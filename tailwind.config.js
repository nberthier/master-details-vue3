const colors = require('tailwindcss/colors')



module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
