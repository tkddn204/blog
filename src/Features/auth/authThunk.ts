import firebase from 'firebase/app'
import { AppThunk } from '../../Application/Store'

export const signInAnonymously = (): AppThunk => async (
  dispatch,
  getState,
  getFirebase
): Promise<void> => {
  try {
    await getFirebase().auth().signInAnonymously()
    dispatch({ type: 'LOGIN_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
}

export const signInGoogle = (): AppThunk => async (
  dispatch,
  getState,
  getFirebase
): Promise<void> => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    await getFirebase().auth().signInWithRedirect(provider)
    dispatch({ type: 'LOGIN_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error })
  }
}
