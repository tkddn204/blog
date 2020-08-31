/** @jsx jsx */
import { Meta, Story } from '@storybook/react/types-6-0'
import { jsx } from '@emotion/core'
import Header from '.'
import DocTemplate from '../../Utils/StorybookDocTemplate'
import Logo from '../Logo'
import NavList from '../../Compositions/NavList'
import Nav from '../Nav'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    children: {
      description: '헤더 안에 들어가는 ReactNode',
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

const headerTemplate: Story = () => {
  return (
    <Header>
      <Logo />
      <NavList>
        <Nav key="nav-about" link="/about">
          About
        </Nav>
        <Nav key="nav-blog" link="/blog">
          Blog
        </Nav>
      </NavList>
    </Header>
  )
}

export const DefaultHeader = headerTemplate
