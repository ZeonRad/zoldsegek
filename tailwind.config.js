/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'light-green': '#e2eeb7',
        'dark-green': '#4a793b',
        'brown': '#754d3c',
        'dark-brown': '#35231a',
      },
    },
  },
  
}
