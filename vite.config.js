import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure Vercel looks for the 'build' directory
  },
  server: {
    mimeTypes: {
      '.pdf': 'application/pdf', // Explicitly set MIME type for PDF
    },
  },
});
