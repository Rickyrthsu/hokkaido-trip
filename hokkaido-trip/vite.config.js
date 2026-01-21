import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 針對你的 GitHub Repo 設定正確路徑
  base: '/hokkaido-trip/', 
})
