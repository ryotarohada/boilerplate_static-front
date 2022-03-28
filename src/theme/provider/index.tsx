import React, { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { customThemeOptions } from '../options'

export const CustomThemeProvider: React.FC = ({ children }) => {
  const displayMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: displayMode ? 'dark' : 'light',
        },
        ...customThemeOptions,
      }),
    [displayMode],
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
