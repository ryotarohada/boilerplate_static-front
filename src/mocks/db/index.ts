import { Item } from '@/types/api'

type MockDataBase = {
  items: Item[]
}

export const mockDataBase: MockDataBase = {
  items: [
    {
      id: '1',
      name: 'item_1',
      price: 500,
      quantity: 5,
    },
    {
      id: '2',
      name: 'item_1',
      price: 1000,
      quantity: 10,
    },
    {
      id: '3',
      name: 'item_3',
      price: 10000,
      quantity: 0,
    },
  ],
}
