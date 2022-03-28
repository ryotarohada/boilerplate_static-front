import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { CustomToast } from '.'

type StoryMeta = ComponentMeta<typeof CustomToast>
type StoryObj = ComponentStoryObj<typeof CustomToast>

export default { component: CustomToast } as StoryMeta

export const Index: StoryObj = {
  args: {
    severity: 'success',
    variant: undefined,
  },
  argTypes: {
    severity: {
      options: ['error', 'warning', 'info', 'success'],
      control: { type: 'radio' },
    },
    variant: {
      options: [undefined, 'outlined', 'filled'],
      control: { type: 'radio' },
    },
  },
}
