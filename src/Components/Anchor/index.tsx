import Styled from 'styled-components'

const Anchor = Styled.a`
  color: ${(props) => props.color || props.theme.colors.anchor};
`

export default Anchor
