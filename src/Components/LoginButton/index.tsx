/** @jsx jsx */
import { FC, StrictMode } from 'react'
import tw from 'twin.macro'
import { css, jsx } from '@emotion/core'
import { useDispatch } from 'react-redux'
import { FirebaseReducer } from 'react-redux-firebase'
import useDarkStyle, {
  DarkStyledProps,
  DarkStyleType,
} from '../../Hooks/useDarkStyle'
import Button from '../Button'
import { signInGoogle, signOut } from '../../Features/auth/authThunk'
import GoogleLogo from './GoogleLogo'

const style: DarkStyleType = {
  dark: tw``,
  defaultDark: tw``,
}

const MemberMenuStyle = css`
  ${tw`
    flex items-center justify-center
    bg-transparent
  `}
`

interface Props extends DarkStyledProps {
  auth: Partial<FirebaseReducer.AuthState>
}

const MemberMenu: FC<Props> = ({
  auth,
  addStyleType,
  customTheme,
  className,
}) => {
  const darkStyle = useDarkStyle(style, addStyleType, customTheme)
  const dispatch = useDispatch()

  const onClickButton = () =>
    auth.isEmpty ? dispatch(signInGoogle()) : dispatch(signOut())

  return (
    <div css={[MemberMenuStyle, darkStyle]} className={className}>
      {!auth.isLoaded ? (
        'Loading...'
      ) : (
        <Button addStyleType={['circle']} onClick={onClickButton}>
          {!auth.isEmpty ? (
            'Logout'
          ) : (
            <StrictMode>
              <GoogleLogo
                css={css`
                  ${tw`mr-3`}
                `}
              />
              Login
            </StrictMode>
          )}
        </Button>
      )}
    </div>
  )
}

export default MemberMenu
