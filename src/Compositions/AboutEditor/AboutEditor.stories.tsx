/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import AboutEditor from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { FetchState, About as AboutType } from '../../Types/firestore.schema'

export default {
  title: 'Compositions/AboutEditor',
  component: AboutEditor,
  argTypes: {
    text: {
      description: '어바웃 텍스트',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '-',
        },
      },
      defaultValue: '',
      control: 'text',
    },
    fetchState: {
      description: '로딩 상태 변경',
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
          title: '📝 About Editor',
          description: '어바웃 에디터입니다.',
        }),
    },
  },
} as Meta

interface StoryButtonProps {
  About: AboutType
  fetchState: FetchState
  children: ReactNode
}

const AboutEditorTemplate: Story<StoryButtonProps> = () => {
  // const { About, fetchState } = args
  return <AboutEditor />
}

export const DefaultAboutEditor = AboutEditorTemplate
