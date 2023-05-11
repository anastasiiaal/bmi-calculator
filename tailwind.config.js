/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1250px'},
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '600px'}
    }
  },
  plugins: [],
}