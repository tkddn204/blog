import Styled from '@emotion/styled'
import { ThemeType } from '../../Application/Theme'

export interface ButtonProps {
  color?: string
  theme: ThemeType
}
const Button = Styled('button')<ButtonProps>`
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.button};
  padding-bottom: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 2px;
  transition: all 0.15s;

  :hover, :focus {
    border: 2px solid ${(props) => props.theme.colors.button};
  }
  
  :active {
    background-color: ${(props) => props.theme.colors.button};
  }
`

export default Button
