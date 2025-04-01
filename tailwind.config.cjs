/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'primary-black': '#000000',
        'primary-blue': '#1C75BB',
        'dark-blue': '#144C7F',
        'white': '#FFFFFF',
      },
      boxShadow: {
        'custom': '0 4px 10px -1px rgba(28, 117, 187, 0.2), 0 2px 6px -1px rgba(28, 117, 187, 0.1)',
        'custom-lg': '0 10px 20px -3px rgba(28, 117, 187, 0.2), 0 4px 8px -2px rgba(28, 117, 187, 0.1)',
        'futuristic': '0 5px 15px rgba(28, 117, 187, 0.3), 0 0 0 1px rgba(28, 117, 187, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};