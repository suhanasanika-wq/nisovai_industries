/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -4px rgba(11, 94, 215, 0.1)',
        'card-hover': '0 20px 40px -10px rgba(11, 94, 215, 0.2)',
        'primary': '0 8px 24px rgba(11, 94, 215, 0.3)',
        'accent': '0 8px 24px rgba(46, 204, 113, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #EBF4FF 0%, #F0FFF4 50%, #FFFFFF 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0B5ED7 0%, #1A73E8 50%, #0A4DB5 100%)',
        'accent-gradient': 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};