import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
// If you are using TypeScript, this give vite the ability to resolve imports using TypeScript's path mapping.
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    // If you are using TypeScript, this give vite the ability to resolve imports using TypeScript's path mapping.
    tsconfigPaths(),
  ],
  test: {
    // If you want to use global variables
    globals: true,
    environment: 'jsdom',
    // Add the correct path to the setup file
    setupFiles: ['./src/testUtils/setupTests.ts'],
    // Alternatively, you can use the set alias option to resolve the path to the setup file
    // alias: {
    //   '@/': new URL('./src/', import.meta.url).pathname,
    // },
  },
});

