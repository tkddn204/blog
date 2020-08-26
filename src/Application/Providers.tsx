import React, { FC, ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import 'tailwindcss/dist/base.min.css'
import { Global, css } from '@emotion/core'
import normalize from 'emotion-normalize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import {
  firebaseConfig,
  firebaseTestConfig,
  reduxFirebaseConfig,
} from './FirebaseConfig'
import { store } from './Store'
import LocaleProvider from '../Features/locale/LocaleProvider'
import SelectThemeProvider from '../Features/theme/SelectThemeProvider'

// Initialize Firebase
const isDevelopment: boolean = process.env.NODE_ENV === 'development'
firebase.initializeApp(isDevelopment ? firebaseTestConfig : firebaseConfig)
firebase.auth()
firebase.firestore()
firebase.storage()

type Props = { children: ReactNode }

const Providers: FC<Props> = ({ children }) => (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={reduxFirebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <LocaleProvider>
          <SelectThemeProvider>
            <Global
              styles={css`
                ${normalize}
              `}
            />
            {children}
          </SelectThemeProvider>
        </LocaleProvider>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </React.StrictMode>
)

export default Providers
