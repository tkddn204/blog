/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/core'
import { Meta, Story } from '@storybook/react/types-6-0'
import Section from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    children: {
      description: '섹션 내부에 들어가는 컴포넌트입니다.',
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
      defaultValue: '기본 섹션',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '📖 Section',
          description: '섹션입니다. 섹션은 `<Section>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StorySectionProps {
  children: ReactNode
}
const SectionTemplate: Story<StorySectionProps> = (
  args,
  { globals: { locale } }
) => {
  const text = locale !== 'ko' ? 'Section' : args.children

  return <Section>{text}</Section>
}

export const DefaultSection = SectionTemplate
