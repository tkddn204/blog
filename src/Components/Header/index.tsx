/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`bg-black bg-opacity-75`,
  defaultDark: tw`
    dark:bg-black dark:bg-opacity-75
  `,
}

const headerStyle = tw`
  flex items-center justify-between
  relative
  h-16
  px-5 mt-5 mx-10
  bg-gray-200 bg-opacity-25
  rounded-full
  shadow
  transition-all duration-150
`

type Props = DarkStyledProps

const Header: FC<Props> = ({ addStyleType, children, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return <header css={[headerStyle, darkStyle]}>{children}</header>
}

export default Header
