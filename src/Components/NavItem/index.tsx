/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { Link, useRouteMatch } from 'react-router-dom'
import useStyle from '../../Hooks/useStyle'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 0 0;
  font-size: medium;
  text-decoration: none;
  background: transparent;
  color: black;
  transition-property: all;
  transition-duration: 150ms;

  &:last-child {
    margin: 0;
  }

  &:hover {
    color: ${theme.color.green['5']};
  }
`

const darkStyle = (theme: ThemeType) => css`
  color: white;

  &:hover {
    color: ${theme.color.green['2']};
  }
`

const matchLinkStyle = css`
  font-weight: 600;
`

interface Props {
  link: string
  matchLink?: string | string[]
  activeOnlyWhenExact?: boolean
}

const NavItem: FCEP<Props> = ({
  link,
  matchLink,
  activeOnlyWhenExact,
  children,
  className,
}) => {
  const cssStyle = useStyle(style, darkStyle)
  const match = useRouteMatch({
    path: matchLink || link,
    exact: activeOnlyWhenExact,
  })
  return (
    <Link
      to={link}
      css={[cssStyle, match && matchLinkStyle]}
      className={className}
    >
      {children}
    </Link>
  )
}

export default NavItem
