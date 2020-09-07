/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'

const style = () => css`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 1.25rem 0 1.25rem 0;
`

const darkStyle = () => css`
  color: rgba(255, 255, 255, 0.9);
`

const Article: FCEP = ({ children, className }) => {
  return (
    <article css={useStyle(style, darkStyle)} className={className}>
      {children}
    </article>
  )
}

export default Article
