/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
     width: {
      '100' : '465px',
      '6/6': '48.5%'
     },
     height: {
      '100' : '465px'
     },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
