import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sales-savvy-backend.onrender.com :9090', // Your backend URL
        changeOrigin: true,
      },
    },
  },
});
