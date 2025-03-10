import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    mimeTypes: {
      '.pdf': 'application/pdf',
    },
  },
  base: '/',
});