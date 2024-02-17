/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3BB77E",
        secondary: "#7e7e7e"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

