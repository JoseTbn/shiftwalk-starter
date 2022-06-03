const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      'xxs': '375px',
          'xs': '475px',
          ...defaultTheme.screens,
          '2xlx': { 'max': '1535px' },
          // => @media (max-width: 1535px) { ... }
    
          'xlx': { 'max': '1279px' },
          // => @media (max-width: 1279px) { ... }
    
          'lgx': { 'max': '1023px' },
          // => @media (max-width: 1023px) { ... }
    
          'mdx': { 'max': '767px' },
          // => @media (max-width: 767px) { ... }
    
          'smx': { 'max': '639px' },
          // => @media (max-width: 639px) { ... 
          'ssx': { 'max': '475px' },
          // => @media (max-width: 475px) { ... 
          'smmd': { 'min': '375px', 'max': '639px' },
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      },
      backgroundImage:{
        texture: `url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')`
                 },
                 keyframes: {
                  scrollX: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                  },
                  scrollZ: {
                    '0%': { transform: 'translateX(1%)' },
                    '100%': { transform: 'translateX(-100%)' },
                  },
          
                  spinSlow: {
                    '0, 100%':{transform: 'rotate(360%)'}
                  },
          },
          animation: {
            'scrollX': 'scrollX 40s linear infinite',
           'scrollZ': 'scrollZ 40s linear infinite',
            'spinSlow': 'spin 10s linear infinite',
            'spin-slow': 'spin 3s linear infinite',
        
          },

    },
    variants: 
  
  {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: ["styled-jsx/babel"],
  },
  plugins: []
}