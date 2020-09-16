import moment from 'moment'
import firebase from 'firebase/app'
import { AppThunk } from '../../Application/Store'
import { About } from '../../Types/firestoreSchema'

// eslint-disable-next-line import/prefer-default-export
export const updateAbout = (editedAbout: Partial<About>): AppThunk => async (
  dispatch
): Promise<void> => {
  try {
    const about = firebase.firestore().collection('about').doc(editedAbout.id)
    const now = moment.now()
    await about.update({
      content: editedAbout.content,
      modifiedDate: now,
    })
  } catch (error) {
    // console.error(error)
    dispatch({ type: 'ERROR' })
  }
}
