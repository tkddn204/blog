/** @jsx jsx */
import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'
import { Meta, Story } from '@storybook/react/types-6-0'
import { theme as twTheme } from 'twin.macro'
import Nav from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    children: {
      description: '네비게이션 안에 들어가는 텍스트',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '-',
        },
      },
      defaultValue: '기본 네비게이션',
      control: 'text',
    },
    link: {
      description: '네비게이션 링크',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '/',
        },
      },
      defaultValue: '/',
      control: 'text',
    },
    color: {
      description:
        '네비게이션의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마 앵커의 색상을 따릅니다.',
      defaultValue: twTheme`colors.black`,
      table: {
        type: {
          summary: 'color',
        },
        defaultValue: {
          summary: twTheme`colors.black`,
        },
      },
      control: 'color',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🧭 Nav',
          description:
            '네비게이션입니다. 네비게이션은 `<Link>` 컴포넌트(`<a>` 태그)입니다.',
        }),
    },
  },
} as Meta

interface StoryNavProps {
  link: string
  color: string
  children: ReactNode
}
const NavTemplate: Story<StoryNavProps> = (args, { globals: { locale } }) => {
  const { link, color } = args
  const text = locale !== 'ko' ? 'Nav' : args.children

  return (
    <Nav link={link} customTheme={css({ color })}>
      {text}
    </Nav>
  )
}

export const DefaultNav = NavTemplate
