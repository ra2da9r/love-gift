import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // На GitHub Pages приложение доступно внутри подпапки репозитория.
  base: process.env.GITHUB_ACTIONS ? '/hehe/' : '/',
  plugins: [react()],
})
