/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  StyleType,
} from '../../Hooks/useDarkStyle'

const style: StyleType = {
  dark: tw`bg-black text-white active:bg-pink-600`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:active:bg-pink-600
  `,
}

const buttonStyle = tw`
    inline-flex items-center justify-center
    align-middle
    bg-white
    text-black
    text-base
    px-5 py-1
    border border-solid border-gray-300
    outline-none
    cursor-pointer
    rounded-sm
    transition-all duration-150
    hover:(border border-solid shadow)
    focus:outline-none
    active:bg-blue-200`

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
