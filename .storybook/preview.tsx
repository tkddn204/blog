import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Providers from '../src/Application/Providers'
import { change } from '../src/Features/theme/themeSlice'

export const decorators = [
  (Story: any, context: any) => {
    const WithReduxStory: FC = () => {
      const { theme } = context.globals
      const dispatch = useDispatch()
      useEffect(() => {
        if (theme === 'light' || theme === 'dark') {
          dispatch(change(theme))
        }
      }, [dispatch, theme])
      return <Story {...context} />
    }

    return (
      <Providers>
        <WithReduxStory />
      </Providers>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['notUsed', 'light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'ko',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ko', right: '🇰🇷', title: '한국어' },
        { value: 'en', right: '🇺🇸', title: 'English' },
      ],
    },
  },
}
