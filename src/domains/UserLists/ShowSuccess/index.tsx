import { UserCard } from '@/components/parts/UserCard.tsx'
import { User } from '@/types/api'

type Props = {
  users: User[]
}

export const UserListsSuccess: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((item) => (
        <UserCard {...item} key={item.id} />
      ))}
    </>
  )
}
