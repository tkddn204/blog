import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import ko from './locale/ko.json'
import en from './locale/en.json'

i18next.use(initReactI18next).init({
  resources: {
    ko,
    en,
  },
  lng: 'ko',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
