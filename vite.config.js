import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 使用相对路径，部署到 GitHub Pages 项目子路径下也能正常工作
export default defineConfig({
  plugins: [vue()],
  base: './'
})
