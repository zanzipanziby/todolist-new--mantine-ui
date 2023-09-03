import { Meta, StoryObj } from '@storybook/react'

import { AddItem } from './add-item.tsx'

const meta = {
  title: 'Component/AddItem',
  component: AddItem,
} satisfies Meta<typeof AddItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'New Item',
    fullWidth: true,
  },
}
