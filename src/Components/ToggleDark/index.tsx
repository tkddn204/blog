/** @jsx jsx */
import { FC } from 'react'
import tw from 'twin.macro'
import { jsx } from '@emotion/core'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import { changeTheme } from '../../Features/theme/themeSlice'
import { themeSelector } from '../../Features/Selectors'
import MoonSVG from './MoonSVG'
import SunSvg from './SunSVG'

const style: DarkStyleType = {
  dark: tw`text-white`,
  defaultDark: tw`dark:text-white`,
}

const ToggleDarkStyle = tw`
    inline-flex items-center justify-center
    align-middle
    w-6 h-6
    bg-transparent
    outline-none
    cursor-pointer
    rounded-sm
    focus:outline-none`

type Props = DarkStyledProps

const ToggleDark: FC<Props> = ({ addStyleType, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  const dispatch = useDispatch()

  const theme = useSelector(themeSelector)

  const toggleTheme = () => {
    dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <motion.div
      whileHover={{
        rotate: -45,
      }}
      css={[ToggleDarkStyle, darkStyle]}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <MoonSVG /> : <SunSvg />}
    </motion.div>
  )
}

export default ToggleDark
