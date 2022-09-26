/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm:'320px',
      md:'768px',
      lg:'976px',
      xl:'1440'
    },
    extend: {
      colors:{
        white:'hsl(0, 0%, 100%)',
        lightGrey:'hsl(217, 12%, 63%)',
        mediumGrey:'hsl(216, 12%, 54%)',
        darkBlue:'hsl(213, 19%, 18%)',
        lightDarkBlue:'hsl(213, 20%, 21%)',
        veryDarkBlue:'hsl(216, 12%, 8%)',
        orange:' hsl(25, 97%, 53%)'
        
      },
      fontFamily:{
        overpass:'Overpass'
      },
      width: {
        26: '26rem',
      },
    },
  },
  plugins: [],
}
