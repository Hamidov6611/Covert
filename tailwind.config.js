/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlack': '#000',
        'lightGreey': '#2F2E40',
        'Primary': '#1348F9',
        'heroPrimary': '#1E86FA',
        'heroGreey': '#E9EDF2',
        "modalBg": 'rgba(0,0,0,.5)',
        'heroLight': '#ABAFB6'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

