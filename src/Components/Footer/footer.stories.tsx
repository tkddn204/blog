/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import { Trans } from 'react-i18next'
import Footer from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    children: {
      description: '푸터 안에 들어가는 하위 노드들입니다.',
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
      defaultValue: <Trans>footer</Trans>,
      control: 'object',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '🦶 Footer',
          description: '푸터입니다. 푸터는 `<footer>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

const FooterTemplate: Story = (args) => {
  return <Footer>{args.children}</Footer>
}

export const DefaultFooter = FooterTemplate
