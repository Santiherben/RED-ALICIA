import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5174,
    host: true,
    open: true,
  },
  preview: {
    port: 4174,
    host: true,
    open: true,
  }
})
