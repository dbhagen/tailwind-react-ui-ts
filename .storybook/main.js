module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      }
    },
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-a11y',
      options: {

      }
    }
  ]
}
