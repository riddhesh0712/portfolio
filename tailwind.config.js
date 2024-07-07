/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      clipPath: {
        'left': 'polygon(0 0, 51% 0, 51% 100%, 0 100%)',
        'right': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
      },
      keyframes: {
        'translate-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'translate-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'translate-up': 'translate-up 0.2s forwards',
        'translate-down': 'translate-down 0.2s forwards',
      },
      colors: {
        'primary-60' : '#00a9a5',
        'secondary-30' : '#0b5351',
        'thirtary-10' : '#092327'

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    
  ],
}

