/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'

import NavList from '../../Components/NavList'
import NavItem from '../../Components/NavItem'
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
      <NavItem key="nav-about" link="/about">
        About
      </NavItem>
      <NavItem key="nav-blog" link="/" activeOnlyWhenExact>
        Blog
      </NavItem>
    </NavList>
    <Divider />
    <ToggleDark />
  </div>
)

export default RightHeader
