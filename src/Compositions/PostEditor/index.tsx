/** @jsx jsx */
import { FCEP, useRef } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/lib/codemirror.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor.css'
import { css, jsx } from '@emotion/core'
import { Editor } from '@toast-ui/react-editor'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import Button from '../../Components/Button'
import { Post } from '../../Types/firestore.schema'
import { addPost } from '../../Features/post/postThunk'
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

const submitButtonContainerStyle = css`
  display: flex;
  justify-content: end;
  margin-top: 0.75rem;
`

const PostEditor: FCEP = ({ className }) => {
  const { register, handleSubmit, errors } = useForm()
  const editorRef = useRef({} as Editor)
  const dispatch = useDispatch()

  const onSubmit = (data: Partial<Post>) => {
    const editorInstance = editorRef.current.getInstance()
    const text = htmlToText(editorInstance.getHtml())
    const postContent = editorInstance.getMarkdown()
    const post: Partial<Post> = {
      title: data.title,
      summary: text.substr(0, text.length > 100 ? 100 : text.length),
    }
    if (post.title && postContent.length) {
      dispatch(addPost(post, postContent))
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
        ref={register({ required: true, maxLength: 50 })}
      />
      <Editor
        language="ko-kr"
        previewStyle="vertical"
        initialEditType="markdown"
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
