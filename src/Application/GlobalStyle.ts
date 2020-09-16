import { css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const globalStyle = css`
  ${emotionNormalize}
  body {
    overflow-x: hidden;
  }
`

export default globalStyle
