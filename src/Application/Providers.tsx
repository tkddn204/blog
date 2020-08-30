import React, { FC, ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import 'tailwindcss/dist/base.min.css'
import { Global, css } from '@emotion/core'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { PersistGate } from 'redux-persist/integration/react'
import { firebaseConfig, reduxFirebaseConfig } from './FirebaseConfig'
import { persistor, store } from './Store'
import LocaleProvider from '../Features/locale/LocaleProvider'
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

type Props = { children: ReactNode }

const Providers: FC<Props> = ({ children }) => (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={reduxFirebaseConfig}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
          <LocaleProvider>
            <Global
              styles={css`
                @tailwind base;
                @tailwind components;
                @tailwind utilities;
              `}
            />
            {children}
          </LocaleProvider>
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
)

export default Providers
