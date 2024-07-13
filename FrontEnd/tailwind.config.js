/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display','sans-serif'],
        inter: ['Inter','sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #EDF7FF -10.07%, #D6ECFF 40.09%, #B6DEFF 89.71%, #ABDAFF 99.99%)',
        'custom-gradient-2': 'linear-gradient(256deg, #0A0A0A 10.12%, #00A3FF 29.59%, #2757D1 59.56%, #1031DC 82.04%)',
      },
      boxShadow: {
        'custom-shadow': '-10px 12px 17.1px 0px rgba(0, 0, 0, 0.41), 8px -11px 15.8px 0px rgba(0, 0, 0, 0.50)',
        'custom-shadow2': '-3px 3px 17.1px 0px rgba(0, 0, 0, 0.30) inset, 3px -3px 15.8px 0px rgba(0, 0, 0, 0.30) inset',
      },
    },
  },
  variants: {},
  plugins: [],
}

