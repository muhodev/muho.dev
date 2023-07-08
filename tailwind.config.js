/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      colors: {
        background: "var(--background)",
        main: "var(--text)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
