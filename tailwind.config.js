/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blue-700": "#274C5B",
      "green-300": "#7EB693",
      "yellow-300": "#EFD372",
      "gray-200": "#D4D4D4",
      "white-50": "#F9F8F8",
      "green-50": "#EFF6F1",
      "blue-80": "#525C60"
    },
    fontFamily: {
      "Roboto": "Roboto, sans-serif",
      "Open-Sans": "Open Sans, sans-serif"
    },
    extend: {},
  },
  plugins: [],
}

