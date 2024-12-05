/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': {
        '50': '#fdf8f9',
        '100': '#f9e7eb',
        '200': '#f5d3da',
        '300': '#edb4bf',
        '400': '#e0899a',
        '500': '#d16278',
        '600': '#bc465e',
        '700': '#9d384c',
        '800': '#8b2021',
        '900': '#6e2e3b',
        '950': '#3b141c',
      },
    },
    extend: {},
  },
  plugins: [],
}

