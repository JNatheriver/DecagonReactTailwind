/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      fontFamily: {
        manrope: ['Manrope']
      }
    }
  },
  plugins: []
}
