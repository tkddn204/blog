import React, { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { changeTheme } from './themeSlice'
import { ThemeSelector } from '../Selectors'
import { commonTheme } from '../../Application/Theme'

type Props = {
  children: ReactNode
}

const SelectThemeProvider: FC<Props> = ({ children }: Props) => {
  const dispatch = useDispatch()
  const theme = useSelector(ThemeSelector)

  useEffect(() => {
    if (theme !== 'dark') {
      dispatch(changeTheme('dark'))
    }
  }, [theme, dispatch])

  return <ThemeProvider theme={commonTheme}>{children}</ThemeProvider>
}

export default SelectThemeProvider
