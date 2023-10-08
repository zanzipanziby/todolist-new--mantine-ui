import { Meta, StoryObj } from '@storybook/react'

import { ButtonGroupComponent } from '../button-group'

import { EditableText } from './editable-text.tsx'

const meta = {
  title: 'Component/Editable Text',
  component: EditableText,
} satisfies Meta<typeof ButtonGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'New Tasks' },
}
