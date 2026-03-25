import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Depending on your application, base can also be "/"
  base: '',
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  plugins: [react(), viteTsconfigPaths()],
  server: {
    // This ensures that the browser opens upon server start
    open: true,
    // This sets a default port to 3000
    port: 3000
  }
});
