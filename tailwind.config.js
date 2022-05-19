module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '640px', // => @media (min-width: 640px) { ... }
        'xl': '1440px', // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
