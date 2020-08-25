import { create } from '@storybook/theming'

export const LightTheme = {
  colors: {
    anchor: 'pink',
    violet: 'rgb(112, 76, 182)',
    violetOpacity: (opacity: string) => `rgb(112, 76, 182, ${opacity})`,
  },
}

export const blackTheme = {
  colors: {
    anchor: 'pink',
    violet: 'rgb(112, 76, 182)',
    violetOpacity: (opacity: string) => `rgb(112, 76, 182, ${opacity})`,
  },
}

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: '라페 블로그',
  brandUrl: 'https://tkddn204.github.io/blog',
  brandImage: 'url',
})
