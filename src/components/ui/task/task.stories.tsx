import { Meta, StoryObj } from '@storybook/react'

import { Task } from './'

const meta = {
  title: 'Component/Task',
  component: Task,
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'New Task',
    isDone: true,
  },
}
