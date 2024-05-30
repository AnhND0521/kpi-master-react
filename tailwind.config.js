/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      purple: '#7E56DA',
      darkPurple: '#2C0781',
      lightBlue: '#F9F5FF',
      blue: '#87cefa',
      textBlue: '#2F65E1',
      pink: '#F8E4FF',
      gray: '#F3EDFC',
      darkGray: '#D9D9D9',
      textGray: '#5E5E5E',
      textLightGray: '#8D8F9F',
      red: "#FF6B6B",
      yellow: "#FFD93D",
      green: "#6BCB77",
    },
    extend: {
      fontFamily: { 
        "inter": ['inter', 'sans-serif'] 
      } 
    },
  },
  plugins: [],
})