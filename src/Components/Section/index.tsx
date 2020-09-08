/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle, { ThemedStyles } from '../../Hooks/useStyle'

const style = () => css`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  background: transparent;
  width: 100%;
`

const darkStyle = () => css`
  color: rgba(255, 255, 255, 0.9);
`

const customStyle: Record<string, ThemedStyles> = {
  center: () => css`
    align-items: center;
    justify-content: center;
  `,
}

interface Props {
  custom?: string[]
}

const Section: FCEP<Props> = ({ children, className, custom = [] }) => {
  const customStyles = custom.map((cus) => customStyle[cus])
  return (
    <section
      css={useStyle(style, darkStyle, customStyles)}
      className={className}
    >
      {children}
    </section>
  )
}

export default Section
