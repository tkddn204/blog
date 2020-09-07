/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import useStyle from '../../Hooks/useStyle'
import { changeTheme } from '../../Features/theme/themeSlice'
import { themeSelector } from '../../Features/Selectors'
import MoonSVG from './MoonSVG'
import SunSvg from './SunSVG'

const style = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    outline: none;
  }
`

const darkStyle = () => css`
  color: white;
`

const ToggleDark: FCEP = ({ className }) => {
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
      css={useStyle(style, darkStyle)}
      onClick={toggleTheme}
      className={className}
    >
      {theme === 'dark' ? <MoonSVG /> : <SunSvg />}
    </motion.div>
  )
}

export default ToggleDark
