import { ThemeOptions } from '@mui/material'
import { CustomThemeOptionsArg } from '@/theme/type'

export const createCustomPalette = (
  prefersColorScheme: CustomThemeOptionsArg['prefersColorSchema'],
): ThemeOptions['palette'] => ({
  mode: prefersColorScheme ? 'dark' : 'light',
})
