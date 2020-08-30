import tw, { styled } from 'twin.macro'
import DarkStyled, { DarkStyledProps, DarkStyleType } from '../DarkStyled'

const style: DarkStyleType = {
  default: tw`bg-white
    text-black
    text-base
    px-5 pb-2
    border border-solid border-transparent
    outline-none
    cursor-pointer
    rounded-sm
    transition-all duration-150
    hover:(border border-solid shadow)
    active:bg-blue-400`,
  light: tw`bg-white text-black active:bg-blue-400`,
  dark: tw`bg-black text-white active:bg-pink-400`,
  defaultDark: tw`
    dark:bg-black
    dark:text-white
    dark:active:bg-pink-400
  `,
}

const Button = styled.button<DarkStyledProps>(DarkStyled(style))
export default Button
