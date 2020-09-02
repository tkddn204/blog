/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

import LogoSVG from './LogoSVG'

const style: DarkStyleType = {
  dark: tw`bg-black bg-opacity-75 text-white border-none`,
  defaultDark: tw`
    dark:bg-black
    dark:bg-opacity-75
    dark:text-white
    dark:border-none
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

const Logo: FC<Props> = ({ addStyleType, customTheme, className }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)

  return (
    <div css={[LogoContainerStyle, darkStyle]} className={className}>
      <LogoSVG />
    </div>
  )
}

export default Logo
