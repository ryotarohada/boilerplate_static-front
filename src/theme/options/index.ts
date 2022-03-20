import { ThemeOptions } from '@mui/material'
import { CustomThemeOptionsArg } from '@/theme/type'
import { createCustomPalette } from '@/theme/options/palette'
import { customTypography } from '@/theme/options/typography'

export const createAppThemeOptions = ({
  prefersColorSchema,
}: CustomThemeOptionsArg): ThemeOptions => ({
  palette: createCustomPalette(prefersColorSchema),
  typography: customTypography,
})
