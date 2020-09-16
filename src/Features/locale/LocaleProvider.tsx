import React, { FC, ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import moment from 'moment'
import 'moment/locale/ko'
import { LocaleSelector } from '../Selectors'
import i18next from '../../Application/I18nConfig'

type Props = {
  children: ReactNode
}

const LocaleProvider: FC<Props> = ({ children }: Props) => {
  const locale = useSelector(LocaleSelector)

  useEffect(() => {
    moment.locale(locale)
  }, [locale])
  // useEffect(() => {
  //   if (i18next.language !== locale) {
  //     i18next.changeLanguage(locale).then(() => moment.locale(locale))
  //   }
  // }, [locale])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

export default LocaleProvider
