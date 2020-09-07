/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.25rem 0 1.25rem 0;
  background: transparent;
  font-size: small;
  color: ${theme.color.gray['4']};
  transition-property: all;
  transition-duration: 150ms;
`

const darkStyle = (theme: ThemeType) => css`
  color: ${theme.color.gray['6']};
`

const Footer: FCEP = ({ children }) => (
  <footer css={useStyle(style, darkStyle)}>{children}</footer>
)

export default Footer
