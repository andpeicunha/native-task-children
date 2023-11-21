/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory such as src>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
      backgroundImage: {
        'image-1': "url('@img/desenho-bg-1.jpeg')",
        'image-2': "url('@img/desenho-bg-2.jpeg')",
      }
    }},
  },
  plugins: [],
}