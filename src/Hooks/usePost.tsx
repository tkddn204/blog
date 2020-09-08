import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FetchState, Post, PostContent } from '../Types/firestore.schema'
import { getPostThunk } from '../Features/post/postThunk'
import { PostSelector } from '../Features/Selectors'

type PostReturnType = [Post, PostContent, FetchState]
type PostFunctionReturnType = (postId: string) => PostReturnType

const usePost: PostFunctionReturnType = (postId: string) => {
  const dispatch = useDispatch()
  const postState = useSelector(PostSelector)
  useEffect(() => {
    dispatch(getPostThunk({ postId }))
  }, [dispatch, postId])

  let fetchState: FetchState
  if (postState.loading === 'idle') {
    fetchState =
      postState.postData.post && postState.postData.postContent
        ? FetchState.loaded
        : FetchState.empty
  } else {
    fetchState = FetchState.loading
  }

  const { post } = postState.postData
  const { postContent } = postState.postData
  return [post, postContent, fetchState] as PostReturnType
}

export default usePost
