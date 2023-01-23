/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.slate,
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')
  ],
}
