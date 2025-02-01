import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to the network
    port: 5173, // Explicitly specify the port
    strictPort: true, // Fail if port is in use
  },
});
