/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-gray': '#4A4A4A',
        'brand-green': '#2ECC71',
        'brand-green-hover': '#27AE60',
        'brand-light-gray': '#F0F0F0',
        'brand-guide-blue': '#23455E',
        'brand-dark-blue': '#254760',
        'brand-dark-blue-alt': '#24465F',
        'brand-gold': '#DCC47A',
        'brand-yellow': '#f9f902',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
