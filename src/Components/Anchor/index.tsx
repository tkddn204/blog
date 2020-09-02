/** @jsx jsx */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`
    text-pink-200
    visited:text-indigo-200
  `,
  defaultDark: tw`
    dark:text-pink-200
    dark:visited:text-indigo-200
  `,
}

const AnchorStyle = tw(Link)`
  text-pink-500
  hover:underline
  visited:text-indigo-500
`

interface Props extends DarkStyledProps {
  link?: string
}

const Anchor: FC<Props> = ({ link, addStyleType, children, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return (
    <AnchorStyle to={link || '/'} css={darkStyle}>
      {children}
    </AnchorStyle>
  )
}

export default Anchor
