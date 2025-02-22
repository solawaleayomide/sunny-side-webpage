/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          cyan: "hsl(167, 40%, 24%)",
          blue: "hsl(198, 62%, 26%)",
          moderateCyan: "hsl(168, 34%, 41%)",
        },
        neutral: {
          darkBlue: "hsl(212, 27%, 19%)",
          grayishBlue: "hsl(213, 9%, 39%)",
          darkGrayishBlue: "hsl(232, 10%, 55%)",
          lightGrayishBlue: "hsl(210, 4%, 67%)",
          white: "hsl(0, 0%, 100%)",
        },
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
