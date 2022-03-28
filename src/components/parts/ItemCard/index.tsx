import { Card, CardContent, CardProps, Stack, Typography } from '@mui/material'
import { Item } from '@/types/api'

type Props = {} & Item & CardProps

export const ItemCard: React.FC<Props> = ({
  id,
  name,
  price,
  quantity,
  sx = { maxWidth: 350, padding: 3, borderRadius: 3 },
  ...cardRestProps
}) => {
  return (
    <Card sx={sx} {...cardRestProps}>
      <CardContent>
        <Stack spacing={1}>
          <Typography component='span'>Item ID : {id}</Typography>
          <Typography component='span'>Item Name : {name}</Typography>
          <Typography component='span'>Item Price : {price}</Typography>
          <Typography component='span'>Item quantity : {quantity}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
