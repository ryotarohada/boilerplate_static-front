import React, { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { createAppThemeOptions } from '../options'

export const CustomThemeProvider: React.FC = ({ children }) => {
  const displayMode = useMediaQuery('(prefers-color-scheme: dark)')
  const options = createAppThemeOptions({ displayMode })
  const theme = useMemo(() => createTheme(options), [options])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
