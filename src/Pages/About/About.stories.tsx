import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import About from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Pages/About',
  component: About,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🙋‍♂️ About',
          description: 'About 화면입니다.',
        }),
    },
  },
} as Meta

export const DefaultAbout: Story = () => <About />
