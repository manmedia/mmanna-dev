import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Repository name: mmanna-dev
  base: process.env.NODE_ENV === 'production' ? '/mmanna-dev/' : '/',
})
