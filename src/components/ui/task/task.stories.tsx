import { Meta, StoryObj } from '@storybook/react'

import { Task } from './'

const meta = {
  title: 'Component/Task',
  component: Task,
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'New Task',
    isDone: true,
  },
}
