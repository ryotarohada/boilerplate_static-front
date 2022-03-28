import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ItemCard } from '.'

type StoryMeta = ComponentMeta<typeof ItemCard>
type StoryObj = ComponentStoryObj<typeof ItemCard>

export default { component: ItemCard } as StoryMeta

export const Index: StoryObj = {
  args: {
    id: '1',
    name: 'Item_1',
    price: 5000,
    quantity: 10,
  },
}
