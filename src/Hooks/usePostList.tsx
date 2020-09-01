import { useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { FetchState, Post } from '../Types/firestore.schema'
import { RootState } from '../Application/Store'

const query = () => [{ collection: 'post', limitTo: 10 }]
const selector = ({ firestore }: RootState) => firestore.ordered.post

type PostListReturnType = [Post[], FetchState]
type PostListFunctionReturnType = () => PostListReturnType

const usePostList: PostListFunctionReturnType = () => {
  useFirestoreConnect(query)
  const postList = useSelector(selector)

  let fetchState: FetchState
  if (isLoaded(postList)) {
    if (isEmpty(postList)) {
      fetchState = FetchState.empty
    } else {
      fetchState = FetchState.loaded
    }
  } else {
    fetchState = FetchState.loading
  }

  return [postList, fetchState] as PostListReturnType
}

export default usePostList
