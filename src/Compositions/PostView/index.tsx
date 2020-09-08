/** @jsx jsx */
import { FCEP } from 'react'
import 'github-markdown-css/github-markdown.css'
import { css, jsx } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import useStyle from '../../Hooks/useStyle'
import { FetchState, Post, PostContent } from '../../Types/firestore.schema'
import Article from '../../Components/Article'
import Section from '../../Components/Section'
import Loading from '../../Components/Loading'
import { ThemeType } from '../../Types/theme'

const postStyle = css`
  width: 100%;
  padding: 0 5rem 0 5rem;
`

const postTitleStyle = css`
  width: 100%;
  font-size: xx-large;
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-family: '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic',
    sans-serif, Arial;
`

const postDateContainerStyle = css`
  margin-bottom: 1.25rem;
`

const postCreateDateStyle = (theme: ThemeType) => css`
  color: ${theme.color.gray['5']};
  font-size: small;
`

const postModifiedDateStyle = (theme: ThemeType) => css`
  ${postCreateDateStyle(theme)}

  ::before {
    content: '(';
  }

  ::after {
    content: ')';
  }
`

interface Props {
  post: Post
  postContent: PostContent
  fetchState: FetchState
}

const PostView: FCEP<Props> = ({ post, postContent, fetchState }) => {
  const cssPostCreateDateStyle = useStyle(postCreateDateStyle)
  const cssPostModifiedDateStyle = useStyle(postModifiedDateStyle)

  let Content
  switch (fetchState) {
    case FetchState.loaded:
      Content = (
        <Section css={postStyle}>
          <h1 css={postTitleStyle}>{post && post.title}</h1>
          <div css={postDateContainerStyle}>
            <span css={cssPostCreateDateStyle}>
              {post && moment(post.createdDate).format('YYYY. M. D.')}
            </span>
            <span css={cssPostModifiedDateStyle}>
              {post && moment(post.modifiedDate).fromNow()}
            </span>
          </div>
          <ReactMarkdown
            className="markdown-body"
            source={postContent && postContent.content}
          />
        </Section>
      )
      break
    default:
      Content = (
        <Section>
          <Loading />
        </Section>
      )
      break
  }

  return <Article>{Content}</Article>
}

export default PostView
