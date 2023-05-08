/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'h1': ['24px', {
          lineHeight: `${24 * 1.5}px`,
          fontWeight: '500',
        }],
        base: ['16px', {
          lineHeight: `${16 * 1.5}px`,
          fontWeight: '400',
        }]
      },
      colors: {
        kira: {
          primary: '#22ABDB', //light blue
          white: '#FFFFFF',
          background: '#F7F9FA',
          grayLine: '#E5E5E5', // light gray for line
          grayText: '#8D8D8D', //darker gray for text
          darkText: '#19252E',
        }
      }
    },
  },
  plugins: [],
}

