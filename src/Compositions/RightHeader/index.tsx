/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'

import NavList from '../../Components/NavList'
import Nav from '../../Components/NavItem'
import ToggleDark from '../../Components/ToggleDark'
import Divider from '../../Components/Divider'

const rightHeaderStyle = css`
  display: flex;
  flex-direction: row;

  & > * {
    margin-left: 1rem;
  }
`

const RightHeader: FCEP = ({ className }) => (
  <div css={rightHeaderStyle} className={className}>
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

export default RightHeader
