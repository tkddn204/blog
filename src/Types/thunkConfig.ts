import { FirebaseError } from 'firebase'
import { SerializedError } from '@reduxjs/toolkit'

export interface ThunkApiConfig {
  rejectValue: SerializedError
}

export interface FirebaseThunkApiConfig {
  rejectValue: FirebaseError
}
