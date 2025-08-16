# To fix false positive of eslint(no-unused-vars) in Next.js when using typescript:
# Install a compatible version of @typescript-eslint/eslint-plugin (currenly compatible with NextJS is 5.60.1)
npm i -D @typescript-eslint/eslint-plugin@5.60.1

# Also recommended the eslint-config-prettier plugin to turns off all rules that are unnecessary or might conflict with Prettier.
npm i -D prettier eslint-config-prettier

# Then reffer to the .eslintrc.json for the rules you need to add
