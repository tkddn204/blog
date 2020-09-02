/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import RightHeader from './index'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Compositions/RightHeader',
  component: RightHeader,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🤜 RightHeader',
          description:
            '헤더의 오른쪽 부분입니다. `<NavList>`와 `<ToggleDark>`로 구성되어 있습니다.',
        }),
    },
  },
} as Meta

const RightHeaderTemplate: Story = () => {
  return <RightHeader />
}

export const DefaultRightHeader = RightHeaderTemplate
