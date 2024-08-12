/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      chakraPetch: ["Chakra Petch", "sans-serif"],
      sourceCode: ["Source Code Pro", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
