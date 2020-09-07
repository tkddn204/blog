/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import NavList from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import NavItem from '../NavItem'

export default {
  title: 'Components/NavList',
  component: NavList,
  argTypes: {
    children: {
      description: '하나 이상의 네비게이션을 포함해야 합니다.',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'NavItem[]',
        },
        defaultValue: {
          summary: '-',
        },
      },
      defaultValue: [
        <NavItem key="nav-about" link="/about">
          About
        </NavItem>,
        <NavItem key="nav-blog" link="/blog">
          Blog
        </NavItem>,
      ],
      control: 'array',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '📪 NavList',
          description:
            '네비게이션 리스트입니다. 네비게이션 리스트는 `<nav>` 태그 컴포넌트입니다.',
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
