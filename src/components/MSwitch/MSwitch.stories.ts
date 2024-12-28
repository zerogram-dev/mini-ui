import type { Meta, StoryObj } from '@storybook/vue3'
import MSwitch from './MSwitch.vue'

const meta: Meta<typeof MSwitch> = {
  component: MSwitch,
  args: {
    modelValue: false,
  },
  argTypes: {
    'modelValue': {
      control: 'boolean',
    },
    'onUpdate:modelValue': {
      action: 'update:modelValue',
    },
  },
}

export default meta

type Story = StoryObj<typeof MSwitch>

export const Primary: Story = {
  render: args => ({
    components: { MSwitch },
    setup() {
      return { args }
    },
    template: `<MSwitch v-model="args.modelValue" @update:modelValue="args['onUpdate:modelValue']" />`,
  }),
}
