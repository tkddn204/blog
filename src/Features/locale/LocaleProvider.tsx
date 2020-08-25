import React, { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import selector from '../Selectors'
import i18next from '../../Application/I18nConfig'

type Props = {
  children: ReactNode
}

const LocaleProvider = ({ children }: Props) => {
  const locale = useSelector(selector.locale)
  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale)
    }
  }, [locale])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

export default LocaleProvider
