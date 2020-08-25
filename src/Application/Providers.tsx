import React, { FC, ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Normalize } from 'styled-normalize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { firebaseConfig, reduxFirebaseConfig } from './FirebaseConfig'
import LocaleProvider from '../Features/locale/LocaleProvider'
import { LightTheme } from './Theme'
import { store } from './Store'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
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
          <ThemeProvider theme={LightTheme}>
            <Normalize />
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </React.StrictMode>
)

export default Providers
