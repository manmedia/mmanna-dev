import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Using custom domain fname.me, so base is root
  // If using default github.io URL, uncomment the line below:
  // base: process.env.NODE_ENV === 'production' ? '/mmanna-dev/' : '/',
  base: '/',
})
