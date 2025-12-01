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
          DEFAULT: '#0F172A', // Deep Blue / Slate 900
          light: '#334155',
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#D97706', // Gold / Amber 600
          light: '#F59E0B',
          dark: '#B45309',
        },
        accent: {
          DEFAULT: '#06B6D4', // Cyan 500
          light: '#22D3EE',
          dark: '#0891B2',
        },
        background: {
          DEFAULT: '#F8FAFC', // Slate 50
          dark: '#0F172A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1E293B',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#1E293B', // Fallback for dark mode if needed
        },
        terracotta: {
          DEFAULT: '#E07A5F',
          light: '#F2CCB7',
          dark: '#C0563B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
