/** @jsx jsx */
import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'
import { Meta, Story } from '@storybook/react/types-6-0'
import { theme as twTheme } from 'twin.macro'
import Divider from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    background: {
      description:
        '디바이더의 배경색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마 앵커의 색상을 따릅니다.',
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
          title: '➗ Divider',
          description:
            '디바이더입니다. 앵커는 `<div>` 태그 컴포넌트입니다. 바탕색으로 구분선을 만듭니다.',
        }),
    },
  },
} as Meta

interface StoryDividerProps {
  background: string
  children: ReactNode
}
const DividerTemplate: Story<StoryDividerProps> = (args) => {
  const { background } = args
  return <Divider css={css({ background })} />
}

export const DefaultDivider = DividerTemplate
