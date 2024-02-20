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
      "blue-80": "#525C60",
      "qizil": "red"
    },
    fontFamily: {
      "Roboto": "Roboto, sans-serif",
      "Open-Sans": "Open Sans, sans-serif"
    },
    fontSize: {
      "7xl": "70px",
      "5xl": "50px",
      "4xl": "40px",
      "3.8xl": "38px",
      "3.5xl": "35px",
      "3xl": "30px",
      "2.5xl": "25px",
      "2xl": "20px",
      "md": "18px",
    },



    extend: {
    },
  },
  plugins: [],
}

