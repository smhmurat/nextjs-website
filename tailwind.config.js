module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#333A4D',
        'secondary-color': '#282E3F',
        'brand-color': '#E8C053',
        'cloud-color': '#ECF0F1'
      },
      boxShadow: {
        '3xl': '0px 14px 80px rgba(34, 35, 58, 0.2)'
      }
    },
  },
}
