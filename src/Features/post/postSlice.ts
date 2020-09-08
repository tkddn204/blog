import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { FirebaseError } from 'firebase'
import {
  addPostThunk,
  deletePostThunk,
  getPostThunk,
  PostDataType,
  PostFetchReturnState,
} from './postThunk'

/**
 * 포스트 상태
 */
export type PostState = {
  postData: PostDataType
  loading: 'idle' | 'pending'
  fetchResult?: PostFetchReturnState
  error?: FirebaseError | SerializedError
}

const initialState: PostState = {
  postData: {} as PostDataType,
  loading: 'idle',
  fetchResult: undefined,
  error: undefined,
}

/**
 * 포스트 슬라이스
 */
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getPostThunk
      .addCase(getPostThunk.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.fetchResult = undefined
          state.error = undefined
        }
      })
      .addCase(getPostThunk.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.postData = action.payload
        }
      })
      .addCase(getPostThunk.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload ? action.payload : action.error
        }
      })
      // addPostThunk
      .addCase(addPostThunk.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.error = undefined
        }
      })
      .addCase(addPostThunk.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.fetchResult = action.payload
        }
      })
      .addCase(addPostThunk.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload ? action.payload : action.error
        }
      })
      // deletePostThunk
      .addCase(deletePostThunk.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
          state.error = undefined
        }
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.fetchResult = action.payload
        }
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.payload ? action.payload : action.error
        }
      })
  },
})

export default postSlice.reducer
