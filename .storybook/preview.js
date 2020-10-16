import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '../styles/tailwind.css'

addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
