module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#333A4D',
        'secondary-color': '#282E3F',
        'brand-color': '#E8C053'
      },
      backgrounImage: {
        'about-bg': "url('/public/images/about-bg.jpg')"
      }
    },
  },
  plugins: [],
}
