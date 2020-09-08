/** @jsx jsx */
import { FCEP } from 'react'
import 'github-markdown-css/github-markdown.css'
import { css, jsx } from '@emotion/core'
import { About, FetchState } from '../../Types/firestore.schema'
import Article from '../../Components/Article'
import Loading from '../../Components/Loading'
import MarkdownViewer from '../../Components/MarkdownViwer'

const aboutContainerStyle = css`
  flex: 1;
  max-width: 1000px;
  padding: 0 5rem;
`

interface Props {
  aboutObj: About
  fetchState: FetchState
}

const AboutView: FCEP<Props> = ({ aboutObj, fetchState }) => {
  let Content
  switch (fetchState) {
    case FetchState.loaded:
      Content = <MarkdownViewer source={aboutObj && aboutObj.content} />
      break
    default:
      Content = <Loading />
      break
  }

  return <Article css={aboutContainerStyle}>{Content}</Article>
}

export default AboutView
