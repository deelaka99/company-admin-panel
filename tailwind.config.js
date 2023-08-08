/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      'primary-blue': '#176B87',
      'secondary-blue': '#64CCC5',
      'ternary-blue': '#DAFFFB',
      'quternary-blue': '#DAFFFB',
      'white': '#ffffff',
      'silver': '#ecebff',
      'black': '#000000',
      'bermuda': '#78dcca',
      'red': '#FF2346',
      'dark-primary':'#313131',
      'dark-secondary':'#414141',
      'dark-ternary':'#525252',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

