import tw, { styled } from 'twin.macro'
import DarkStyled, { DarkStyledProps, DarkStyleType } from '../DarkStyled'

const style: DarkStyleType = {
  default: tw``,
  light: tw`text-pink-400`,
  dark: tw`text-indigo-400`,
  defaultDark: tw`dark:text-indigo-400`,
}

const Anchor = styled.a<DarkStyledProps>(DarkStyled(style))
export default Anchor
