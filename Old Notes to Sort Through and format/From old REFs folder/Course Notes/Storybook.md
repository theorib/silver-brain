# Storybook

Adding support for path aliases defined in `tsconfig.json` [check the Documentation Link](https://storybook.js.org/docs/builders/webpack#typescript-modules-are-not-resolved-within-storybook).

First we need to install `tsconfig-paths-webpack-plugin`:

`npm i -D tsconfig-paths-webpack-plugin@latest`

Then we need to edit our `.storybook/main.ts`:

```typeScript
import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {

  // ... rest of your config file
  
  //** The following code allows storybook to resolve paths in the same way that Next.js does with tsconfig.json
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};
export default config;
```

