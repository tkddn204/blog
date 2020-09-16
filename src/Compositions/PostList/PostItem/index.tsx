/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import moment from 'moment'
import useStyle from '../../../Hooks/useStyle'
import { Post } from '../../../Types/firestoreSchema'
import { ThemeType } from '../../../Types/theme'

const postItemStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  background: transparent;
  color: black;
  font-size: medium;
  margin: 0.75rem 1.5rem 0.75rem 1.5rem;
  padding: 0.75rem;
  cursor: pointer;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: ${theme.color.gray['3']}40;
  }

  transition-property: all;
  transition-duration: 300ms;
`

const postItemDarkStyle = (theme: ThemeType) => css`
  color: white;

  &:hover {
    color: ${theme.color.green['5']};
  }
`

const postTitleStyle = css`
  margin: 0.5rem 0;
  font-size: xx-large;
`

const postDateStyle = (theme: ThemeType) => css`
  margin: 0;
  font-size: small;
  color: ${theme.color.gray['5']};
`

interface Props {
  post: Post
}

const PostItem: FCEP<Props> = ({ post, className }) => {
  const cssPostItemStyle = useStyle(postItemStyle, postItemDarkStyle)
  const cssPostDateStyle = useStyle(postDateStyle)

  return (
    <div css={cssPostItemStyle} className={className}>
      <h3 css={postTitleStyle}>{post.title}</h3>
      <h4 css={cssPostDateStyle}>
        {moment(post.createdDate).format('YYYY. M. D.')}
      </h4>
      <p>{post.summary}</p>
    </div>
  )
}

export default PostItem
