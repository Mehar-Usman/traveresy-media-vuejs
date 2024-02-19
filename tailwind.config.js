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
      fontFamily: {
        // Define your attractive fonts here
        'raleway': ['Raleway', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      fontWeight: {
        // Define additional font weights here
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
          fontSize: '2.25rem', // Customize the size of h1
          fontWeight: 'bold', // Apply bold font weight to h1
        },
        h2: {
          fontSize: '1.875rem', // Customize the size of h2
          fontWeight: 'bold', // Apply bold font weight to h2
        },
        h3: {
          fontSize: '1.5rem', // Customize the size of h3
          fontWeight: 'bold', // Apply bold font weight to h3
        },
        h4: {
          fontSize: '1.25rem', // Customize the size of h4
          fontWeight: 'bold', // Apply bold font weight to h4
        },
        h5: {
          fontSize: '1.125rem', // Customize the size of h5
          fontWeight: 'bold', // Apply bold font weight to h5
        },
        h6: {
          fontSize: '1rem', // Customize the size of h6
          fontWeight: 'bold', // Apply bold font weight to h6
        },
      };

      addComponents(headings);
    })
  ],
}
