/** @jsx jsx */
import { FC, StrictMode } from 'react'
import tw from 'twin.macro'
import 'github-markdown-css/github-markdown.css'
import { jsx, css } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import { FetchState, Post, PostContent } from '../../Types/firestore.schema'
import Article from '../../Components/Article'
import Section from '../../Components/Section'
import Loading from '../../Components/Loading'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

interface Props extends DarkStyledProps {
  post: Post
  postContent: PostContent
  fetchState: FetchState
}

const postStyle = css`
  ${tw`w-full px-20`}
`

const postTitleStyle = css`
  ${tw`w-full
    text-3xl font-medium
    mb-1`}
  font-family: '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif, Arial;
`

const postDateContainerStyle = css`
  ${tw`mb-5`}
`

const postCreateDateStyle = css`
  ${tw`text-gray-500 text-sm`}
`

const postModifiedDateStyle = css`
  ${tw`text-gray-500 text-sm`}
  ::before {
    content: '(';
  }

  ::after {
    content: ')';
  }
`

const PostView: FC<Props> = ({
  post,
  postContent,
  addStyleType,
  customTheme,
  fetchState,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)

  let Content
  switch (fetchState) {
    case FetchState.empty:
      Content = '앗.. 내용이 비어있어요!'
      break
    case FetchState.loaded:
      Content = (
        <StrictMode>
          <Section css={postStyle}>
            <h1 css={postTitleStyle}>{post && post.title}</h1>
            <div css={postDateContainerStyle}>
              <span css={postCreateDateStyle}>
                {post && moment(post.createdDate).format('YYYY. M. D.')}
              </span>
              <span css={postModifiedDateStyle}>
                {post && moment(post.modifiedDate).fromNow()}
              </span>
            </div>
            <ReactMarkdown
              className="markdown-body"
              source={postContent && postContent.content}
            />
          </Section>
        </StrictMode>
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

  return <Article css={darkStyle}>{Content}</Article>
}

export default PostView
