import firebase from 'firebase/app'
import { AppThunk } from '../../Application/Store'

export const signInAnonymously = (): AppThunk => async (
  dispatch
): Promise<void> => {
  try {
    await firebase.auth().signInAnonymously()
    dispatch({ type: 'LOGIN_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
}

export const signInGoogle = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    await firebase.auth().signInWithRedirect(provider)
    dispatch({ type: 'LOGIN_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
}

export const signOut = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    await firebase.auth().signOut()
    dispatch({ type: 'LOGOUT_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGOUT_ERROR', error })
  }
}
