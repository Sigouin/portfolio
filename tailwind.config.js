/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "matt-black": "#1C1A27",
        "pip-purple": "#CFBCFF",
        "stella-purple": "#1C1927",
        "gradient-color-1": "#00ff00",
        "gradient-color-2": "#ff0000",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ["var(--font-dank)"], // sans-sans
        mono: ["var(--font-dank)"],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
