/** @jsx jsx */
import { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavList from '../../Components/NavList'
import NavItem from '../../Components/NavItem'
import ToggleDark from '../../Components/ToggleDark'
import Divider from '../../Components/Divider'
import EditButton from '../../Components/EditButton'
import { store } from '../../Application/Store'
import { ProfileSelector } from '../../Features/Selectors'

const rightHeaderStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-left: 1rem;
  }
`

const RightHeader: FCEP = ({ className }) => {
  const { auth } = store.getState().firebase
  const location = useLocation()
  const history = useHistory()
  const profile = useSelector(ProfileSelector)

  const onClickEditButton = () => {
    const path = location.pathname
    if (path.startsWith('/about')) {
      history.push('/about/edit')
    } else if (path.startsWith('/post') && path.length >= 6) {
      history.push(`/post/edit/${path.substring(6)}`)
    }
  }

  return (
    <div css={rightHeaderStyle} className={className}>
      {!profile.isEmpty && profile.role === 'admin' && (
        <EditButton
          css={css`
            visibility: ${!auth.isEmpty ? 'visible' : 'hidden'};
          `}
          onClick={onClickEditButton}
        />
      )}
      <NavList>
        <NavItem key="nav-about" link="/about">
          About
        </NavItem>
        <NavItem key="nav-blog" link="/blog">
          Blog
        </NavItem>
      </NavList>
      <Divider />
      <ToggleDark />
    </div>
  )
}

export default RightHeader
