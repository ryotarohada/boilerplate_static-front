import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  SxProps,
} from '@mui/material'

type Props = {
  id: string
  image: string
  name: string
}

export const UserCard: React.FC<Props> = ({ id, image, name }) => {
  const cardStyle: SxProps = { maxWidth: 350, padding: 3, borderRadius: 3 }
  const cardMediaStyle: SxProps = { height: 250, borderRadius: 3 }

  return (
    <Card sx={cardStyle}>
      <CardMedia component='img' image={image} alt={name} sx={cardMediaStyle} />
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
