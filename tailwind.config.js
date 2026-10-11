/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cowry-blue': '#1e40af',
        'cowry-dark': '#0f172a',
        'cowry-light': '#f8fafc',
        'cowry-success': '#10b981',
        'cowry-warning': '#f59e0b',
        'cowry-danger': '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'cowry': '12px',
      },
      boxShadow: {
        'cowry-sm': '0 1px 2px 0 rgba(30, 64, 175, 0.05)',
        'cowry': '0 10px 25px -5px rgba(30, 64, 175, 0.1)',
      },
    },
  },
  plugins: [],
};