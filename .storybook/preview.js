import { defineCustomElements } from '../dist/esm/loader';
import * as Docblock from "@storybook/blocks"
import { themes } from '@storybook/theming';
import "./storybook.css";
defineCustomElements();

export const parameters = {
  options:{
    storySort:{
    // method: "alphabetical",  sorting side bar in alphabetical order
      order:["Pages","*"]
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    autodocs: 'tag',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  }
    // docs: {
    //   theme: themes.dark,
    // },
};