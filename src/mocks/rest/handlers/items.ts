import { rest } from 'msw'
import { mockDataBase } from '@/mocks/db'
import { Item } from '@/types/api'

export const userRestHandler = rest.get<{ items: Item[] }>(
  '/api/items',
  (req, res, ctx) => {
    return res(
      ctx.json({
        items: mockDataBase.items,
      }),
    )
  },
)
