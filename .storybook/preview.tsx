// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryGetter, StoryContext } from '@storybook/addons'
import React, { FC, ReactNode, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import Providers from '../src/Application/Providers'
import { changeTheme } from '../src/Features/theme/themeSlice'

export const decorators = [
  (Story: StoryGetter, context: StoryContext): ReactNode => {
    const WithReduxStory: FC = () => {
      const { theme } = context.globals
      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(changeTheme(theme))
      }, [dispatch, theme])

      /* eslint-disable react/jsx-props-no-spreading */
      return <Story {...context} />
    }

    return (
      <Providers>
        <WithReduxStory />
      </Providers>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // notUsed -> local value first. if not set local value, using light theme
      items: ['default', 'light', 'dark'],
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
