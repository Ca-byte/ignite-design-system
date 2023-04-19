import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
