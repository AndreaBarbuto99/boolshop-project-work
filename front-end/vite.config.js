import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // ← QUI forzi la porta
  server: {
    port: 5173,          // porta desiderata
    strictPort: true,    // NON cambia automaticamente a 5174 (error se occupata)
    // ----------------- eventuale proxy verso il backend (vedi punto 3)
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // ← porta del tuo backend
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''), // solo se il backend non usa il prefisso /api
      },
    },
  },
});