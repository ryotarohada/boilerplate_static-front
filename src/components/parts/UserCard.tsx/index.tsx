import {
  Card,
  CardContent,
  CardMedia,
  CardProps,
  Stack,
  Typography,
} from '@mui/material'

type Props = {
  id: string
  image: string
  name: string
} & CardProps

export const UserCard: React.FC<Props> = ({
  id,
  image,
  name,
  sx = { maxWidth: 350, padding: 3, borderRadius: 3 },
  ...cardRestProps
}) => {
  return (
    <Card sx={sx} {...cardRestProps}>
      <CardMedia
        component='img'
        image={image}
        alt={name}
        sx={{ height: 250, borderRadius: 3 }}
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography component='span'>{id}</Typography>
          <Typography component='h2' fontSize={25} fontWeight='bold'>
            {name}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
