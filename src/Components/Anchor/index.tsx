/** @jsx jsx */
import { FCEP, HTMLProps } from 'react'
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import useStyle from '../../Hooks/useStyle'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  color: ${theme.color.pink['5']};

  &:hover {
    text-decoration: underline;
  }
`

const darkStyle = (theme: ThemeType) => css`
  color: ${theme.color.pink['2']};
`

interface Props extends HTMLProps<HTMLAnchorElement> {
  link?: string
}

const Anchor: FCEP<Props> = ({ link, children, className }) => (
  <Link to={link || '/'} css={useStyle(style, darkStyle)} className={className}>
    {children}
  </Link>
)

export default Anchor
