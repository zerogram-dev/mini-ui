<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <div
    :class="$style.switch"
    :data-checked="modelValue ? '' : null"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <input
      type="checkbox"
      :class="$style.switchInput"
      :checked="modelValue"
      role="switch"
      :aria-checked="modelValue"
    >
    <span :class="$style.switchThumb" />
  </div>
</template>

<style module>
.switch {
  width: 32px;
  height: 20px;
  background: var(--mini-c-switch-unchecked-bg);
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.switchInput {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.switchThumb {
  background: var(--mini-c-switch-thumb);
  width: 18px;
  height: 18px;
  position: absolute;
  top: 1px;
  left: 1px;
}

.switch,
.switchThumb {
  border-radius: 10px;
}

.switch[data-checked] {
  background: var(--mini-c-switch-checked-bg);
}

.switch[data-checked] .switchThumb {
  left: 13px;
}
</style>
