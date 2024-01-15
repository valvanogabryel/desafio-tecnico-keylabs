/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'keyslab-gray': '#27272A',
        'keyslab-gray-darker': '#18181B',
        'keyslab-light-gray': '#A1A1AA',
        'keyslab-black': '#09090B',
        'keyslab-blue': '#009EFF',
        'keyslab-blue-hover': '#005CBF',
        'light-gray': '#FAFAFA',
        'gradient-dark-blue': '#051F40',
        'gradient-blue': '#06425C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      padding: {
        15: '3.75rem',
      },
      keyframes: {
        'fade-up-kf': {
          from: {
            transform: 'translateY(20px)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-up': 'fade-up-kf .3s cubic-bezier(.51,.92,.24,1.15)',
      },
    },
  },
  plugins: [],
};
