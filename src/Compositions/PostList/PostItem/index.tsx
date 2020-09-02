/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx, css } from '@emotion/core'
import moment from 'moment'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../../Hooks/useDarkStyle'
import { Post } from '../../../Types/firestore.schema'

const style: DarkStyleType = {
  dark: tw`
    text-white
    hover:text-green-500`,
  defaultDark: tw`
    dark:text-white
    dark:hover:text-green-500
  `,
}

const postItemStyle = css`
  ${tw`
    flex flex-col
    bg-transparent
    text-black
    text-base
    mx-10 my-3 p-3
    hover:(bg-gray-300 bg-opacity-25)
    cursor-pointer
    first:mt-0 last:mb-0
    transition-all duration-300
  `}
`

const postTitleStyle = tw`
  text-2xl
`

const postDateStyle = tw`
  text-sm text-gray-500
`

interface Props extends DarkStyledProps {
  post: Post
}

const PostItem: FC<Props> = ({ post, addStyleType, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)

  return (
    <div css={[postItemStyle, darkStyle]}>
      <h3 css={postTitleStyle}>{post.title}</h3>
      <h4 css={postDateStyle}>
        {moment(post.createdDate).format('YYYY. M. D.')}
      </h4>
      <p>{post.summary}</p>
    </div>
  )
}

export default PostItem
