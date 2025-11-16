<template>
  <AccordionContent
    v-bind="forwarded"
    :class="cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      props.class
    )"
  >
    <div class="pb-4 pt-0 text-text-secondary font-body">
      <slot />
    </div>
  </AccordionContent>
</template>

<script setup lang="ts">
import { AccordionContent } from 'radix-vue'
import type { AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionContentProps & { class?: string }>()

const forwarded = computed(() => {
  const { class: _, ...rest } = props
  return rest
})
</script>
