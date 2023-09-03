import { Meta, StoryObj } from '@storybook/react'

import { Login } from './login.tsx'

const meta = {
  title: 'Auth/Login',
  component: Login,
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
