// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC00", // Yellow
        secondary: "#000000", // Black
      },
    },
  },
  plugins: [],
};
