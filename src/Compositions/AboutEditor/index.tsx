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
import { About } from '../../Types/firestore.schema'
import { updateAbout } from '../../Features/about/aboutThunk'

const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const submitButtonContainerStyle = css`
  display: flex;
  justify-content: end;
  margin-top: 0.75rem;
`

interface Props {
  aboutObj?: About
}

const AboutEditor: FCEP<Props> = ({ className, aboutObj }) => {
  const { handleSubmit } = useForm()
  const editorRef = useRef({} as Editor)
  const dispatch = useDispatch()

  const onSubmit = () => {
    const editorInstance = editorRef.current.getInstance()
    const content = editorInstance.getMarkdown()
    const about: Partial<About> = {
      ...aboutObj,
      content,
    }
    if (content.length) {
      dispatch(updateAbout(about))
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={formStyle}
      className={className}
    >
      <Editor
        language="ko-kr"
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue={aboutObj?.content}
        height="500px"
        ref={editorRef}
        usageStatistics={false}
      />
      <div css={submitButtonContainerStyle}>
        <Button submit>저장</Button>
      </div>
    </form>
  )
}

export default AboutEditor
