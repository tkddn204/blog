/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, { DarkStyledProps, StyleType } from '../useDarkStyle'

import LogoSVG from './LogoSVG'

const style: StyleType = {
  light: tw`bg-white text-black border-gray-400`,
  dark: tw`bg-black text-white border-gray-400`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:border-gray-400
  `,
}

const LogoContainerStyle = tw`
    flex items-center justify-center
    bg-white
    text-black
    w-12 h-12
    p-2
    rounded-full
    border border-gray-400
    transition-all duration-150
  `

type Props = DarkStyledProps

const Logo: FC<Props> = ({ addStyleType, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return (
    <div css={[LogoContainerStyle, darkStyle]}>
      <LogoSVG />
    </div>
  )
}

export default Logo
