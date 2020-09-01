import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  getFirebase,
  actionTypes as rrfActionTypes,
  firebaseReducer,
  ExtendedFirebaseInstance,
} from 'react-redux-firebase'
import { constants as rfConstants, firestoreReducer } from 'redux-firestore'
// import { logger } from 'redux-logger'

import localeReducer from '../Features/locale/localeSlice'
import themeReducer from '../Features/theme/themeSlice'

/**
 * redux persist 설정
 */
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    locale: localeReducer,
    theme: themeReducer,
  })
)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  persist: persistedReducer,
})

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
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument: { getFirebase },
    },
  }),
]

if (process.env.NODE_ENV === 'development') {
  // middleware.push(logger)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  () => ExtendedFirebaseInstance,
  Action<string>
>
