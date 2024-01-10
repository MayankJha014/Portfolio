/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "cursive"],
        robotSlab: ["Roboto Slab", "serif"],
        youngSerif: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
