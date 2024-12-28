<script setup lang="ts">
import { capitalize } from '@/utils/text'

withDefaults(
  defineProps<{
    as?: keyof HTMLElementTagNameMap
    variant?: 'body' | 'footnote'
    upper?: boolean
  }>(),
  {
    as: 'span',
    variant: 'body',
    upper: false,
  },
)
</script>

<template>
  <component
    :is="as"
    :class="[
      $style.text,
      upper && $style.textUpper,
      variant && $style[`text${capitalize(variant)}`],
    ]"
  >
    <slot />
  </component>
</template>

<style module>
.text {
  /* TODO */
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", Arial, sans-serif;
}

.textUpper {
  text-transform: uppercase;
}

.textBody {
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: -0.009375em;
}

.textFootnote {
  font-size: 0.71875rem;
  line-height: 0.875rem;
  letter-spacing: 0.001875em;
}
</style>
