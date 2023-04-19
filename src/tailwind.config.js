/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/styles/*.{js, css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

