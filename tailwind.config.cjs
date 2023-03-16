/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5ABBAD",
        black: "#0F0E0E",
        privy: "#E42E2C",
      },
      animation: {
        shake: "shake 0.2s ease-in-out 0s 2",
      },
    },
  },
  plugins: [],
};
