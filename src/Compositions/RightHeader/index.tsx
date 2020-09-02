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

const style: DarkStyleType = {
  dark: tw`bg-white bg-opacity-75`,
  defaultDark: tw`dark:bg-white dark:bg-opacity-75`,
}

const divideStyle = css`
  ${tw`bg-black bg-opacity-25`}
  ${{ width: '0.5px' }}
`

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
    <div css={rightHeaderStyle}>
      <NavList>
        <Nav key="nav-about" link="/about">
          About
        </Nav>
        <Nav key="nav-blog" link="/blog">
          Blog
        </Nav>
      </NavList>
      <div css={[divideStyle, darkStyle]} />
      <ToggleDark />
    </div>
  )
}

export default RightHeader
