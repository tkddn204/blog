/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import Loading from '../../Components/Loading'
import { FetchState, Post } from '../../Types/firestoreSchema'
import PostItem from './PostItem'
import Section from '../../Components/Section'

interface Props {
  postList: Post[]
  fetchState: FetchState
}

const postItemLink = css`
  text-decoration: none;
  width: 100%;
`

const PostList: FCEP<Props> = ({ postList, fetchState, className }) => {
  let Content
  switch (fetchState) {
    case FetchState.loaded:
      Content = postList.map((post: Post) => (
        <Link key={post.id} to={`/post/${post.id}`} css={postItemLink}>
          <PostItem post={post} />
        </Link>
      ))
      break
    default:
      Content = <Loading />
  }

  return (
    <Section className={className} custom={['center']}>
      {Content}
    </Section>
  )
}

export default PostList
