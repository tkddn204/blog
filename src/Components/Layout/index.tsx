/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

const style = () => css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: white;
`

const darkStyle = () => css`
  background: rgba(0, 0, 0, 0.75);
`

const Layout: FCEP = ({ children, className }) => (
  <div css={useStyle(style, darkStyle)} className={className}>
    {children}
  </div>
)

export default Layout
