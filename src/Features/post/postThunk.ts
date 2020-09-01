import moment from 'moment'
import firebase from 'firebase/app'
import { AppThunk } from '../../Application/Store'
import { Post } from '../../Types/firestore.schema'

export const addPost = (newPost: Post, postContent: string): AppThunk => async (
  dispatch
): Promise<void> => {
  try {
    const newPostRef = firebase.firestore().collection('post').doc()
    const { id: postId } = newPostRef
    const now = moment.now()
    await newPostRef.set({
      ...newPost,
      id: postId,
      summary: postContent.substring(0, 100),
      createdDate: now,
      modifiedDate: now,
    })
    const newPostContentRef = firebase
      .firestore()
      .collection('postContent')
      .doc()
    const { id: postContentId } = newPostContentRef
    await newPostContentRef.set({
      id: postContentId,
      postId,
      content: postContent,
    })
  } catch (error) {
    // console.error(error)
    dispatch({ type: 'ERROR' })
  }
}

export const removePost = (postId: string): AppThunk => async (
  dispatch
): Promise<void> => {
  try {
    await firebase.firestore().collection('post').doc(postId).delete()
    // await getFirebase().firestore().collection('postContent').doc(postId).delete()
  } catch (error) {
    // console.error(error)
    dispatch({ type: 'ERROR' })
  }
}
