module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#F36C21',
          800: '#E95808',
          900: '#92400E',
        },
        gray: {
          100: '#f7fafc',
          200: '#EDF1F4',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#555555',
          800: '#2d3748',
          900: '#1a202c',
        },
        purple: {
          700: '#8A2CB1',
        },
        blue: {
          800: '#063D7E',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
