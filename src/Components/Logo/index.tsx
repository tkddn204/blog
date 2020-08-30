import React, { FC } from 'react'
import tw, { styled } from 'twin.macro'
import DarkStyled, { DarkStyledProps, DarkStyleType } from '../DarkStyled'

import LogoSVG from './LogoSVG'

const style: DarkStyleType = {
  default: tw`
    flex items-center justify-center
    bg-white
    text-black
    w-12 h-12
    p-2
    rounded-full
    border border-gray-400
  `,
  light: tw`bg-white text-black border-gray-400`,
  dark: tw`bg-black text-white border-gray-400`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:border-gray-400
  `,
}
const LogoContainer = styled.div<DarkStyledProps>(DarkStyled(style))

const Logo: FC = () => (
  <LogoContainer>
    <LogoSVG />
  </LogoContainer>
)

export default Logo
