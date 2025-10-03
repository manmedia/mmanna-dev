import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Change 'greeter' to your actual repository name
  base: process.env.NODE_ENV === 'production' ? '/greeter/' : '/',
})
