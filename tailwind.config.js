/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        neutralwhite: "#ffffff",
        neutralgray: "#D9D9D9",
        gray_300: "#A6A6A6",
        gray_100: "#D9DBE1",
        primary_blue: "#0247D8",
        neutralred: "#E53539",
        secondary_bg: "#F4F6FA",
      },
      screens: {
        "2xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
