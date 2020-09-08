/** @jsx jsx */
import React, { FCEP } from 'react'
import { css, jsx } from '@emotion/core'
import { useDispatch } from 'react-redux'
import { FirebaseReducer } from 'react-redux-firebase'
import { signInGoogle, signOut } from '../../Features/auth/authThunk'
import Button from '../../Components/Button'
import GoogleLogo from './GoogleLogo'

const memberMenuStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`

interface Props {
  auth: Partial<FirebaseReducer.AuthState>
}

const MemberMenu: FCEP<Props> = ({ auth, className }) => {
  const dispatch = useDispatch()

  const onClickButton = () =>
    auth.isEmpty ? dispatch(signInGoogle()) : dispatch(signOut())

  return (
    <div css={memberMenuStyle} className={className}>
      {!auth.isLoaded ? (
        'Loading...'
      ) : (
        <Button onClick={onClickButton} custom={['circle']}>
          {!auth.isEmpty ? (
            'Logout'
          ) : (
            <React.Fragment>
              <GoogleLogo
                css={css`
                  margin: 0 0.75rem 0 0;
                `}
              />
              Login
            </React.Fragment>
          )}
        </Button>
      )}
    </div>
  )
}

export default MemberMenu
