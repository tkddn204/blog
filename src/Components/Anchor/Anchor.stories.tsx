/** @jsx jsx */
import { ReactNode } from 'react'
import { css, jsx } from '@emotion/core'
import { Meta, Story } from '@storybook/react/types-6-0'
import Anchor from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { commonTheme } from '../../Application/Theme'

export default {
  title: 'Components/Anchor',
  component: Anchor,
  argTypes: {
    children: {
      description: '앵커 안에 들어가는 텍스트',
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
      defaultValue: '기본 앵커',
      control: 'text',
    },
    color: {
      description:
        '앵커의 색을 지정합니다. 올바른 색상 문자열이 아닐 경우 테마 앵커의 색상을 따릅니다.',
      defaultValue: commonTheme.color.pink['5'],
      table: {
        type: {
          summary: 'color',
        },
        defaultValue: {
          summary: commonTheme.color.pink['5'],
        },
      },
      control: 'color',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🍎 Anchor',
          description: '앵커입니다. 앵커는 `<a>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryAnchorProps {
  color: string
  children: ReactNode
}
const anchorTemplate: Story<StoryAnchorProps> = (
  args,
  { globals: { locale, theme } }
) => {
  const { color } = args
  const cssStyle = theme === 'default' && css({ color })
  const text = locale !== 'ko' ? 'Anchor' : args.children

  return <Anchor css={cssStyle}>{text}</Anchor>
}

export const DefaultAnchor = anchorTemplate
