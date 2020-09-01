export interface Post {
  id: string
  title: string
  author: string
  summary: string
  createdDate: string
  modifiedDate: string
}

export interface PostContent {
  id: string
  postId: string
  content: string
}

export enum FetchState {
  loading = 'loading',
  loaded = 'loaded',
  empty = 'empty',
  error = 'error',
}
