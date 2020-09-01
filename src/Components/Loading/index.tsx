/** @jsx jsx */
import { FC } from 'react'
import tw, { TwStyle } from 'twin.macro'
import { jsx } from '@emotion/core'
import { motion } from 'framer-motion'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  light: tw``,
  dark: tw``,
  defaultDark: tw``,
}

const LoadingContainerStyle = tw`
  flex flex-row items-center justify-between
  bg-white bg-opacity-50
  w-20 h-20
  p-2
  rounded
  border border-gray-400
`

const Box = tw(motion.div)`
  w-4 h-odds
`

type Props = DarkStyledProps

const Loading: FC<Props> = ({ addStyleType, custom }) => {
  const darkStyle = useDarkStyle(style, addStyleType, custom)
  return (
    <div css={[LoadingContainerStyle, darkStyle]}>
      {[tw`bg-green-200`, tw`bg-green-400`, tw`bg-green-600`].map(
        (boxColor: TwStyle, index: number) => {
          return (
            <Box
              animate={{
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                loop: Infinity,
                duration: 1.5,
                delay: (index + 1) / 2,
              }}
              css={boxColor}
            />
          )
        }
      )}
    </div>
  )
}

export default Loading
