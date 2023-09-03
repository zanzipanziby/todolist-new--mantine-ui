import type { Preview } from '@storybook/react'

import '../src/index.scss'
import { MantineProvider } from '@mantine/core'

const preview: Preview = {
  decorators: [
    Story => (
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <Story />
      </MantineProvider>
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
