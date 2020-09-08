/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import useStyle from '../../Hooks/useStyle'

const style = () => css``

const darkStyle = () => css`
  color: rgba(255, 255, 255, 0.9);
`

interface Props {
  source: string
}

const MarkdownViewer: FCEP<Props> = ({ className, source }) => (
  <ReactMarkdown
    css={useStyle(style, darkStyle)}
    className={`markdown-body ${className}`}
    skipHtml={false}
    escapeHtml={false}
    source={source}
  />
)

export default MarkdownViewer
