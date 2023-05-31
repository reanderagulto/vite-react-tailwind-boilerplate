import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // define Aliases for Folders/files
    alias: {
      '@src': "/src",
      '@css': "/src/css",
      '@components': "/src/components",
      '@hooks': "/src/hooks",
      '@pages': "/src/pages",
      '@parts': "/src/parts",
      '@layouts': "/src/layouts"
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
