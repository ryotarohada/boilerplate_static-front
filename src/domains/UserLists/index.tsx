import useSWR from 'swr'
import { UserListsSuccess } from '@/domains/UserLists/ShowSuccess'
import { UserListsShowLoading } from '@/domains/UserLists/ShowLoading'
import { UserListsShowError } from '@/domains/UserLists/ShowError'
import { UsersResponse } from '@/mocks/rest/handlers/users'
import { API_ENDPOINT } from '@/lib/env'

type Props = {}

export const UserLists: React.FC<Props> = () => {
  const { data, error } = useSWR<UsersResponse>(`${API_ENDPOINT}/users`)

  if (error) {
    return <UserListsShowError />
  }
  if (!data) {
    return <UserListsShowLoading />
  }
  return <UserListsSuccess users={data.users} />
}
