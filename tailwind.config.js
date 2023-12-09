/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'linear-gradient(135deg, #8d4aff, #370097 23.95%, #7f35ff 60.11%, #6004ff)',

      },
    },
  },
  plugins: [],
}

