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

const EmptyElement = '텅 비었음'
const LoadedElement = (postList: Post[]) =>
  postList.map((post: Post) => <PostItem key={post.id} post={post} />)
const LoadingElement = <Loading />

interface Props extends DarkStyledProps {
  postList: Post[]
  fetchState: FetchState
  testFetchState?: FetchState
}

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
      Content = LoadedElement(postList)
      break
    case FetchState.empty:
      Content = EmptyElement
      break
    default:
      Content = LoadingElement
  }

  return (
    <section css={[postListStyle, darkStyle]}>
      <article>{Content}</article>
    </section>
  )
}

export default PostList
