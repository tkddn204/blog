// eslint-disable-next-line import/no-extraneous-dependencies
import { SerializedStyles } from '@emotion/css'
import { css, TwStyle } from 'twin.macro'

export interface DarkStyleType extends TwStyle {
  light: TwStyle | string
  dark: TwStyle | string
  default: TwStyle | string
  defaultDark: TwStyle | string
}

export interface DarkStyledProps {
  isDark?: boolean
  addStyleType?: string
}
interface DarkStyledType {
  (style: DarkStyleType): (CombineProps: DarkStyledProps) => SerializedStyles
}

const DarkStyled: DarkStyledType = (style: DarkStyleType) => {
  return ({ isDark, addStyleType }) => {
    const notThemed = isDark !== undefined
    let theme = null
    if (notThemed) theme = isDark ? style.dark : style.light

    return css`
      ${theme} ${style.default} ${style.defaultDark}
      ${addStyleType
        ? style[addStyleType] || ''
        : ''}
    `
  }
}

export default DarkStyled
