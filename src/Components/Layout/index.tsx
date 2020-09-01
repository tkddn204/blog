/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`
    bg-black bg-opacity-75
  `,
  defaultDark: tw`
    dark:bg-black dark:bg-opacity-75
  `,
}

const LayoutStyle = tw`
  flex flex-col
  min-h-screen
  bg-white
`

type Props = DarkStyledProps

const Layout: FC<Props> = ({ addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return <div css={[LayoutStyle, darkStyle]}>{children}</div>
}

export default Layout
