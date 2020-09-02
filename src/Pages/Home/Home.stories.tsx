import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Home from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Pages/Blog',
  component: Home,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🏠 Blog',
          description: '메인 화면입니다.',
        }),
    },
  },
} as Meta

export const DefaultHome: Story = () => <Home />
