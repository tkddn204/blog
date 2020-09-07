/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 4rem;
  padding: 0 1.25rem 0 1.25rem;
  margin: 1.25rem 2.5rem 0 2.5rem;
  background: ${theme.color.gray['2']}40;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition-property: all;
  transition-duration: 150ms;
`

const darkStyle = () => css`
  background: rgba(0, 0, 0, 0.75);
`
const Header: FCEP = ({ children, className }) => (
  <header css={useStyle(style, darkStyle)} className={className}>
    {children}
  </header>
)

export default Header
