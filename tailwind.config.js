/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'city': "url('/src/assets/home.jpg')",
        'energy': "url('/src/assets/energia.jpg')",
      },
      fontFamily: {
        "sans": ["Montserrat", "sans-serif"]
      },
      keyframes: {
        slider: {
          "from": { transform: "translatex(0)"},
          "to": { transform: "translatex(-600%)"},
        }
      },
      animation: {
        slider: "25s slider infinite linear"
      }
    },
  },
  plugins: [],
}

