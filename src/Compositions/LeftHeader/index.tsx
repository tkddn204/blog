/** @jsx jsx */
import { FCEP, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { motion } from 'framer-motion'

import Logo from '../../Components/Logo'
import MemberMenu from '../LoginButton'
import { store } from '../../Application/Store'

const LeftHeaderStyle = css`
  display: flex;
  width: 40%;
`

const LogoStyle = css`
  z-index: 10;
`

const memberMenuContainerStyle = css`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0 0 0 -1.4rem;
  background: transparent;
`

const memberMenuStyle = css`
  position: absolute;
  padding: 0 0 0 0.76rem;
`

const LeftHeader: FCEP = ({ className }) => {
  const { auth } = store.getState().firebase
  const [showMemberMenu, setShowMemberMenu] = useState(false)

  const showMenu = () => setShowMemberMenu(true)
  const hideMenu = () => setShowMemberMenu(false)

  return (
    <div
      css={LeftHeaderStyle}
      onFocus={showMenu}
      onMouseOver={showMenu}
      onMouseLeave={hideMenu}
      onTouchStart={showMenu}
      onTouchEnd={hideMenu}
      className={className}
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
          css={memberMenuStyle}
        >
          <MemberMenu auth={auth} />
        </motion.div>
      </div>
    </div>
  )
}

export default LeftHeader
