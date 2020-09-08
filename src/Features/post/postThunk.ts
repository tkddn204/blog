import moment from 'moment'
import firebase, { FirebaseError } from 'firebase/app'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post, PostContent } from '../../Types/firestore.schema'

interface FirebaseThunkApiConfig {
  rejectValue: FirebaseError
}

export type PostFetchReturnState = 'success' | 'FailPostContent'

export interface PostDataType {
  post: Post
  postContent: PostContent
}

interface GetPostArgs {
  postId: string
}

export const getPostThunk = createAsyncThunk<
  PostDataType,
  GetPostArgs,
  FirebaseThunkApiConfig
>('post/get', async ({ postId }: GetPostArgs, { rejectWithValue }) => {
  const firestore = firebase.firestore()
  try {
    const post = await firestore.collection('post').doc(postId).get()
    const postContent = await firestore
      .collection('postContent')
      .where('postId', '==', postId)
      .get()
    const resPost = post.data() as Post
    const resPostContent = postContent.docs[0].data() as PostContent

    return { post: resPost, postContent: resPostContent }
  } catch (error) {
    // console.error(error)
    return rejectWithValue(error)
  }
})

interface AddPostArgs {
  newPost: Partial<Post>
  postContent: string
}

export const addPostThunk = createAsyncThunk<
  PostFetchReturnState,
  AddPostArgs,
  FirebaseThunkApiConfig
>(
  'post/add',
  async ({ newPost, postContent }: AddPostArgs, { rejectWithValue }) => {
    const firestore = firebase.firestore()
    try {
      // Post
      const newPostRef = firestore.collection('post').doc()
      const { id: postId } = newPostRef
      const now = moment.now()
      await newPostRef.set({
        ...newPost,
        id: postId,
        summary: newPost.summary ? newPost.summary : postContent.substr(0, 100),
        createdDate: now,
        modifiedDate: now,
      })

      // PostContent
      const newPostContentRef = firestore.collection('postContent').doc()
      const { id: postContentId } = newPostContentRef
      await newPostContentRef.set({
        id: postContentId,
        postId,
        content: postContent,
      })
      return 'success'
    } catch (error) {
      // console.error(error)
      return rejectWithValue(error)
    }
  }
)

interface RemovePostArgs {
  postId: string
}

export const deletePostThunk = createAsyncThunk<
  PostFetchReturnState,
  RemovePostArgs,
  FirebaseThunkApiConfig
>('post/delete', async ({ postId }: RemovePostArgs, { rejectWithValue }) => {
  const firestore = firebase.firestore()
  try {
    await firestore.collection('post').doc(postId).delete()
    const postContentList = await firestore
      .collection('postContent')
      .where('postId', '==', postId)
      .get()
    if (postContentList.size > 0) {
      await postContentList.docs[0].ref.delete()
      return 'success'
    }
    return 'FailPostContent'
  } catch (error) {
    return rejectWithValue(error)
  }
})
