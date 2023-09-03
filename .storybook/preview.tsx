import type { Preview } from '@storybook/react'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '../src/index.scss'

const preview: Preview = {
  decorators: [
    Story => (
      <Theme appearance={'dark'}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
