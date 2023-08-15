import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./resources/js/app.js'],
    },
    manifest: true,
    outDir: './dist',
  },
})
