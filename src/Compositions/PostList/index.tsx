/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { css, jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import Loading from '../../Components/Loading'
import { FetchState, Post } from '../../Types/firestore.schema'
import PostItem from './PostItem'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const postListStyle = css`
  ${tw`
    flex flex-col items-center justify-center
    bg-transparent
  `}
`

const EmptyElement = <article>텅 비었음</article>
const LoadedElement = (postList: Post[]) => (
  <article>
    {postList.map((post: Post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </article>
)
const LoadingElement = <Loading key="loading" />

interface Props extends DarkStyledProps {
  postList: Post[]
  fetchState: FetchState
  testFetchState?: FetchState
}

const PostList: FC<Props> = ({
  postList,
  fetchState,
  addStyleType,
  custom,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)

  let Content = null
  switch (fetchState) {
    case FetchState.loaded:
      Content = LoadedElement(postList)
      break
    case FetchState.empty:
      Content = EmptyElement
      break
    default:
      Content = LoadingElement
  }

  return <section css={[postListStyle, darkStyle]}>{Content}</section>
}

export default PostList
