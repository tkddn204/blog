/** @jsx jsx */
import { FCEP, useRef, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/lib/codemirror.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor.css'
import { css, jsx } from '@emotion/core'
import { Editor } from '@toast-ui/react-editor'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import Button from '../../Components/Button'
import { Post, PostContent } from '../../Types/firestore.schema'
import { addPostThunk, updatePostThunk } from '../../Features/post/postThunk'
import { htmlToText } from '../../Utils'

const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const titleInputStyle = css`
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  border-bottom-width: 1px;
`

const summaryInputStyle = css`
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  border-bottom-width: 1px;
`

const submitButtonContainerStyle = css`
  display: flex;
  justify-content: end;
  margin-top: 0.75rem;
`

interface Props {
  postObj?: Post
  postContentObj?: PostContent
}

const PostEditor: FCEP<Props> = ({ postObj, postContentObj, className }) => {
  const [titleInputValue, setTitleInputValue] = useState(postObj?.title)
  const [summaryInputValue, setSummaryInputValue] = useState(postObj?.summary)
  const { register, handleSubmit, errors } = useForm()
  const editorRef = useRef({} as Editor)
  const dispatch = useDispatch()

  const onSubmit = (data: Partial<Post>) => {
    const editorInstance = editorRef.current.getInstance()

    const contentRawText = htmlToText(editorInstance.getHtml())
    const summary = data.summary
      ? data.summary
      : contentRawText.substr(
          0,
          contentRawText.length > 100 ? 100 : contentRawText.length
        )
    const content = editorInstance.getMarkdown()

    if (postObj?.id) {
      // update
      const post: Partial<Post> = {
        ...postObj,
        title: data.title,
        summary,
      }
      const postContent: Partial<PostContent> = {
        ...postContentObj,
        content,
      }
      if (post.title && content.length) {
        dispatch(updatePostThunk({ post, postContent }))
      }
    } else {
      // add
      const newPost: Partial<Post> = {
        title: data.title,
        summary,
      }
      const newPostContent: Partial<PostContent> = {
        content,
      }
      if (newPost.title && content.length) {
        dispatch(addPostThunk({ newPost, postContent: newPostContent }))
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={formStyle}
      className={className}
    >
      <input
        name="title"
        placeholder="제목"
        css={titleInputStyle}
        value={titleInputValue}
        onChange={(e) => setTitleInputValue(e.target.value)}
        ref={register({ required: true, maxLength: 50 })}
      />
      <input
        name="summary"
        placeholder="제목"
        css={summaryInputStyle}
        value={summaryInputValue}
        onChange={(e) => setSummaryInputValue(e.target.value)}
        ref={register({ maxLength: 100 })}
      />
      <Editor
        language="ko-kr"
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue={postContentObj?.content}
        height="500px"
        ref={editorRef}
        usageStatistics={false}
      />
      {errors.title && <span>제목은 꼭 써주서야 합니다!</span>}
      {/* {errors.editor && <span>내용을 입력해주세요!</span>} */}
      <div css={submitButtonContainerStyle}>
        <Button submit>저장</Button>
      </div>
    </form>
  )
}

export default PostEditor
