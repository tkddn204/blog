/** @jsx jsx */
import { FC, useRef } from 'react'
import tw from 'twin.macro'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/lib/codemirror.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor.css'
import { jsx, css } from '@emotion/core'
import { Editor } from '@toast-ui/react-editor'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import Article from '../../Components/Article'
import { Post } from '../../Types/firestore.schema'
import { addPost } from '../../Features/post/postThunk'
import { SubmitTypeButton } from '../../Components/Button'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const titleInputStyle = css`
  ${tw`text-2xl
    pb-1 mb-3
    border-b
  `}
`

const formStyle = css`
  ${tw`flex flex-col
  `}
`

const submitButtonContainerStyle = css`
  ${tw`flex justify-end mt-3
  `}
`

type Props = DarkStyledProps

const htmlToText = (html: string): string => {
  const element = document.createElement('div')
  element.innerHTML = html
  return element.textContent || ''
}

const PostEditor: FC<Props> = ({ addStyleType, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
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
    <Article css={[darkStyle]}>
      <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
        <input
          name="title"
          placeholder="제목"
          css={titleInputStyle}
          ref={register({ required: true, maxLength: 50 })}
        />
        <Editor
          language="ko-kr"
          previewStyle="tab"
          initialEditType="markdown"
          height="400px"
          ref={editorRef}
          usageStatistics={false}
        />
        {errors.title && <span>제목은 꼭 써주서야 합니다!</span>}
        {/* {errors.editor && <span>내용을 입력해주세요!</span>} */}
        <div css={submitButtonContainerStyle}>
          <SubmitTypeButton>저장</SubmitTypeButton>
        </div>
      </form>
    </Article>
  )
}

export default PostEditor
