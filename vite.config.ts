import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@designcodeio/threeui/style.css': path.resolve(__dirname, './src/shaders/threeui.css'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
