/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112233",
        secondary: "#EBFF00",
        tertiary: "#D9D9D9",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.4s ease-out forwards",
        "fade-out": "fadeOut 0.4s ease-in forwards",
      },
    },
  },
  plugins: [],
};

module.exports = config;
