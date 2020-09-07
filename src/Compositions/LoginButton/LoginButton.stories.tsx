/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import LoginButton from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Compositions/LoginButton',
  component: LoginButton,
  argTypes: {
    auth: {
      description: 'Auth 상태입니다.',
      table: {
        type: {
          summary: ['loading', 'loaded', 'empty'],
        },
        defaultValue: {
          summary: 'loading',
        },
      },
      defaultValue: 'loading',
      control: {
        type: 'select',
        options: ['loading', 'loaded', 'empty'],
      },
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🌈 LoginButton',
          description:
            '로그인 버튼입니다. 로그인 버튼은 상태에 따라 텍스트나 `<button>` 태그 컴포넌트로 변경됩니다.',
        }),
    },
  },
} as Meta

type MockAuthState = 'loading' | 'loaded' | 'empty'

interface StoryButtonProps {
  auth: MockAuthState
  children: ReactNode
}

const LoginButtonTemplate: Story<StoryButtonProps> = ({ auth }) => {
  const authObj = {
    isLoaded: auth !== 'loading',
    isEmpty: auth === 'empty',
  }
  return <LoginButton auth={authObj} />
}

export const DefaultLoginButton = LoginButtonTemplate
