import { FirebaseReducer } from 'react-redux-firebase'
import { RootState } from '../Application/Store'
import { LocaleState } from './locale/localeSlice'
import { ThemeState } from './theme/themeSlice'

/**
 * Auth 셀렉터
 * @param state RootState
 */
interface AuthSelector {
  (state: RootState): FirebaseReducer.AuthState
}

/**
 * 지역 셀렉터
 * @param state RootState
 */
interface LocaleSelector {
  (state: RootState): LocaleState
}

/**
 * 테마 셀렉터
 * @param state RootState
 */
interface ThemeSelector {
  (state: RootState): ThemeState
}

export const AuthSelector: AuthSelector = (state) => state.firebase.auth
export const localeSelector: LocaleSelector = (state) => state.persist.locale
export const themeSelector: ThemeSelector = (state) => state.persist.theme
