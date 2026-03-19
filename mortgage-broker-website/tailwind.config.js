/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./gatsby-*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1C3D",
          dark: "#071125",
        },
        accent: {
          DEFAULT: "#C8A55A",
          light: "#E7D2A8",
          dark: "#A98336",
        },
        neutral: {
          50: "#F7F5F0",
          100: "#ECE8DD",
          200: "#DED5C1",
          300: "#C8BBA1",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(7, 17, 37, 0.32)",
        card: "0 20px 55px -26px rgba(11, 28, 61, 0.36)",
        brand: "0 20px 45px -22px rgba(169, 131, 54, 0.45)",
      },
    },
  },
  plugins: [],
};
