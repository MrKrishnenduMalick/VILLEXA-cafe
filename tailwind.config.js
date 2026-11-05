/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eclat: {
          950: '#0a0306',
          900: '#14050d',
          850: '#1c0812',
          800: '#250a18',
          750: '#340e22',
          700: '#46132d',
          600: '#681c42',
          500: '#942b5f',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef5d8',
          200: '#fbe9b0',
          300: '#f6d880',
          400: '#eebf4a',
          500: '#dfa62a',
          600: '#c2851d',
          700: '#9b6118',
        },
        champagne: {
          DEFAULT: '#e6caa4',
          light: '#f7ede0',
          dark: '#b39063',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(223, 166, 42, 0.15)',
        'gold-glow': '0 0 30px rgba(223, 166, 42, 0.35)',
        'gold-glow-lg': '0 0 50px rgba(223, 166, 42, 0.55)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
