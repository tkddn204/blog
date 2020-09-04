import { useSelector } from 'react-redux'
import {
  isEmpty,
  isLoaded,
  ReduxFirestoreQuerySetting,
  useFirestoreConnect,
} from 'react-redux-firebase'
import { FetchState, Post, PostContent } from '../Types/firestore.schema'
import { RootState } from '../Application/Store'

type PostQueryType = (postId: string) => ReduxFirestoreQuerySetting[]
const postQuery: PostQueryType = (postId: string) => {
  return [
    { collection: 'post', doc: postId },
    {
      collection: 'postContent',
      where: ['postId', '==', postId],
    },
  ]
}

const selector = ({ firestore }: RootState) => {
  const { data } = firestore
  let post = {}
  let postContent = {}

  if (data && Object.keys(data).length !== 0) {
    if (data.post && Object.keys(data.post).length !== 0) {
      post = data.post[Object.keys(data.post)[0]]
    }

    if (data.postContent && Object.keys(data.postContent).length !== 0) {
      postContent = data.postContent[Object.keys(data.postContent)[0]]
    }
  }
  return { post, postContent }
}

type PostReturnType = [Post, PostContent, FetchState]
type PostFunctionReturnType = (postId: string) => PostReturnType

const usePostList: PostFunctionReturnType = (postId: string) => {
  useFirestoreConnect(postQuery(postId))
  const { post, postContent } = useSelector(selector)

  let fetchState: FetchState
  if (isLoaded(post)) {
    if (isEmpty(post)) {
      fetchState = FetchState.empty
    } else {
      fetchState = FetchState.loaded
    }
  } else {
    fetchState = FetchState.loading
  }

  return [post, postContent, fetchState] as PostReturnType
}

export default usePostList
