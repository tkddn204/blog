import React, { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from './themeSlice'
import { themeSelector } from '../Selectors'

type Props = {
  children: ReactNode
}

const SelectThemeProvider: FC<Props> = ({ children }: Props) => {
  const dispatch = useDispatch()
  const theme = useSelector(themeSelector)

  useEffect(() => {
    if (theme !== 'dark') {
      dispatch(changeTheme('dark'))
    }
  }, [theme, dispatch])

  return <>{children}</>
}

export default SelectThemeProvider
