/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { motion } from 'framer-motion'
import useStyle from '../../Hooks/useStyle'
import { commonTheme } from '../../Application/Theme'
import { ThemeType } from '../../Types/theme'

const LoadingContainerStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.5);
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  border: solid 0.1rem ${theme.color.gray['4']};
`

const boxStyle = (boxColor: string) => css`
  background: ${boxColor};
  width: 1.25rem;
  height: 75%;
`

const Loading: FCEP = ({ className }) => (
  <div css={useStyle(LoadingContainerStyle)} className={className}>
    {[
      commonTheme.color.green['2'],
      commonTheme.color.green['4'],
      commonTheme.color.green['6'],
    ].map((boxColor, index) => {
      return (
        <motion.div
          key={Math.random()}
          animate={{
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            loop: Infinity,
            duration: 1.5,
            delay: (index + 1) / 2,
          }}
          css={boxStyle(boxColor)}
        />
      )
    })}
  </div>
)

export default Loading
