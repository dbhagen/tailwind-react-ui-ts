// import { addDecorator } from '@storybook/react'
// import { withA11y } from '@storybook/addon-a11y'

// addDecorator(withA11y)

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
    '@storybook/addon-a11y'
  ]
}
