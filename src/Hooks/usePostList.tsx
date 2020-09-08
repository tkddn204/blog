import { useSelector } from 'react-redux'
import {
  isEmpty,
  isLoaded,
  ReduxFirestoreQuerySetting,
  useFirestoreConnect,
} from 'react-redux-firebase'
import { FetchState, Post } from '../Types/firestore.schema'
import { RootState } from '../Application/Store'

const query = (startAt = 0): ReduxFirestoreQuerySetting => ({
  collection: 'post',
  limit: 10,
  orderBy: ['createdDate', 'desc'],
  startAt,
})
const selector = ({ firestore }: RootState) => firestore.ordered.post

type PostListReturnType = [Post[], FetchState]
type PostListFunctionReturnType = (startAt?: number) => PostListReturnType

const usePostList: PostListFunctionReturnType = (startAt = 0) => {
  useFirestoreConnect(query(startAt))
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
