// eslint-disable-next-line import/no-extraneous-dependencies
import { SerializedStyles } from '@emotion/css'
import { css } from '@emotion/core'
import { useSelector } from 'react-redux'
import { useTheme } from 'emotion-theming'
import { themeSelector } from '../Features/Selectors'
import { ThemeType } from '../Types/theme'

export type ThemedStyles = (theme: ThemeType) => SerializedStyles
interface StyledType {
  (
    style: ThemedStyles,
    darkStyle?: ThemedStyles,
    custom?: ThemedStyles[]
  ): SerializedStyles
}

const useStyle: StyledType = (style, darkStyle, custom?) => {
  const themeState = useSelector(themeSelector)
  const theme = useTheme<ThemeType>()

  const styleWithTheme = style(theme)
  const customStyleWithTheme =
    custom && custom.map((c: ThemedStyles) => c(theme))
  const darkStyleWithTheme =
    themeState === 'dark' && darkStyle && darkStyle(theme)

  return css`
    ${styleWithTheme};
    ${customStyleWithTheme};
    ${darkStyleWithTheme};
    @media (prefers-color-scheme: dark) {
      ${darkStyleWithTheme}
    }
  `
}

export default useStyle
