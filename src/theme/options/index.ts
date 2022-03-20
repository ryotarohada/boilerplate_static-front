import { ThemeOptions } from '@mui/material'
import { CustomThemeOptionsArg } from '@/theme/type'
import { createCustomPalette } from '@/theme/options/palette'
import { customTypography } from '@/theme/options/typography'

export const createAppThemeOptions = ({
  displayMode,
}: CustomThemeOptionsArg): ThemeOptions => ({
  palette: createCustomPalette(displayMode),
  typography: customTypography,
})
