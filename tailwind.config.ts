import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'cream-card': '#FFFFFF',
        'brown-dark': '#2C2218',
        'green-accent': '#2D6B1A',
        'green-dark': '#1A3D0E',
        'text-primary': '#1C1208',
        'text-secondary': '#4A3F35',
        'text-muted': '#7A6E65',
        'border-color': '#C8BFB0',
        'star-color': '#D4881E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
