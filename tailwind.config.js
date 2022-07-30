/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "rgb(241,245,249)",
          900: "rgb(255,255,255)",
        },
        dark: {
          100: "rgb(51,66,84)",
          200: "rgb(17,24,38)",
          300: "rgb(30,41,58)",
        },
      },
    },
    keyframes: {
      loading: {
        "0%  , 100%": {
          transform: "scale(.6)",
        },
        "50%": {
          transform: "scale(1)",
        },
      },
    },
    animation: {
      loading: "loading 1s ease-in-out infinite",
      loading_delay: "loading 1s ease-in-out .5s infinite",
    },
  },
  plugins: [],
};
