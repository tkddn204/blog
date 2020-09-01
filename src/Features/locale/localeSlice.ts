import {
  CaseReducer,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit'

/**
 * 지역 상태
 *
 * @type 'ko' | 'en'
 */
export type LocaleState = 'ko' | 'en'

/**
 * 지역 관련 리듀서 함수를 모은 인터페이스
 *
 * @interface
 */
interface Reducers extends SliceCaseReducers<LocaleState> {
  changeLocale: CaseReducer<LocaleState, PayloadAction<LocaleState>>
}

const initialState: LocaleState = 'ko'

/**
 * 지역 슬라이스
 * @var createSlice<LocaleState, Reducers>
 */
export const localeSlice = createSlice<LocaleState, Reducers>({
  name: 'locale',
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload
      return state
    },
  },
})

export const { changeLocale } = localeSlice.actions
export default localeSlice.reducer
