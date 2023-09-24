import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.API,
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  define: {
    global: {
      window: {}
    }
  }
});
