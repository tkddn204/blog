import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { LightTheme, DarkTheme } from '../../Application/Theme'
import { themeSelector } from '../Selectors'

type Props = {
  children: ReactNode
}

const SelectThemeProvider: FC<Props> = ({ children }: Props) => {
  const theme = useSelector(themeSelector)

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default SelectThemeProvider
