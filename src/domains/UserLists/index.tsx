import { CircularProgress } from '@mui/material'
import { UserCard } from '@/components/parts/UserCard.tsx'
import type { User } from '@/types/api'

type Props = {
  users: User[] | undefined
}

export const UserLists: React.FC<Props> = ({ users }) => {
  if (!users) {
    return <CircularProgress />
  }
  return (
    <>
      {users.map((item) => (
        <UserCard {...item} key={item.id} />
      ))}
    </>
  )
}
