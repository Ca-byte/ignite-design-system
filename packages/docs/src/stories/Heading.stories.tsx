import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@cabytes-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custum title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default Heading will always be an `H2` but can be changed with the `as` property',
      },
    },
  },
}
