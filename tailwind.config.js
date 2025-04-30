/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-bg)",
        text: "var(--color-text)",
      },
      fontFamily: {
        main: ["var(--font-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
