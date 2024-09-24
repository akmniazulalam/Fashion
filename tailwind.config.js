/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins'],
        'frank': ['Frank Ruhl Libre'],
        'podkova': ['Podkova'],
      },
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'bgColor': '#FAE3B6',
        'btnbg': '#FFD687',
        'btnColor': '#FDBB57',
        'pColor': '#BFA885',
        'recColor': '#FEECC8',
      },
      borderRadius: {
        'large': '12px',
        'positionbtn': '20px',
      }
    },
  },
  plugins: [],
}

