/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, { DarkStyledProps, StyleType } from '../useDarkStyle'

const style: StyleType = {
  light: tw`bg-white text-black active:bg-blue-400`,
  dark: tw`bg-black text-white active:bg-pink-400`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:active:bg-pink-400
  `,
}

const buttonStyle = tw`bg-white
    text-black
    text-base
    px-5 pb-2
    border border-solid border-transparent
    outline-none
    cursor-pointer
    rounded-sm
    transition-all duration-150
    hover:(border border-solid shadow)
    active:bg-blue-400`

type Props = DarkStyledProps

const Button: FC<Props> = ({ addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return (
    <button type="button" css={[buttonStyle, darkStyle]}>
      {children}
    </button>
  )
}

export default Button
