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
        'primary-blue': '#0056D2',
        'sky-blue': '#87CEFA',
        'neutral-gray': '#B0B0B0',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 86, 210, 0.1), 0 2px 4px -1px rgba(0, 86, 210, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 86, 210, 0.1), 0 4px 6px -2px rgba(0, 86, 210, 0.05)',
      },
    },
  },
  plugins: [],
};