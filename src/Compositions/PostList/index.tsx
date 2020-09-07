/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import Loading from '../../Components/Loading'
import { FetchState, Post } from '../../Types/firestore.schema'
import PostItem from './PostItem'
import Article from '../../Components/Article'
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
        <Link to={`/post/${post.id}`} css={postItemLink}>
          <PostItem key={post.id} post={post} />
        </Link>
      ))
      break
    case FetchState.empty:
      Content = '텅 비었음'
      break
    default:
      Content = (
        <Section>
          <Loading />
        </Section>
      )
  }

  return <Article className={className}>{Content}</Article>
}

export default PostList
