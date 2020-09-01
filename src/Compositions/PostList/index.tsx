/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import { RootState } from '../../Application/Store'
import Loading from '../../Components/Loading'

const query = () => [{ collection: 'post', limitTo: 10 }]
const selector = ({ firestore }: RootState) => firestore.ordered.post

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const postListStyle = tw`
  flex flex-col items-center justify-center
  bg-transparent
`

export type ContentState = 'loading' | 'loaded' | 'empty'

interface Props extends DarkStyledProps {
  content?: ContentState
}

const EmptyElement = <article>텅 비었음</article>
const LoadedElement = (postList: Array<string>) => (
  <article>
    {postList.map((post: string) => (
      <div key={post}>{post}</div>
    ))}
  </article>
)
const LoadingElement = <Loading />

const PostList: FC<Props> = ({ content, addStyleType, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  useFirestoreConnect(query)
  const postList = useSelector(selector)

  let Content = null
  if (!content) {
    // 파이어스토어 이용
    Content = !isLoaded(postList)
      ? LoadingElement
      : (Content = isEmpty(postList) ? EmptyElement : LoadedElement(postList))
  } else {
    // 테스트용
    const dummyList = ['포스트1', '포스트2', '포스트3']
    Content =
      content === 'loaded'
        ? LoadedElement(dummyList)
        : (Content = content === 'empty' ? EmptyElement : LoadingElement)
  }

  return <section css={[postListStyle, darkStyle]}>{Content}</section>
}

export default PostList
