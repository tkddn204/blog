/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

const navListStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`

const NavList: FCEP = ({ children, className }) => (
  <nav css={useStyle(navListStyle)} className={className}>
    {children}
  </nav>
)

export default NavList
