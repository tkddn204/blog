import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { RootState } from '../../Application/Store'

const query = () => [{ collection: 'post', limitTo: 10 }]
const selector = ({ firestore }: RootState) => firestore.ordered.post

const PostList: FC = () => {
  useFirestoreConnect(query)
  const postList = useSelector(selector)

  if (isLoaded(postList)) {
    if (isEmpty(postList)) {
      return <div>텅 비었음</div>
    }
    return <div>{postList}</div>
  }

  return <div>로딩중</div>
}

export default PostList
