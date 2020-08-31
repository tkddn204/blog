/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, { DarkStyledProps, StyleType } from '../useDarkStyle'

const style: StyleType = {
  light: tw`text-pink-400`,
  dark: tw`text-indigo-400`,
  defaultDark: tw`dark:text-indigo-400`,
}

interface Props extends DarkStyledProps {
  href?: string
}

const Anchor: FC<Props> = ({ href, addStyleType, children, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return (
    <a href={href} css={darkStyle}>
      {children}
    </a>
  )
}

export default Anchor
