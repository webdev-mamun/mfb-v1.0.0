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
    container: {
      center: true,
      screens: {
        xl: '1440px',
      },
    },
    spacing: {
      '0': "0",
      '.5': '.5rem',
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
      '5': '5rem',
      '6': '6rem',
      '7': '7rem',
      '8': '8rem',
      '9': '9rem',
      '10': '10rem',
      '20': '20rem',
    },
    fontSize: {
      'xs': ['1.2rem', {
        lineHeight: '1.4rem'
      }],
      'sm': ['1.3rem', {
        lineHeight: '1.43rem'
      }],
      'md': ['1.4rem', {
        lineHeight: '2.2rem'
      }],
      'base': ['1.6rem', {
        lineHeight: '2.16rem'
      }],
      'xl': ['2.2rem', {
        lineHeight: '2.2rem'
      }],
      '2xl': ['4.4rem', {
        lineHeight: '4.4rem'
      }],
      '3xl': ['6.2rem', {
        lineHeight: '6.2rem'
      }],
      '4xl': ['8.8rem', {
        lineHeight: '9.24rem'
      }]
    },
    extend: {
      fontFamily: {
        'sans': ['"Tomato Grotesk"', ...defaultTheme.fontFamily.sans],
        'serif': ['"TT Ramillas"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

