/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood-smoke': '#1F1F1F',
        'light-black': '#4D4D4D',
      },
      backgroundImage: {
        heroBgImg: "url('/public/assets/images/webp/hero-bg-img.webp')",
        bgRobot: "url('/public/assets/images/png/robot-bg-img.png')",
        whiteLayer: "url('/public/assets/images/png/white-layer.png')",
      },
    },
  },
  plugins: [],
}