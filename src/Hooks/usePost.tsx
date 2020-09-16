import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FetchState } from '../Types/firestoreSchema'
import { getPostThunk } from '../Features/post/postThunk'
import { PostSelector } from '../Features/Selectors'
import { PostState } from '../Features/post/postSlice'

type PostReturnType = PostState & { fetchState: FetchState }
type PostFunctionReturnType = (postId: string) => PostReturnType

const usePost: PostFunctionReturnType = (postId: string) => {
  const dispatch = useDispatch()
  const postState = useSelector(PostSelector)
  useEffect(() => {
    if (postId) {
      dispatch(getPostThunk({ postId }))
    }
  }, [dispatch, postId])

  let fetchState: FetchState
  if (postState.loading === 'idle') {
    fetchState =
      postState.postData.post && postState.postData.postContent
        ? FetchState.loaded
        : FetchState.empty
  } else if (postState.error) {
    fetchState = FetchState.error
  } else {
    fetchState = FetchState.loading
  }

  return { ...postState, fetchState }
}

export default usePost
