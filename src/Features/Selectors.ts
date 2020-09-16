import { FirebaseReducer } from 'react-redux-firebase'
import { RootState } from '../Application/Store'
import {
  LocaleState,
  ThemeState,
  EditorData,
} from '../Types/localStorageSchema'
import { Profile } from '../Types/firestoreSchema'
import { PostState } from './post/postSlice'

/**
 * Editor 셀렉터
 * @param state RootState
 */
interface EditorDataSelector {
  (state: RootState): EditorData
}

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
export const EditorDataSelector: EditorDataSelector = (state) =>
  state.persist.editor
export const LocaleSelector: LocaleSelector = (state) => state.persist.locale
export const ThemeSelector: ThemeSelector = (state) => state.persist.theme
