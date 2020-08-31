// eslint-disable-next-line import/no-extraneous-dependencies
import { SerializedStyles } from '@emotion/css'
import { css, TwStyle } from 'twin.macro'
import { useSelector } from 'react-redux'
import { themeSelector } from '../../Features/Selectors'

export interface StyleType extends TwStyle {
  light: TwStyle | string
  dark: TwStyle | string
  defaultDark: TwStyle | string
}

export interface DarkStyledProps {
  custom?: SerializedStyles
  addStyleType?: string[]
}

interface DarkStyledType {
  (
    style: StyleType,
    addStyleType?: string[],
    custom?: SerializedStyles
  ): SerializedStyles
}

const useDarkStyle: DarkStyledType = (style, addStyleType?, custom?) => {
  const theme = useSelector(themeSelector)
  let themeStyle
  if (theme !== 'default') {
    themeStyle = theme === 'dark' ? style.dark : style.light
  } else {
    themeStyle = custom
  }

  const addStyles =
    !!addStyleType &&
    addStyleType
      .map((styleType) => {
        if (!style[styleType]) {
          throw new Error(`style '${styleType}' not specified`)
        }
        return style[styleType]
      })
      .join(' ')

  return css`
    ${themeStyle} ${addStyles} ${style.defaultDark};
  `
}

export default useDarkStyle
