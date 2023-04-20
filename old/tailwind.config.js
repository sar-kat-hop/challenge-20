/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/styles/*.{js, css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  //daisyui config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}


