import {
  CaseReducer,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'
import { ThemeState } from '../../Types/localStorageSchema'

/**
 * 테마 관련 리듀서 함수를 모은 인터페이스
 *
 * @interface
 */
interface Reducers extends SliceCaseReducers<ThemeState> {
  changeTheme: CaseReducer<ThemeState, PayloadAction<ThemeState>>
}

const initialState: ThemeState = 'default'

/**
 * 테마 슬라이스
 * @var createSlice<ThemeState, Reducers>
 */
export const themeSlice = createSlice<ThemeState, Reducers>({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload
      return state
    },
  },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
