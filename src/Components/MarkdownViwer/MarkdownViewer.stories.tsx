/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import MarkdownViewer from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/MarkdownViewer',
  component: MarkdownViewer,
  argTypes: {
    source: {
      description: '헤더 안에 들어가는 마크다운 텍스트입니다.',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'Markdown Text',
        },
        defaultValue: {
          summary: '-',
        },
      },
      defaultValue: `# 제목
      
      내용
      
      - 리스트1
      - 리스트2`,
      control: 'text',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '👀 MarkdownViewer',
          description:
            '마크다운 뷰어입니다. 마크다운 뷰어는 `react-markdown`을 사용하는 컴포넌트입니다.',
        }),
    },
  },
} as Meta

const markdownViewerTemplate: Story = (args) => {
  return <MarkdownViewer source={args.source} />
}

export const DefaultMarkdownViewer = markdownViewerTemplate
