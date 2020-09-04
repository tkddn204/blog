/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import PostEditor from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { FetchState, Post as PostType } from '../../Types/firestore.schema'
import { dummyPosts } from '../../__fixtures__/posts'

export default {
  title: 'Compositions/PostEditor',
  component: PostEditor,
  argTypes: {
    Post: {
      description: '포스트 리스트',
      table: {
        type: {
          summary: 'PostEditor[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
      defaultValue: dummyPosts,
      control: 'object',
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
          title: '📝 Index',
          description:
            '포스트 리스트입니다. 포스트 리스트는 `<section>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryButtonProps {
  Post: PostType
  fetchState: FetchState
  children: ReactNode
}

const PostEditorTemplate: Story<StoryButtonProps> = () => {
  // const { Post, fetchState } = args
  return <PostEditor />
}

export const DefaultPostEditor = PostEditorTemplate
