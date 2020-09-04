/** @jsx jsx */
import { FC } from 'react'
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

const articleStyle = tw`
  flex flex-col
  my-5
`

type Props = DarkStyledProps

const Article: FC<Props> = ({
  addStyleType,
  children,
  customTheme,
  className,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return (
    <article className={className} css={[articleStyle, darkStyle]}>
      {children}
    </article>
  )
}

export default Article
