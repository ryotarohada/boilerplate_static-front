import { CircularProgress, Stack } from '@mui/material'
import { ItemCard } from '@/components/parts/ItemCard'
import type { Item } from '@/types/api'

type Props = {
  items: Item[] | undefined
}

export const UserLists: React.FC<Props> = ({ items }) => {
  if (!items) {
    return <CircularProgress />
  }
  return (
    <Stack direction='row' spacing={5} my={5}>
      {items.map((item) => (
        <ItemCard {...item} key={item.id} />
      ))}
    </Stack>
  )
}
