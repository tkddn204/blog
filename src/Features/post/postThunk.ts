import moment from 'moment'
import firebase from 'firebase/app'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { FirebaseThunkApiConfig } from '../../Types/thunkConfig'
import { Post, PostContent } from '../../Types/firestoreSchema'

export type PostFetchReturnState = 'success' | 'FailPostContent'

export interface PostDataType {
  post: Post
  postContent: PostContent
}
export interface PostDataArgs {
  post: Partial<Post>
  postContent: Partial<PostContent>
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
    return rejectWithValue(error)
  }
})

type AddPostArgs = PostDataArgs

export const addPostThunk = createAsyncThunk<
  PostFetchReturnState,
  AddPostArgs,
  FirebaseThunkApiConfig
>(
  'post/add',
  async ({ post, postContent }: AddPostArgs, { rejectWithValue }) => {
    const firestore = firebase.firestore()
    try {
      // Post
      const newPostRef = firestore.collection('post').doc()
      const { id: postId } = newPostRef
      const now = moment.now()
      await newPostRef.set({
        ...post,
        id: postId,
        summary: post.summary,
        createdDate: now,
        modifiedDate: now,
      })

      // PostContent
      const newPostContentRef = firestore.collection('postContent').doc()
      const { id: postContentId } = newPostContentRef
      await newPostContentRef.set({
        id: postContentId,
        postId,
        content: postContent.content,
      })
      return 'success'
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

type UpdatePostArgs = PostDataArgs

export const updatePostThunk = createAsyncThunk<
  PostFetchReturnState,
  UpdatePostArgs,
  FirebaseThunkApiConfig
>(
  'post/update',
  async ({ post, postContent }: UpdatePostArgs, { rejectWithValue }) => {
    const firestore = firebase.firestore()
    try {
      // Post
      const postRef = firestore.collection('post').doc(post.id)
      const now = moment.now()
      await postRef.update({
        ...post,
        modifiedDate: now,
      })

      // PostContent
      const postContentList = await firestore
        .collection('postContent')
        .where('postId', '==', postContent.postId)
        .get()
      if (postContentList.size > 0) {
        await postContentList.docs[0].ref.update(postContent)
        return 'success'
      }
      return 'FailPostContent'
    } catch (error) {
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
