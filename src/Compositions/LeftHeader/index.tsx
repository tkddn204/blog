/** @jsx jsx */
import { FC, useState } from 'react'
import tw from 'twin.macro'
import { css, jsx } from '@emotion/core'
import { motion } from 'framer-motion'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'

import Logo from '../../Components/Logo'
import MemberMenu from '../../Components/LoginButton'
import { store } from '../../Application/Store'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const LeftHeaderStyle = css`
  ${tw`flex flex-row w-1/3`}
`

const LogoStyle = css`
  ${tw`z-10`}
`

const memberMenuContainerStyle = css`
  ${tw`flex items-center w-full relative overflow-hidden`}
  margin-left: -24px;
`

const memberMenuStyle = css`
  ${tw`absolute pl-3`}
`

type Props = DarkStyledProps

const LeftHeader: FC<Props> = ({ addStyleType, customTheme }) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  const { auth } = store.getState().firebase
  const [showMemberMenu, setShowMemberMenu] = useState(false)

  const showMenu = () => setShowMemberMenu(true)
  const hideMenu = () => setShowMemberMenu(false)

  return (
    <div
      css={[LeftHeaderStyle, darkStyle]}
      onFocus={showMenu}
      onMouseOver={showMenu}
      onMouseLeave={hideMenu}
      onTouchStart={showMenu}
      onTouchEnd={hideMenu}
    >
      <Logo css={LogoStyle} />
      <div css={memberMenuContainerStyle}>
        <motion.div
          initial="hide"
          animate={showMemberMenu ? 'show' : 'hide'}
          variants={{
            show: { left: 24 },
            hide: { left: -120 },
          }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          css={[memberMenuStyle]}
        >
          <MemberMenu auth={auth} />
        </motion.div>
      </div>
    </div>
  )
}

export default LeftHeader
