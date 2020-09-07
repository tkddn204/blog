/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { css, jsx } from '@emotion/core'
import Loading from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '⏱ Loading',
          description:
            '로딩입니다. 로고는 `<svg>` 태그 컴포넌트입니다. **테마의 영향을 받지 않습니다.**',
          excludes: ['ref'],
        }),
    },
  },
} as Meta

interface StoryLoadingProps {
  color: string
  children: ReactNode
}
const LoadingTemplate: Story<StoryLoadingProps> = (
  args,
  { globals: { theme } }
) => {
  const { color } = args
  const cssStyle = theme === 'default' && css({ color })

  return <Loading css={cssStyle} />
}

export const DefaultLoading = LoadingTemplate
