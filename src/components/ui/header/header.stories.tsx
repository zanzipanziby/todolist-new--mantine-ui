import { Meta, StoryObj } from '@storybook/react'

import { HeaderComponent } from './header.tsx'

const meta = {
  title: 'Component/Header',
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    isLoggedIn: true,
  },
}
