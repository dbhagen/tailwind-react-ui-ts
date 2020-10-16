import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '../styles/tailwind.css'
import { withThemePlayground } from 'storybook-addon-theme-playground';

import { theme } from '../tailwind.config';

export const decorators = [
  withThemePlayground({
    theme,
    provider: ThemeProvider,
  }),
];

addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
