// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
  position: 'center',
  // //
  // colorPrimary: '#3A10E5',
  // colorSecondary: '#ffffff',

  // // UI
  // appBg: '#585C6D',  //chnages side bar color
  // appContentBg: '#212121',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#ffffff',

  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#ffffff',

  // // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});