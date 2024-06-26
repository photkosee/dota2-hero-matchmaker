/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%" : {
            transform: "translateY(25px)",
            opacity: "0",
          },
          "100%" : {
            transform: "translateY(0px)",
            opacity: "1",
          }
        },
        fadeback: {
          "0%" : {
            opacity: "1",
          },
          "50%" : {
            opacity: "0",
          },
          "100%" : {
            opacity: "1",
          }
        },
        turnin: {
          "0%" : {
            opacity: "0",
          },
          "100%" : {
            opacity: "1",
          }
        },
      },
      animation: {
        fadein: "fadein 1.5s",
        fadeback: "fadeback 2s",
        turnin: "turnin 2s",
      },
    },
  },
  plugins: [],
}

