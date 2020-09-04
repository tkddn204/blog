import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Post from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Pages/Post',
  component: Post,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🏠 Post',
          description: '메인 화면입니다.',
        }),
    },
  },
} as Meta

export const DefaultPost: Story = () => <Post />
