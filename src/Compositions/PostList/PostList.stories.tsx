/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import PostList from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { FetchState, Post } from '../../Types/firestore.schema'
import { dummyPosts } from '../../__fixtures__/posts'
import PostItem from './PostItem'

export default {
  title: 'Compositions/PostList',
  component: PostList,
  argTypes: {
    postList: {
      description: '포스트 리스트',
      table: {
        type: {
          summary: 'Post[]',
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
  postList: Post[]
  fetchState: FetchState
  children: ReactNode
}

const PostListTemplate: Story<StoryButtonProps> = (args) => {
  const { postList, fetchState } = args
  return <PostList postList={postList} fetchState={fetchState} />
}

export const DefaultPostList = PostListTemplate

export const DefaultPostItem: Story<StoryButtonProps> = (args) => {
  const { postList } = args
  return <PostItem post={postList[0]} />
}
