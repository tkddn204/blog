/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`text-gray-600`,
  defaultDark: tw`
    dark:text-gray-600
  `,
}

const headerStyle = tw`
  flex items-center justify-center
  w-full
  my-5
  bg-transparent
  text-sm
  text-gray-400
  transition-all duration-150
`

type Props = DarkStyledProps

const Footer: FC<Props> = ({ addStyleType, children, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return <footer css={[headerStyle, darkStyle]}>{children}</footer>
}

export default Footer
