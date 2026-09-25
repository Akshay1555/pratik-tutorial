/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a2540",
          light: "#123a52",
          dark: "#061a2e",
        },
        teal: {
          DEFAULT: "#0d5c56",
          light: "#12897f",
          soft: "#e6f4f2",
          dark: "#0a4642",
        },
        plum: {
          DEFAULT: "#5b2a5e",
        },
        cream: "#f7f9f8",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(10, 37, 64, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
