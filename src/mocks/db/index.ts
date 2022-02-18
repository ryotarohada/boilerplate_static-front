import { User } from '@/types/api'

type MockDataBase = {
  users: User[]
}

export const mockDataBase: MockDataBase = {
  users: [
    {
      id: '1',
      name: 'Jesse Cash',
      image: 'images/jesse-cash.png',
    },
  ],
}
