import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#57B5E7",
        secondary: "#8DD3C7",
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [react(),
    tailwindcss()
  ],
})
