/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#052B5B',
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a4b8ff',
          400: '#7a8fff',
          500: '#052B5B',
          600: '#1E5AA8',
          700: '#1846d9',
          800: '#1839af',
          900: '#1a3589',
        },
        secondary: {
          DEFAULT: '#1E5AA8',
        },
        accent: {
          DEFAULT: '#00C4B3',
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00C4B3',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        'gray-light': '#F5F7FA',
        'gray-dark': '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


