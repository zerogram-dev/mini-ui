import type { Meta, StoryObj } from '@storybook/vue3'
import MText from './MText.vue'

const meta: Meta<typeof MText> = {
  component: MText,
}

export default meta

type Story = StoryObj<typeof MText>

export const Primary: Story = {
  render: args => ({
    components: { MText },
    setup: () => {
      return { args }
    },
    template: `<MText v-bind="args">Hi there!</MText>`,
  }),
  args: {
    as: 'h1',
  },
}
