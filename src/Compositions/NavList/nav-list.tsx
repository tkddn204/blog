/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import NavList from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/NavList',
  component: NavList,
  argTypes: {
    children: {
      description: '헤더 안에 들어가는 ReactNode',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: {
          summary: '-',
        },
      },
      control: 'object',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '😎 Header',
          description: '헤더입니다. 헤더는 `<header>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryButtonProps {
  children: ReactNode
}

const navListTemplate: Story<StoryButtonProps> = (args) => {
  return <NavList>{args.children}</NavList>
}

export const DefaultNavList = navListTemplate
