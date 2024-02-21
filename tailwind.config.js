const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small screens and up
        'sm': '640px', // Small screens and up
        'md': '768px', // Medium screens and up
        'lg': '1024px', // Large screens and up
        'xl': '1280px', // Extra large screens and up
        '2xl': '1536px', // 2 Extra large screens and up
      },
      colors: {
        blued: '#3195ff',
        grayed: '#2c3e50',
        grayedSky:'#161E2AF9'
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      const headings = {
        h1: {
          fontSize: '2.25rem', 
          fontWeight: 'bold',
        },
        h2: {
          fontSize: '1.875rem',
          fontWeight: 'bold', 
        },
        h3: {
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
        },
        h4: {
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
        },
        h5: {
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
        },
        h6: {
          fontSize: '1rem', 
          fontWeight: 'bold', 
        },
      };
      addComponents(headings);
    })
  ],
}
