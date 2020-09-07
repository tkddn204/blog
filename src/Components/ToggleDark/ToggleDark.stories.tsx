/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css, jsx } from '@emotion/core'
import ToggleDark from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/ToggleDark',
  component: ToggleDark,
  argTypes: {
    color: {
      description:
        '`svg`의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마의 색상을 따릅니다.',
      defaultValue: 'black',
      table: {
        type: {
          summary: 'color',
        },
        defaultValue: {
          summary: 'black',
        },
      },
      control: 'color',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🔅 ToggleDark',
          description: '테마 토글 버튼입니다.',
        }),
    },
  },
} as Meta

interface StoryToggleDarkProps {
  color: string
  children: ReactNode
}

const ToggleDarkTemplate: Story<StoryToggleDarkProps> = (
  args,
  { globals: { theme } }
) => {
  const { color } = args
  const cssStyle = theme === 'default' && css({ color })

  return <ToggleDark css={cssStyle} />
}

export const DefaultToggleDark = ToggleDarkTemplate
