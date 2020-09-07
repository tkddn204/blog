/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

const style = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.75rem 0 0.75rem 0;
  background: transparent;
`

const Section: FCEP = ({ children, className }) => (
  <section css={useStyle(style)} className={className}>
    {children}
  </section>
)

export default Section
