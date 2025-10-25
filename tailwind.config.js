/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./webapp/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('img/background.jpg')",
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },

      scrollBehavior: 'smooth',

      fontFamily: {
        bubbly: ['Fredoka One', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
        },
      });
    },
  ],
}

