import { Box, SxProps } from '@mui/material'

const style: SxProps = {
  p: 5,
}

/** ページテンプレート */
export const Template: React.FC = ({ children }): JSX.Element => (
  <Box sx={style}>{children}</Box>
)
