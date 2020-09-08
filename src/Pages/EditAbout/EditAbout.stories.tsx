import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import EditAbout from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Pages/EditAbout',
  component: EditAbout,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🏠 EditAbout',
          description: '어바웃 편집 페이지입니다.',
        }),
    },
  },
} as Meta

export const DefaultEditAbout: Story = () => <EditAbout />
