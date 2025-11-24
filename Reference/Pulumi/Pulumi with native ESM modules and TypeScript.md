---
tags:
  - iac
  - pulumi
  - typescript
  - esm-modules
---
# Running Pulumi with native [[ESM]] modules and TypeScript

 set the `type` field in your `package.json` to `module`. This will tell Node.js to treat your package as an ESM package.
```json
{
    "name": "my-package",
    "version": "1.0.0",
    "type": "module",
    ...
}
```

Your `tsconfig.json` file should also be updated to ensure that TypeScript outputs ESM, by setting the [`module`](https://www.typescriptlang.org/tsconfig/#module) and [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution)fields to `nodenext`:

```json
{
    "compilerOptions": {
        ...
        "module": "nodenext",
        "moduleResolution": "nodenext",
        ...
    }
}
```

Install a recent version of `typescript` and `ts-node`.
```bash
pnpm install -D typescript@latest ts-node@latest @types/node
```