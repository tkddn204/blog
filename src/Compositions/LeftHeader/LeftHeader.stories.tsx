/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import LeftHeader from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Compositions/LeftHeader',
  component: LeftHeader,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🤛 LeftHeader',
          description:
            '헤더의 왼쪽 부분입니다. `<Logo>`와 `<LoginButton>`로 구성되어 있습니다.',
        }),
    },
  },
} as Meta

const LeftHeaderTemplate: Story = () => {
  return <LeftHeader />
}

export const DefaultLeftHeader = LeftHeaderTemplate
