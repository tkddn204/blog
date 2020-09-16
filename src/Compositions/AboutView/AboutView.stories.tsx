/** @jsx jsx */
import { ReactNode } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import AboutView from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import { FetchState, About as AboutType } from '../../Types/firestoreSchema'

export default {
  title: 'Compositions/AboutView',
  component: AboutView,
  argTypes: {
    About: {
      description: '어바웃 내용',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '-',
        },
      },
      defaultValue: '어바웃',
      control: 'text',
    },
    fetchState: {
      description: '로딩 상태 변경',
      table: {
        type: {
          summary: ['loading', 'loaded', 'empty'],
        },
        defaultValue: {
          summary: 'loading',
        },
      },
      defaultValue: 'loading',
      control: {
        type: 'select',
        options: ['loading', 'loaded', 'empty'],
      },
    },
  },
  parameters: {
    docs: {
      page: () =>
        DocTemplate({
          title: '👲 About',
          description:
            '어바웃 뷰입니다. 어바웃 뷰는 `<article>` 태그 컴포넌트입니다.',
        }),
    },
  },
} as Meta

interface StoryAboutViewProps {
  about: AboutType
  fetchState: FetchState
  children: ReactNode
}

const AboutViewTemplate: Story<StoryAboutViewProps> = (args) => {
  const { about, fetchState } = args
  return <AboutView aboutObj={about} fetchState={fetchState} />
}

export const DefaultAboutView = AboutViewTemplate
