npm i -D vitest @types/jest @vitest/ui eslint-plugin-vitest 

# If you are using supertest
npm i -D supertest @types/supertest


# 
jsdom
linkedom
https://github.com/WebReflection/linkedom#readme

sample vite config:

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./test/setupTests.mjs'],
  },
});

sample .eslintrc.cjs:
module.exports = {
  env: {
    node: true,
    es2023: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:vitest/recommended'],
  plugins: ['vitest'],
  rules: {
    'vitest/expect-expect': 'off', // eliminate distracting red squiggles while writing tests
  },
  parserOptions: {
    sourceType: 'module',
  },
};

