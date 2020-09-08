/** @jsx jsx */
import { FCEP } from 'react'
import 'github-markdown-css/github-markdown.css'
import { css, jsx } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import { FetchState, About } from '../../Types/firestore.schema'
import Article from '../../Components/Article'
import Section from '../../Components/Section'
import Loading from '../../Components/Loading'

const aboutStyle = css`
  width: 100%;
  padding: 0 5rem 0 5rem;
`

interface Props {
  aboutObj: About
  fetchState: FetchState
}

const AboutView: FCEP<Props> = ({ aboutObj, fetchState }) => {
  let Content
  switch (fetchState) {
    case FetchState.loaded:
      Content = (
        <Section css={aboutStyle}>
          <ReactMarkdown
            className="markdown-body"
            source={aboutObj && aboutObj.content}
          />
        </Section>
      )
      break
    default:
      Content = (
        <Section>
          <Loading />
        </Section>
      )
      break
  }

  return <Article>{Content}</Article>
}

export default AboutView
