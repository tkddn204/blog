/** @jsx jsx */
import React, { FCEP, useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Button from '../../Components/Button'

const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 80%;
`

interface InputStyleProps {
  size?: string
}
const InputStyle = (props?: InputStyleProps) => css`
  padding-bottom: 0.25rem;
  margin-bottom: 0.75rem;
  font-size: ${props?.size && '1.5rem'};
  border-bottom-width: 1px;
`

const submitButtonContainerStyle = css`
  display: flex;
  justify-content: end;
  margin-top: 0.75rem;
`

export interface EditorData {
  title?: string
  summary?: string
  content?: string
}

interface Props {
  editorData?: EditorData
  onSave: SubmitHandler<EditorData>
  option?: 'minimum'
}

const Editor: FCEP<Props> = ({ editorData, onSave, className, option }) => {
  const [titleInputValue, setTitleInputValue] = useState(editorData?.title)
  const [summaryInputValue, setSummaryInputValue] = useState(
    editorData?.summary
  )
  const { register, handleSubmit, setValue, setError, errors } = useForm<
    EditorData
  >()

  useEffect(() => {
    register({ name: 'content' }, { required: true })
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSave)} css={formStyle} className={className}>
      {option !== 'minimum' && (
        <React.Fragment>
          <input
            name="title"
            placeholder="제목"
            css={InputStyle()}
            value={titleInputValue}
            onChange={(e) => setTitleInputValue(e.target.value)}
            ref={register({ required: true, maxLength: 50 })}
          />
          <input
            name="summary"
            placeholder="요약"
            css={InputStyle({ size: '0.75rem' })}
            value={summaryInputValue}
            onChange={(e) => setSummaryInputValue(e.target.value)}
            ref={register({ maxLength: 100 })}
          />
        </React.Fragment>
      )}
      <ReactQuill
        theme="snow"
        defaultValue={editorData?.content}
        onChange={(content) => {
          if (content.length > 0) {
            setValue('content', content)
          } else {
            setError('content', { message: 'Empty!', type: 'validate' })
          }
        }}
      />
      {errors.title && <span>제목은 꼭 써주서야 합니다!</span>}
      {/* {errors.editor && <span>내용을 입력해주세요!</span>} */}
      <div css={submitButtonContainerStyle}>
        <Button submit>저장</Button>
      </div>
    </form>
  )
}

export default Editor
