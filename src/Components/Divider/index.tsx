/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

const style = () => css`
  background: rgba(0, 0, 0, 0.25);
  height: 24px;
  width: 0.5px;
`

const darkStyle = () => css`
  background: rgba(255, 255, 255, 0.75);
`

const Divider: FCEP = ({ className }) => (
  <div css={useStyle(style, darkStyle)} className={className} />
)

export default Divider
