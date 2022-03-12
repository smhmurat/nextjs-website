module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#11172b',
        'secondary-color': '#1D2439',
        'brand-color': '#c8102e',
        'cloud-color': '#ECF0F1'
      },
      boxShadow: {
        '3xl': '0px 14px 80px rgba(34, 35, 58, 0.2)'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
}
