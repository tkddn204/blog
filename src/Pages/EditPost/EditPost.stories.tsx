import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import EditPost from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Pages/EditPost',
  component: EditPost,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🏠 EditPost',
          description: '메인 화면입니다.',
        }),
    },
  },
} as Meta

export const DefaultEditPost: Story = () => <EditPost />
