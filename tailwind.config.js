/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#D0E608',
        customPaleGreenYellow:'#F4FBD2',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        florensa: ['Florensa Regular', 'sans-serif'],

      },
    },
  },
  plugins: [],
}