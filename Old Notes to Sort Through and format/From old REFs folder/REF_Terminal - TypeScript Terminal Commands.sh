# install typescript globally
npm i typescript -g

# install ts-node globally
npm i ts-node -g

# create a new typescript project
tsc --init

# compile the typescript file
tsc myFileName.ts

# compile all typescript files in the project as defined in the tsconfig.json file
tsc

# compile the typescript file and watch for changes to recompile
tsc -w myFileName.ts
tsc --watch myFileName.ts

# compile all typescript files in the project as defined in the tsconfig.json file and watch for changes to recompile
tsc -w

# compile the typescript file and run it
ts-node myFileName.ts