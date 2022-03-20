import { ThemeOptions } from '@mui/material'
import { CustomThemeOptionsArg } from '@/theme/type'

export const createCustomPalette = (
  displayMode?: CustomThemeOptionsArg['displayMode'],
): ThemeOptions['palette'] => ({
  mode: displayMode ? 'dark' : 'light',
})
