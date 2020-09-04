/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import Loading from '../../Components/Loading'
import { FetchState, Post } from '../../Types/firestore.schema'
import PostItem from './PostItem'
import Article from '../../Components/Article'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

interface Props extends DarkStyledProps {
  postList: Post[]
  fetchState: FetchState
}

const postItemLink = css`
  ${tw`w-full`}
`

const PostList: FC<Props> = ({
  postList,
  fetchState,
  addStyleType,
  customTheme,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)

  let Content = null
  switch (fetchState) {
    case FetchState.loaded:
      Content = postList.map((post: Post) => (
        <Link to={`/post/${post.id}`} css={postItemLink}>
          <PostItem key={post.id} post={post} />
        </Link>
      ))
      break
    case FetchState.empty:
      Content = '텅 비었음'
      break
    default:
      Content = <Loading />
  }

  return <Article css={darkStyle}>{Content}</Article>
}

export default PostList
