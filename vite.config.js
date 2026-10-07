import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages menyajikan di /admin-sales-portal/ (diset lewat VITE_BASE di workflow deploy).
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: { '@ds': '/design-system' },
  },
  test: {
    environment: 'jsdom',
    css: false,
    testTimeout: 20000,
  },
});
