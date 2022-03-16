module.exports = {
  stories: ['../src/**/*.stories.*'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  typescript: { reactDocgen: false },
  core: {
    builder: 'webpack5',
  },
}
