/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const navListStyle = tw`
  flex items-center justify-center
  bg-transparent
`

type Props = DarkStyledProps

const NavList: FC<Props> = ({ addStyleType, children, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return <nav css={[navListStyle, darkStyle]}>{children}</nav>
}

export default NavList
