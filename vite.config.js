import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      colors: {
        btn: 'cyan-500',  
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})