import { FC } from 'react'
import { Alert, AlertProps, Slide } from '@mui/material'

type Props = {} & AlertProps

export const CustomToast: FC<Props> = ({
  children = 'テキストを入れてください',
  sx = {
    maxWidth: 350,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  ...alertRestProps
}) => {
  return (
    <Slide in direction='up'>
      <Alert sx={sx} {...alertRestProps}>
        {children}
      </Alert>
    </Slide>
  )
}
