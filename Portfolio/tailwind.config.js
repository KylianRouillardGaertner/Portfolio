/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          light: '#FEEACC',
          DEFAULT: '#F0D5AF',
          dark: '#DBBD92',
        },
        'text': '#D13D25',
      },
      fontFamily: {
        'Rounded': ['"simply_roundedregular"'],
        'Rounded_Bold': ['"simply_roundedbold"'],
      },
    },
  },
  plugins: [],
}

