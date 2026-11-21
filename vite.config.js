import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 使用相对路径，部署到 GitHub Pages 项目子路径下也能正常工作
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    // Windows 下文件被占用时避免 FSWatcher EBUSY 崩溃
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
