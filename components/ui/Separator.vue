<template>
  <SeparatorRoot
    v-bind="forwarded"
    :class="cn(
      'shrink-0 bg-border-default',
      props.orientation === 'vertical' ? 'h-full w-[1px]' : 'h-[1px] w-full',
      props.class
    )"
  />
</template>

<script setup lang="ts">
import { SeparatorRoot } from 'radix-vue'
import type { SeparatorRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<SeparatorRootProps & { class?: string }>(),
  {
    orientation: 'horizontal',
    decorative: true,
  }
)

const forwarded = computed(() => {
  const { class: _, ...rest } = props
  return rest
})
</script>
