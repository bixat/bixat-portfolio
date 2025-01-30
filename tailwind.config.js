/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5D5FEF",
        secondary: "#46ED69",
        card: "#3B3B3B",
        background: "#2B2B2B",
        "light-card": "#FFFFFF",
        "light-background": "#e5e7eb",
      },
    },
  },
  plugins: [require("daisyui")],
};
