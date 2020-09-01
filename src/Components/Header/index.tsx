/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  light: tw`bg-gray-200 bg-opacity-25`,
  dark: tw`bg-black bg-opacity-75`,
  defaultDark: tw`
    dark:bg-black dark:bg-opacity-75
  `,
}

const headerStyle = tw`
  flex items-center justify-between
  h-16
  px-5 mt-2
  bg-gray-200 bg-opacity-25
  rounded-full
  shadow
  transition-all duration-150
`

type Props = DarkStyledProps

const Header: FC<Props> = ({ addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return <header css={[headerStyle, darkStyle]}>{children}</header>
}

export default Header
