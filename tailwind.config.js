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
    './templates/metaobject/*.liquid',
    './locales/*.json',
  ],
  theme: {
    container: {
      center: true
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
      screens: {
        "xs": "375px"
      },
      animation: {
        'spin-slow': 'spin-slow 1.4s linear infinite',
        'dash': 'dash 1.4s ease-in-out infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(270deg)'
          }
        },
        'dash': {
          '0%,100%': {
            'stroke-dashoffset': '280'
          },
          '50%': {
            'stroke-dashoffset': '75',
            transform: 'rotate(135deg)'
          },
          '100%': {
            transform: 'rotate(450deg)'
          }
        }
      },
      fontFamily: {
        'sans': ['"Tomato Grotesk"', ...defaultTheme.fontFamily.sans],
        'serif': ['"TT Ramillas"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
  ],
}

