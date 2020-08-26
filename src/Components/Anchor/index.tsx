import Styled from '@emotion/styled'
import { ReactNode } from 'react'
import { ThemeType } from '../../Application/Theme'

export interface AnchorProps {
  children: ReactNode
  theme: ThemeType
}
const Anchor = Styled('a')<AnchorProps>`
  color: ${(props) => props.theme.colors.anchor};
`

export default Anchor
