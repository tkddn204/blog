import Styled from 'styled-components'

const Header = Styled.header`
  font-size: 32px;
  outline: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.black};
  padding-bottom: 4px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.15s;
`

export default Header
