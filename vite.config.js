import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    
  ],
  extend: {
  colors: {
    primary: '#9C4231',
    secondary: '#C9A03C',
    accent: '#E37028',
    muted: '#6E5C3B',
    bgBase: '#F8F3EC',
    textDark: '#3C2C21',
  },
  fontFamily: {
    display: ['"Playfair Display"', 'serif'],
    body: ['"Merriweather"', 'serif'],
  },
}

})