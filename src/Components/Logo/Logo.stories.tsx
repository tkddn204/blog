/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { theme as twTheme } from 'twin.macro'
import { css, jsx } from '@emotion/core'
import Logo from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    color: {
      description:
        '로고의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마 앵커의 색상을 따릅니다.',
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
          title: '😆 Logo',
          description: '로고입니다. 로고는 `<svg>` 태그 컴포넌트입니다.',
          excludes: ['ref'],
        }),
    },
  },
} as Meta

interface StoryLogoProps {
  color: string
  children: ReactNode
}
const logoTemplate: Story<StoryLogoProps> = (args) => {
  const { color } = args

  return <Logo customTheme={css({ color })} />
}

export const DefaultLogo = logoTemplate
