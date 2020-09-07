/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

import LogoSVG from './LogoSVG'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border: solid 0.1rem ${theme.color.gray['4']};
  border-radius: 9999px;
  transition-property: all;
  transition-duration: 150ms;
`

const darkStyle = () => css`
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border: none;
`

const Logo: FCEP = ({ className }) => (
  <div css={useStyle(style, darkStyle)} className={className}>
    <LogoSVG />
  </div>
)

export default Logo
