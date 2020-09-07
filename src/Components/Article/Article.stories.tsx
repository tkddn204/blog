import React, { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Article from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'

export default {
  title: 'Components/Article',
  component: Article,
  argTypes: {
    children: {
      description: '아티클 내부에 들어가는 컴포넌트입니다.',
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
      defaultValue: '기본 아티클',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '📖 Article',
          description:
            '아티클입니다. 아티클은 `<article>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryArticleProps {
  children: ReactNode
}
const ArticleTemplate: Story<StoryArticleProps> = (
  args,
  { globals: { locale } }
) => {
  const text = locale !== 'ko' ? 'Article' : args.children

  return <Article>{text}</Article>
}

export const DefaultArticle = ArticleTemplate
