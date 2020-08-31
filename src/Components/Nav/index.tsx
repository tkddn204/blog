/** @jsx jsx */
import { FC } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, { DarkStyledProps, StyleType } from '../useDarkStyle'

const style: StyleType = {
  dark: tw`text-white hover:text-green-500`,
  defaultDark: tw`
    dark:text-white dark:bg-black
  `,
}

const navStyle = tw`
  flex items-center justify-center
  mr-4
  text-black
  text-base
  hover:text-green-500
  transition-all duration-150
`
const matchLinkStyle = tw`
  font-semibold text-green-500
`

interface Props extends DarkStyledProps {
  link: string
}

const Nav: FC<Props> = ({ link, addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  const match = useRouteMatch(link)
  return (
    <Link to={link} css={[navStyle, darkStyle, match && matchLinkStyle]}>
      {children}
    </Link>
  )
}

export default Nav
