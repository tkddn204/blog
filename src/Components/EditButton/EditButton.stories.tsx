/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css, jsx } from '@emotion/core'
import EditButton from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/EditButton',
  component: EditButton,
  argTypes: {
    color: {
      description:
        '버튼 `svg`의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마의 색상을 따릅니다.',
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
          title: '📝 EditButton',
          description:
            '편집 버튼입니다. 편집 버튼은 `<button>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryEditButtonProps {
  color: string
  children: ReactNode
}

const buttonTemplate: Story<StoryEditButtonProps> = (
  args,
  { globals: { theme } }
) => {
  const { color } = args
  const cssStyle = theme === 'default' && css({ color })

  return <EditButton css={cssStyle} />
}

export const DefaultEditButton = buttonTemplate
