/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#3A8DFF',
        'dark-gray': '#2F2F2F',
        'light-gray': '#D9D9D9',
        'pure-white': '#FFFFFF',
        'neon-lime': '#A8FF60',
        'digital-violet': '#9D6BFF',
      },
    },
  },
  plugins: [],
}; 