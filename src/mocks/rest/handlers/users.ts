import { rest } from 'msw'
import { mockDataBase } from '@/mocks/db'
import { User } from '@/types/api'

export type UsersResponse = {
  users: User[]
}

export const userRestHandler = rest.get<UsersResponse>(
  '/api/users',
  (req, res, ctx) => {
    return res(
      ctx.json({
        users: mockDataBase.users,
      }),
    )
  },
)
