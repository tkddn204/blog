/** @jsx jsx */
import { FC, MouseEvent } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`bg-black text-white active:bg-pink-600`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:active:bg-pink-600
  `,
  circle: tw`
    rounded-full
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

interface Props extends DarkStyledProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<Props> = ({
  addStyleType,
  children,
  customTheme,
  onClick,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return (
    <button type="button" css={[buttonStyle, darkStyle]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
