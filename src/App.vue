<script setup lang="ts">
import MSection from '@/components/MSection/MSection.vue'
import MSwitch from '@/components/MSwitch/MSwitch.vue'
import { onMounted, ref } from 'vue'

const checked = ref(false)

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <MSwitch v-model="checked" />

  <MSection
    title="Spelling and Grammar"
    description="Unless you are a Premium user, you won't see Last Seen or Online statuses for people with whom you don't share yours. Approximate times will be shown instead (recently, within a week, within a month)."
  >
    I'm {{ checked ? 'checked' : 'not checked' }}
  </MSection>
</template>
