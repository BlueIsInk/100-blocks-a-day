module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      gridTemplateRows: {
        'grid': 'repeat(10, minmax(0, 1fr))',
      },

      gridTemplateColumns: {
        'grid': 'repeat(10, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
