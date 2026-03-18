/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8E4DD",
        accent: "#610B81",
        surface: "#F5F3EE",
        dark: "#111111",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        drama: ['"DM Serif Display"', "serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      }
    },
  },
  plugins: [],
}
