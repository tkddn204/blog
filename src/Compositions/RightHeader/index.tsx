/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { css, jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

import NavList from '../NavList'
import Nav from '../../Components/Nav'
import ToggleDark from '../../Components/ToggleDark'
import Divider from '../../Components/Divider'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const rightHeaderStyle = css`
  ${tw`
    flex flex-row
  `}
  & > * {
    margin-left: 1rem;
  }
`

type Props = DarkStyledProps

const RightHeader: FC<Props> = ({ addStyleType, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return (
    <div css={[rightHeaderStyle, darkStyle]}>
      <NavList>
        <Nav key="nav-about" link="/about">
          About
        </Nav>
        <Nav key="nav-blog" link="/">
          Blog
        </Nav>
      </NavList>
      <Divider />
      <ToggleDark />
    </div>
  )
}

export default RightHeader
