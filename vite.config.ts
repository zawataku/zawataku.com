import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://zawataku.com',
      dynamicRoutes: ['/works'],
    }),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    }
  }
})
