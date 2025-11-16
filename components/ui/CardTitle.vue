<template>
  <h3 :class="cn('font-display text-2xl font-bold leading-none tracking-tight text-text-primary', props.class)">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
