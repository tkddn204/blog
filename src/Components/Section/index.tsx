/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const SectionStyle = tw`
  flex flex-col justify-center
  bg-transparent my-3
`

type Props = DarkStyledProps

const Section: FC<Props> = ({
  addStyleType,
  children,
  customTheme,
  className,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  return (
    <section css={[SectionStyle, darkStyle]} className={className}>
      {children}
    </section>
  )
}

export default Section
