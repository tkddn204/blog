import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditorData } from '../../Types/localStorageSchema'

const initialState = {} as EditorData

/**
 * 로컬스토리지용 에디터 슬라이스
 */
export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorData: (state, action: PayloadAction<EditorData>) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload
      return state
    },
  },
})

export const { setEditorData } = editorSlice.actions
export default editorSlice.reducer
