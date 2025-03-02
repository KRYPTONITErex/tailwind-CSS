/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        ownPrimary: "#7970EA",
        Bborder: "#E6E6ED",
      }
    },
  },
  plugins: [],
}