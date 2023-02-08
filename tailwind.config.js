/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      backgroundImage: {
        "hero-image": "url('/assets/main-hero-section-bg.jpg')",
      },
    },
  },
  plugins: [],
};
