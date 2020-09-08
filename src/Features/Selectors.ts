import { FirebaseReducer } from 'react-redux-firebase'
import { RootState } from '../Application/Store'
import { LocaleState } from './locale/localeSlice'
import { ThemeState } from './theme/themeSlice'
import { Profile } from '../Types/firestore.schema'
import { PostState } from './post/postSlice'

/**
 * Post 셀렉터
 * @param state RootState
 */
interface PostSelector {
  (state: RootState): PostState
}

/**
 * Auth 셀렉터
 * @param state RootState
 */
interface AuthSelector {
  (state: RootState): FirebaseReducer.AuthState
}

/**
 * Profile 셀렉터
 * @param state RootState
 */
interface ProfileSelector {
  (state: RootState): FirebaseReducer.Profile<Profile>
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

export const PostSelector: PostSelector = (state) => state.post
export const AuthSelector: AuthSelector = (state) => state.firebase.auth
export const ProfileSelector: ProfileSelector = (state) =>
  state.firebase.profile as FirebaseReducer.Profile<Profile>
export const localeSelector: LocaleSelector = (state) => state.persist.locale
export const themeSelector: ThemeSelector = (state) => state.persist.theme
