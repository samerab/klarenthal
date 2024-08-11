/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'ball-mobile': 'calc(50% - 70px)',
        'ball-desk': 'calc(50% - 70px)'
      }
    },
    colors: {
      primary: '#Fe0000',
      black: '#000000',
      white: '#ffffff'
    }
  },
  plugins: []
}
