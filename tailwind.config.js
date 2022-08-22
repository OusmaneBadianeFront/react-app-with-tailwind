/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'navy': 'hsl(209, 75%, 15%)',
        'lightBlue':'#00D4FF',
          'lightGrey':'#91AAC3'},
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]

}

