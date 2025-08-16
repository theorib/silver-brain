Tags: #git #husky #lint-staged #commitlint #commitizen #setup-guide #git-hooks
# Husky & Git Hooks Setup Guide

## Overview

This guide sets up a modern Git workflow with automated linting, testing, and commit message validation using:

- **Husky**: Git hooks management
- **Lint-Staged**: Run linters on staged files
- **Commitlint**: Validate commit messages
- **Commitizen**: Interactive commit message prompts

## Reference

Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/

## Installing and Initialising Husky

Husky installation will:

1. Add a prepare script to package.json
2. Create a sample pre-commit hook that you can edit (by default, npm test will run when you commit)
3. Configure Git hooks path

### PNPM

```bash
pnpx husky-init && pnpm i -D husky@latest && pnpm install
```

### NPM

```bash
npx husky-init && npm install
```

### Yarn

```bash
yarn dlx husky-init --yarn2 && yarn
```

### Bun

```bash
bunx husky-init && bun install
```

## Setting Up Lint-Staged

Lint-Staged runs linters against staged git files and doesn't let 💩 slip into your code base.

### Installation

#### PNPM

```bash
pnpm add lint-staged -D
```

#### NPM

```bash
npm install lint-staged --save-dev
```

#### Yarn

```bash
yarn add lint-staged -D
```

#### Bun

```bash
bun add lint-staged -D
```

### Configuration

Create a `lint-staged.config.mjs` file with the following configuration:

```bash
echo -e "const config = {\n  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],\n  '**/*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck',\n  '**/*.{html,json,css,scss,md,mdx,js,jsx,ts,tsx}': ['prettier -w'],\n};\nexport default config;" > lint-staged.config.mjs
```

This configuration tells Lint-Staged to:

- Run ESLint with auto-fix on JavaScript/TypeScript files
- Run TypeScript compiler check on TypeScript files
- Run Prettier formatting on various file types

## Setting Up Pre-Commit Hook

Configure the pre-commit hook to run tests and Lint-Staged:

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\npnpm lint-staged -v\npnpm vitest run" > .husky/pre-commit
```

Make sure the pre-commit hook is executable:

```bash
chmod +x .husky/pre-commit
```

## Installing Commitlint

Commitlint helps your team adhere to a commit convention by linting commit messages.

### Installation

#### PNPM

```bash
pnpm add @commitlint/{cli,config-conventional} -D
```

#### NPM

```bash
npm install @commitlint/{cli,config-conventional} -D
```

#### NPM (Windows)

```bash
npm install @commitlint/config-conventional @commitlint/cli -D
```

#### Yarn

```bash
yarn add @commitlint/{cli,config-conventional} -D
```

#### Bun

```bash
bun add @commitlint/cli @commitlint/config-conventional -D
```

### Configuration

Create a `commitlint.config.mjs` file:

```bash
echo 'const config={extends:["@commitlint/config-conventional"],parserPreset:"conventional-changelog-conventionalcommits",rules:{"type-enum":[2,"always",["feat","fix","docs","style","chore","refactor","ci","test","revert","perf","vercel"]],}};export default config;' > commitlint.config.mjs
```

## Setting Up Commit-Msg Hook

Define the commit-msg hook to run Commitlint:

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nnpx --no -- commitlint --edit \$1" > .husky/commit-msg
```

Make sure the commit-msg hook is executable:

```bash
chmod +x .husky/commit-msg
```

## Installing Commitizen

Commitizen provides an interactive CLI for creating standardized commit messages. The `@commitlint/cz-commitlint` adapter integrates Commitizen with Commitlint and centralizes configuration in the `commitlint.config.mjs` file as the single source of truth.

### Installation

#### PNPM

```bash
pnpm add commitizen @commitlint/cz-commitlint inquirer -D
```

#### NPM

```bash
npm install commitizen @commitlint/cz-commitlint inquirer -D
```

#### Yarn

```bash
yarn add commitizen @commitlint/cz-commitlint inquirer -D
```

#### Bun

```bash
bun add commitizen @commitlint/cz-commitlint inquirer -D
```

### Configuration

Create a `.czrc` file with the Commitizen configuration:

```bash
echo '{\n  "path": "@commitlint/cz-commitlint"\n}' > .czrc
```

### Alternative Configuration

Alternatively, add the Commitizen configuration to your `package.json` file:

```json
"config": {
  "commitizen": {
    "path": "@commitlint/cz-commitlint"
  }
}
```

## Setting Up Prepare-Commit-Msg Hook

Define the prepare-commit-msg hook to run Commitizen:

```bash
echo "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nexec < /dev/tty && npx cz --hook || true" > .husky/prepare-commit-msg
```

Make sure the prepare-commit-msg hook is executable:

```bash
chmod +x .husky/prepare-commit-msg
```

## Setting Up Post-Merge Hook

Define the post-merge hook to automatically run package installation after merging:

### PNPM

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\npnpm install" > .husky/post-merge
```

### NPM

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nnpm install" > .husky/post-merge
```

### Yarn

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nyarn" > .husky/post-merge
```

### Bun

```bash
echo -e "#!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nbun install" > .husky/post-merge
```

Make sure the post-merge hook is executable:

```bash
chmod +x .husky/post-merge
```

## Summary of Git Hooks

After setup, you'll have the following Git hooks configured:

- **pre-commit**: Runs lint-staged and tests before allowing commits
- **commit-msg**: Validates commit messages against conventional commit format
- **prepare-commit-msg**: Launches interactive Commitizen prompt for guided commit message creation
- **post-merge**: Automatically installs dependencies after merging

## Workflow

1. Stage your files with `git add`
2. Run `git commit`
3. Commitizen will prompt you to create a conventional commit message
4. Pre-commit hook runs linting and tests
5. Commit-msg hook validates the final commit message
6. After merging, post-merge hook ensures dependencies are up to date