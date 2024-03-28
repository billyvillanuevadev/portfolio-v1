/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.8rem',
      sm: '0.9rem',
      base: '1.25rem',
      xl: '1.3rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
    },
  },
  plugins: [],
}