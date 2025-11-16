<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="forwarded"
      :class="cn(
        'flex flex-1 items-center justify-between py-4 font-display font-medium transition-all hover:text-cockpit-green-text [&[data-state=open]>svg]:rotate-180',
        props.class
      )"
    >
      <slot />
      <slot name="icon">
        <Icon
          name="lucide:chevron-down"
          class="h-4 w-4 shrink-0 transition-transform duration-200 text-text-tertiary"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from 'radix-vue'
import type { AccordionTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionTriggerProps & { class?: string }>()

const forwarded = computed(() => {
  const { class: _, ...rest } = props
  return rest
})
</script>
