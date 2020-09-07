import React, { FC } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import emotionNormalize from 'emotion-normalize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { firebaseConfig, reduxFirebaseConfig } from './FirebaseConfig'
import { persistor, store } from './Store'

import './I18nConfig'
import LocaleProvider from '../Features/locale/LocaleProvider'
import { commonTheme } from './Theme'
// import SelectThemeProvider from '../Features/theme/SelectThemeProvider'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth()
firebase.storage()
const firestore = firebase.firestore()
if (window.location.hostname === 'localhost') {
  firestore.settings({
    host: 'localhost:5002',
    ssl: false,
  })
}

const Providers: FC = ({ children }) => (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={reduxFirebaseConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <BrowserRouter>
            <ThemeProvider theme={commonTheme}>
              <LocaleProvider>
                <Global
                  styles={css`
                    ${emotionNormalize}
                  `}
                />
                {children}
              </LocaleProvider>
            </ThemeProvider>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
)

export default Providers
