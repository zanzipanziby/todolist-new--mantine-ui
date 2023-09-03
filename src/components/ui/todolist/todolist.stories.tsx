import { Meta, StoryObj } from '@storybook/react'

import { Todolist } from './todolist.tsx'

const meta = {
  title: 'Component/Todolist',
  component: Todolist,
} satisfies Meta<typeof Todolist>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'New Todo',
    tasks: [
      { id: '1', title: 'HTML', isDone: true },
      { id: '2', title: 'CSS', isDone: true },
      { id: '3', title: 'JS', isDone: false },
      { id: '4', title: 'React', isDone: false },
    ],
  },
}
