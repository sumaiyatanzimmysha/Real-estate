/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
         'container': '1920px',
      },
      fontFamily: {
        'nun': 'Nunito',
        'pop': 'Poppins',
     },
    colors: {
      'pcolor': '#1D2022',
      'p2color': '#5C727D',
      'butcolor': '#FF5A3C',
   },
    },
  },
  plugins: [],
}

