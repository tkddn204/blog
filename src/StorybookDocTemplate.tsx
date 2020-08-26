import React, { FC } from 'react'
import styled from '@emotion/styled'
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks'

export interface DocContent {
  title: string
  subtitle?: string
  description?: string
}

const StyledSubTitle = styled('h2')`
  font-size: 24px;
  color: black;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
`

const DocTemplate: FC<DocContent> = (docContent: DocContent) => (
  <>
    <Title>{docContent.title}</Title>
    <Description>{docContent.description}</Description>
    <StyledSubTitle>🏃 Example</StyledSubTitle>
    <Primary />
    <StyledSubTitle>🧲 Props</StyledSubTitle>
    <ArgsTable story={PRIMARY_STORY} exclude={['theme']} />
    <Stories />
  </>
)

export default DocTemplate
