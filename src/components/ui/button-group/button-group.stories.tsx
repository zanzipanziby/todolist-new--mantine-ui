import { Meta, StoryObj } from '@storybook/react'

import { ButtonGroupComponent } from './button-group.tsx'

const meta = {
  title: 'Component/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: {
    filterValue: {
      options: ['all', 'active', 'completed'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ButtonGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filterValue: 'all',
  },
}
