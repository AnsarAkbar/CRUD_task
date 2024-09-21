/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'},
      },
    },
  },
  plugins: [],
}