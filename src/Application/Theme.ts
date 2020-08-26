import { create, ThemeVars } from '@storybook/theming'

type BaseType = 'light' | 'dark'
type BaseThemeType = (base: BaseType) => ThemeVars
interface RestThemeType {
  colors: {
    anchor: string
    button: string
  }
  backgrounds: {
    default: string
  }
}
export type ThemeType = ThemeVars & RestThemeType

const baseTheme: BaseThemeType = (base) => ({
  base,

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

const lightRestTheme: RestThemeType = {
  colors: {
    anchor: 'hotpink',
    button: 'black',
  },
  backgrounds: {
    default: 'white',
  },
}

const darkRestTheme: RestThemeType = {
  colors: {
    anchor: 'blue',
    button: 'white',
  },
  backgrounds: {
    default: 'black',
  },
}

export const LightTheme = create(
  baseTheme('light'),
  lightRestTheme
) as ThemeType
export const DarkTheme = create(baseTheme('dark'), darkRestTheme) as ThemeType
