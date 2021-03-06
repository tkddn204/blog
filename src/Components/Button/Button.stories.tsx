/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css, jsx } from '@emotion/core'
import Button from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: '버튼 안에 들어가는 텍스트',
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
      defaultValue: '기본 버튼',
      control: 'text',
    },
    color: {
      description:
        '버튼 텍스트의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마의 색상을 따릅니다.',
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
          title: '🥮 Button',
          description:
            '버튼입니다. 버튼은 `<button>` 태그 컴포넌트입니다. 다른 버튼의 베이스가 될 수 있습니다.',
        }),
    },
  },
} as Meta

interface StoryButtonProps {
  color: string
  children: ReactNode
}

const buttonTemplate: Story<StoryButtonProps> = (
  args,
  { globals: { locale, theme } }
) => {
  const { color } = args
  const cssStyle = theme === 'default' && css({ color })
  const text = locale !== 'ko' ? 'Button' : args.children

  return <Button css={cssStyle}>{text}</Button>
}

export const DefaultButton = buttonTemplate
