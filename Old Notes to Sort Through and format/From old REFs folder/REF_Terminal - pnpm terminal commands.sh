# "scripts": {
#   "preinstall": "npx only-allow pnpm", 
#   ...
# }

# Initialise a new project
pnpm init

# Installing all dependencies
pnpm install

# Update dependencies
pnpm update

# Run a script
pnpm run script-name

# Add a development dependency
pnpm add -D dependency-name

# Remove a dependency
pnpm remove dependency-name

# Check for outdated dependencies
pnpm outdated

# List installed packages
pnpm list

# Clean cache
pnpm cache clean

# Npx alternative
pnpm dlx command-name

# Check for duplicate dependencies
pnpm dedupe --check

# Remove duplicate dependencies
pnpm dedupe

# Rebuild all packages
pnpm rebuild

# Audit dependencies for vulnerabilities
pnpm audit

# Update all packeges to latest version with interactive interface
pnpm up --interactive --latest 

# Check for unused dependencies while ignoring specific packages
pnpm dlx depcheck
# Check for unused dependencies while ignoring specific packages
pnpm dlx depcheck --ignores="@types/*"

