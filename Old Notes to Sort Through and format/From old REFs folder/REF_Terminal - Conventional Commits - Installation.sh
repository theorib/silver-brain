# Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/

# install and start Husky with the following command
# It will:
# 1. Add prepare script to package.json
# 2. Create a sample pre-commit hook that you can edit (by default, npm test will run when you commit)
# 3. Configure Git hooks path

# PNPM
pnpx husky-init && pnpm i -D husky@latest && pnpm install
# NPM
npx husky-init && npm install
# Yarn
yarn dlx husky-init --yarn2 && yarn
# Bun
bunx husky-init && bun install


# set up Lint-Staged

# PNPM
pnpm add lint-staged -D
# NPM
npm install lint-staged --save-dev
# Yarn
yarn add lint-staged -D
# Bun
bun add lint-staged -D

# Add a lint-staged.config.mjs file using the terminal
echo -e "const config = {\n  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],\n  '**/*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck',\n  '**/*.{html,json,css,scss,md,mdx,js,jsx,ts,tsx}': ['prettier -w'],\n};\nexport default config;" > lint-staged.config.mjs

# set the pre-commit hook to run tests and Lint-Staged:
# This configuration tells Lint-Staged to run ESLint and Prettier
# on staged files with extension .js, .ts and .tsx and 
# Prettier on staged files with extension .md, and .json.

echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\npnpm lint-staged -v\npnpm vitest run" > .husky/pre-commit

# Make sure the pre-commit hook is executable
chmod +x .husky/pre-commit


# Install Commitlint

# PNPM
pnpm add @commitlint/{cli,config-conventional} -D
# NPM
npm install @commitlint/{cli,config-conventional} -D
# NPM Windows
npm install @commitlint/config-conventional @commitlint/cli -D
# Yarn
yarn add @commitlint/{cli,config-conventional} -D
# Bun
bun add @commitlint/cli @commitlint/config-conventional -D

# create a commitlint.config.mjs
echo 'const config={extends:["@commitlint/config-conventional"],parserPreset:"conventional-changelog-conventionalcommits",rules:{"type-enum":[2,"always",["feat","fix","docs","style","chore","refactor","ci","test","revert","perf","vercel"]],}};export default config;' > commitlint.config.mjs


# define the commit-msg hook to run Commitlint

echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nnpx --no -- commitlint --edit \$1" > .husky/commit-msg


# Make sure the commit-msg hook is executable
chmod +x .husky/commit-msg


# Install Commitizen
# the @commitlint/cz-commitlint is used to integrate Commitizen with Commitlint and
# to allow for configuration to be centralized in the commitlint.config.mjs file so it's the
# Only source of truth

# PNPM
pnpm add commitizen @commitlint/cz-commitlint inquirer -D
# NPM
npm install commitizen @commitlint/cz-commitlint inquirer -D 
# Yarn
yarn add commitizen @commitlint/cz-commitlint inquirer -D
# Bun
bun add commitizen @commitlint/cz-commitlint inquirer -D

# create a .czrc file with the commitizen configuration
echo '{\n  "path": "@commitlint/cz-commitlint"\n}' > .czrc


# Alternatively add the commitizen configuration in your package.json file
"config": {
  "commitizen": {
    "path": "@commitlint/cz-commitlint"
  }
}



# define the prepare-commit-msg hook to run Commitizen
echo "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nexec < /dev/tty && npx cz --hook || true" > .husky/prepare-commit-msg

# Make sure the prepare-commit-msg hook is executable
chmod +x .husky/prepare-commit-msg


# define post-merge to run install
# PNPM
# echo -e "pnpm install" > .husky/post-merge
echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\npnpm install" > .husky/post-merge
# NPM
# echo -e "npm install" > .husky/post-merge
echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nnpm install" > .husky/post-merge
# Yarn
# echo -e "yarn" > .husky/post-merge
echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nyarn" > .husky/post-merge
# Bun
echo -e "bun install" > .husky/post-merge
echo -e "#\!/usr/bin/env sh\n. \"\$(dirname -- \"\$0\")/_/husky.sh\"\n\nbun install" > .husky/post-merge

# Make sure the post-merge hook is executable
chmod +x .husky/post-merge


