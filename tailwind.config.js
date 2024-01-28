/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      }
    },
  },
  plugins: [],
}

