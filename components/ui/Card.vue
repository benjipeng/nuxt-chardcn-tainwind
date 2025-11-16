<template>
  <div :class="cn('rounded-lg border border-border-subtle bg-bg-secondary text-text-primary shadow-sm', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
