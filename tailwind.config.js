/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eef6f1',
          100: '#d3e9dc',
          200: '#a7d3b9',
          300: '#74b890',
          400: '#479a6e',
          500: '#2c7d54',
          600: '#1f6443',
          700: '#1a4f37',
          800: '#163f2d',
          900: '#0f3d2e',
          950: '#0a2620',
        },
        clay: {
          50: '#fbf2ec',
          100: '#f5e0d1',
          200: '#eabea3',
          300: '#dc9871',
          400: '#cf7c4e',
          500: '#c2703d',
          600: '#a55a2e',
          700: '#824627',
          800: '#5f3320',
          900: '#3f2316',
        },
        cream: {
          DEFAULT: '#f7f5f0',
          dim: '#efebe2',
        },
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(15, 61, 46, 0.12)',
        'soft-lg': '0 12px 32px -8px rgba(15, 61, 46, 0.18)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.6' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(120%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(120%)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.25s ease-in forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
