/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'arrow': "url('/src/assets/arrow.svg')",
      }
    },
  },
  plugins: [],
}

