const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-next-router'],
  webpackFinal: async (config) => {
    // typescriptのパス解決に使用する
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };

    return {
      ...config,
      node: {
        ...config.node,
        fs: 'empty', // fix
      },
    };
  },
};
