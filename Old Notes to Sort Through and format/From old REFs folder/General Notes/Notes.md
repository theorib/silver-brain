# General Notes

If you are using PNPM v10+ for security reasons, pnpm doesn't run dependencies install scripts anymore by default. you have to explicitly declare which dependencies you want to allow to run install scripts adding the package to the `pnpm.onlyBuiltDependencies` array in your `packages.json` file:

```json
  "pnpm": {
    "onlyBuiltDependencies": [
      "better-sqlite3"
    ]
  }
```

To test Eslint you can run

```bash
pnpm dlx eslint-config-prettier src/app/page.tsx
```

Using eslint Flat Compatibility plugin:

```typescript
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: eslint.configs.recommended,
});

const [compilerConfigCompat] = compat.config({
  plugins: ['react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
  },
});
```

To import CJS files into an ESM modules we can use:

```typescript
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('next/dist/compiled/babel/eslint-parser');
```

Setting up **filename and **dirname for ESM modules:

```typescript
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
