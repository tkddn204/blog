/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import Editor from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { FetchState, Post as PostType } from '../../Types/firestore.schema'

export default {
  title: 'Compositions/PostEditor',
  component: Editor,
  argTypes: {
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
          title: '📝 Index',
          description:
            '포스트 리스트입니다. 포스트 리스트는 `<section>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryButtonProps {
  post: PostType
  fetchState: FetchState
  children: ReactNode
}

const EditorTemplate: Story<StoryButtonProps> = () => {
  // const { post, fetchState } = args
  return <Editor onSave={() => {}} />
}

export const DefaultEditor = EditorTemplate
