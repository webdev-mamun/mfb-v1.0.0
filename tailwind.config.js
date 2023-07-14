/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './locales/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Tomato Grotesk"', ...defaultTheme.fontFamily.sans],
        'serif': ['"TT Ramillas"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

