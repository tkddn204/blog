/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import Header from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    children: {
      description: '헤더 안에 들어가는 하위 노드들입니다.',
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
      defaultValue: [<LeftHeader />, <RightHeader />],
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

const headerTemplate: Story = (args) => {
  return <Header>{args.children}</Header>
}

export const DefaultHeader = headerTemplate
