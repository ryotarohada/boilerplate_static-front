import { FC } from 'react'
import { Alert, AlertProps, Box, Slide, SxProps } from '@mui/material'

type Props = {
  message: string
} & AlertProps

const alertWrapperSx: SxProps = {
  width: '100vw',
  maxWidth: 400,
  px: 2,
  position: 'absolute',
  bottom: 20,
  left: 0,
  right: 0,
  margin: 'auto',
}

export const CustomToast: FC<Props> = ({
  message = 'テキストを入れてください',
  ...alertRestProps
}) => {
  return (
    <Slide in direction='up'>
      <Box sx={alertWrapperSx}>
        <Alert {...alertRestProps}>{message}</Alert>
      </Box>
    </Slide>
  )
}
