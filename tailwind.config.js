/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily:{
        kalnia: ['Kalnia Glaze', 'Poetsen One'],
        poetsen: ['Sevillana'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        navy: '#000080', // Navy blue color code
      },
    },
  },
  plugins: [],
}

