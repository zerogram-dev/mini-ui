<script setup lang="ts">
import MText from '@/components/MText/MText.vue'

defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <section :class="$style.section">
    <header v-if="title" :class="$style.sectionHeader">
      <MText as="h3" upper variant="footnote">
        {{ title }}
      </MText>
      <slot name="header-trailing" />
    </header>
    <div :class="$style.sectionBody">
      <slot />
    </div>
    <footer v-if="description" :class="$style.sectionFooter">
      <MText as="p" variant="footnote">
        {{ description }}
      </MText>
    </footer>
  </section>
</template>

<style module>
.section {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.sectionHeader {
  color: var(--mini-c-section-header);
  padding-left: 14px;
  padding-bottom: 5px;
}

.sectionBody {
  background: var(--mini-c-section-bg);
  border-radius: 10px;
}

.sectionFooter {
  color: var(--mini-c-section-footer);
  padding-left: 14px;
  padding-top: 5px;
}
</style>
