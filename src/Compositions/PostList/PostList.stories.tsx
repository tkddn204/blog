/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import PostList, { ContentState } from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Compositions/PostList',
  component: PostList,
  argTypes: {
    content: {
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
  content: ContentState
  children: ReactNode
}

const PostListTemplate: Story<StoryButtonProps> = (args) => {
  return <PostList content={args.content} />
}

export const DefaultPostList = PostListTemplate
