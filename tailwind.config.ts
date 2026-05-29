import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f4fbf5',
          100: '#eaf5ec',
          200: '#c8e6cd',
          300: '#98d0a2',
          400: '#5db36e',
          500: '#2e9e4a',
          600: '#227a38',
          700: '#1a6b2f',
          800: '#155a26',
          900: '#0d3d18',
          950: '#071f0c',
        },
        orange: {
          400: '#f59620',
          500: '#e07b00',
          600: '#c96e00',
        },
        sand: '#f9f6f0',
        stone: '#e8e2d8',
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
