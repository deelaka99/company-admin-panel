/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      'primary-blue': '#176B87',
      'secondary-blue': '#64CCC5',
      'ternary-blue': '#DAFFFB',
      'quternary-blue': '#DAFFFB',
      'white': '#ffffff',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

