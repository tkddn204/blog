import Styled from 'styled-components'

const Button = Styled.button`
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.violet};
  padding-bottom: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.violetOpacity('0.1')};
  border-radius: 2px;
  transition: all 0.15s;

  :hover, :focus {
    border: 2px solid ${(props) => props.theme.colors.violetOpacity('0.4')};
  }
  
  :active {
    background-color: ${(props) => props.theme.colors.violetOpacity('0.2')};
  }
`

export default Button
