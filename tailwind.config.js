/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/components/**/*.{html,ts,scss}",
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Default primary color
        secondary: "#6B7280", // Gray color for secondary
        primaryText: "#26292c", // New text color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"], // Set default font family
    },
  },
  plugins: [],
};
