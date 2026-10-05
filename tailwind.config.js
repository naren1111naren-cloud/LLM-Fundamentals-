/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-light': '#EFF6FF',
          'blue-hover': '#1D4ED8',
        },
        surface: {
          bg: '#FFFFFF',
          subtle: '#F8F9FA',
          muted: '#F3F4F6',
          border: '#E5E7EB',
          'border-dark': '#D1D5DB',
        },
        content: {
          primary: '#222222',
          secondary: '#666666',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
