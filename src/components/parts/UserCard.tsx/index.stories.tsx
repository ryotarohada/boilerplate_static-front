import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { UserCard } from '.'

type StoryMeta = ComponentMeta<typeof UserCard>
type StoryObj = ComponentStoryObj<typeof UserCard>

export default { component: UserCard } as StoryMeta

export const Index: StoryObj = {
  args: {
    id: '1',
    name: 'Jesse Cash',
    image: `images/jesse-cash.png`,
  },
}
