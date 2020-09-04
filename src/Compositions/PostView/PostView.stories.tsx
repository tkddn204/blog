/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import PostView from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import {
  FetchState,
  Post as PostType,
  PostContent,
} from '../../Types/firestore.schema'
import { dummyPosts } from '../../__fixtures__/posts'

export default {
  title: 'Compositions/PostView',
  component: PostView,
  argTypes: {
    Post: {
      description: '포스트 리스트',
      table: {
        type: {
          summary: 'PostView[]',
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
          title: '📝 PostList',
          description:
            '포스트 리스트입니다. 포스트 리스트는 `<section>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryPostViewProps {
  Post: PostType
  postContent: PostContent
  fetchState: FetchState
  children: ReactNode
}

const PostViewTemplate: Story<StoryPostViewProps> = (args) => {
  const { Post, postContent, fetchState } = args
  return (
    <PostView post={Post} postContent={postContent} fetchState={fetchState} />
  )
}

export const DefaultPostView = PostViewTemplate
