/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        'orange' : '#fc7613',
        'light-grey' : '#959eac',
        'medium-grey' : '#7c8798',
        'dark-blue' : '#1f2630',
        'medium-dark-blue' : '#262f38',
        'very-dark-blue' : '#141519'
      },
      keyframes: {
        fadeInCenter : {
          '0%' : { transform: 'translateX(-100%)', opacity: '0'},
          '100%' : { transform: 'translateX(0)', opacity: '1'},
        }
      },
      animation: {
        fadeInCenter: 'fadeInCenter 0.3s ease-in-out forwards',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
