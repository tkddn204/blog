/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  StyleType,
} from '../../Components/useDarkStyle'

const style: StyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const navListStyle = tw`
  flex items-center justify-center
  bg-transparent
`

type Props = DarkStyledProps

const NavList: FC<Props> = ({ addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return <nav css={[navListStyle, darkStyle]}>{children}</nav>
}

export default NavList
