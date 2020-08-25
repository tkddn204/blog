import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
  firebaseReducer,
} from 'react-redux-firebase'
import { constants as rfConstants, firestoreReducer } from 'redux-firestore'

import localeReducer from '../Features/locale/localeSlice'

/**
 * 미들웨어 - 리액트-리덕스-파이어베이스 설정
 */
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        ...Object.keys(rfConstants.actionTypes).map(
          (type) => `${rfConstants.actionsPrefix}/${type}`
        ),
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`
        ),
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument: { getFirebase },
    },
  }),
]

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    locale: localeReducer,
  },
  middleware,
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
