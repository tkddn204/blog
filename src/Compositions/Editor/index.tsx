/** @jsx jsx */
import React, { FCEP, ReactNode, useCallback, useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Components/Button'
import { EditorDataSelector } from '../../Features/Selectors'
import { setEditorData } from '../../Features/editor/editorSlice'
import { debounce } from '../../Utils'
import { EditorData } from '../../Types/localStorageSchema'

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

interface Props {
  editorData?: EditorData
  onSave: SubmitHandler<EditorData>
  option?: 'minimum'
}

type SaveState = 'initial' | 'saving' | 'saved'

const Editor: FCEP<Props> = ({ editorData, onSave, className, option }) => {
  const localPost = useSelector(EditorDataSelector)
  const dispatch = useDispatch()
  const [titleInputValue, setTitleInputValue] = useState(localPost.title)
  const [summaryInputValue, setSummaryInputValue] = useState(localPost.summary)
  const [contentInputValue, setContentInputValue] = useState(localPost.content)
  const [saveState, setSaveState] = useState<SaveState>('initial')

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    errors,
    unregister,
  } = useForm<EditorData>()
  const useDebounceCallback = debounce(() => {
    dispatch(setEditorData(getValues()))
    setSaveState('saved')
  }, 1000)
  const setDataToLocalStorage = useCallback(useDebounceCallback, [
    useDebounceCallback,
  ])

  useEffect(() => {
    if (editorData?.title) {
      dispatch(setEditorData(editorData))
    }
    register({ name: 'content' }, { required: true })
    return () => unregister('content')
  }, [editorData, dispatch, register, unregister])

  useEffect(() => {
    setValue('content', contentInputValue)
  }, [contentInputValue, setValue])

  let SaveAlert: ReactNode
  if (saveState === 'initial') {
    SaveAlert = <span>한조 대기중</span>
  } else if (saveState === 'saving') {
    SaveAlert = <span>저장중...</span>
  } else if (saveState === 'saved') {
    SaveAlert = <span>저장완료!</span>
  }

  return (
    <form onSubmit={handleSubmit(onSave)} css={formStyle} className={className}>
      {option !== 'minimum' && (
        <React.Fragment>
          <input
            name="title"
            placeholder="제목"
            css={InputStyle({ size: '0.75rem' })}
            value={titleInputValue}
            onChange={(e) => {
              setTitleInputValue(e.target.value)
              setSaveState('saving')
              setDataToLocalStorage()
            }}
            ref={register({ required: true, maxLength: 50 })}
          />
          <input
            name="summary"
            placeholder="요약"
            css={InputStyle()}
            value={summaryInputValue}
            onChange={(e) => {
              setSummaryInputValue(e.target.value)
              setSaveState('saving')
              setDataToLocalStorage()
            }}
            ref={register({ maxLength: 100 })}
          />
        </React.Fragment>
      )}
      <ReactQuill
        theme="snow"
        defaultValue={localPost.content}
        onChange={(content) => {
          if (content.length > 0) {
            setContentInputValue(content)
            setSaveState('saving')
            setDataToLocalStorage()
          } else {
            setError('content', { message: 'Empty!', type: 'validate' })
          }
        }}
      />
      {errors.title && <span>제목을 입력해주세요!</span>}
      {errors.content && <span>내용을 입력해주세요!</span>}
      {SaveAlert}
      <div css={submitButtonContainerStyle}>
        <Button submit>저장</Button>
      </div>
    </form>
  )
}

export default Editor
