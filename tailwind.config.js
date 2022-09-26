/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:  {
        'hero-pattern': "url('./assets/images/bgbody.svg')",
        // eslint-disable-next-line no-use-before-define
        'five-new': "url('./assets/images/acco_bg.svg')",
        'num': "url('./assets/icon/five_itembg.svg')",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
       },
       colors: {
          "background": "#041726",
          "primary": "#162837",
          "border": "#364C5E",
          "blue": "#39a5de",
          "light": "#3be6e8",
          "dark": "#2982d2",
          "input-bg": "#0d1c28",
          "alt": "#152f41",
          "secbg": '#021420',
          "abt": '#162837',
          "inp": '#132330',
          "plat": '#7ec3e7'
       },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
