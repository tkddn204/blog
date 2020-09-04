/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { css, jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw`bg-white bg-opacity-75`,
  defaultDark: tw`dark:bg-white dark:bg-opacity-75`,
}

const dividerStyle = css`
  ${tw`bg-black bg-opacity-25`}
  ${{ width: '0.5px' }}
`

type Props = DarkStyledProps

const Divider: FC<Props> = ({ addStyleType, customTheme, className }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return <div css={[dividerStyle, darkStyle]} className={className} />
}

export default Divider
