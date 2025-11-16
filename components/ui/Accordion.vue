<template>
  <AccordionRoot v-bind="forwarded">
    <slot />
  </AccordionRoot>
</template>

<script setup lang="ts">
import { AccordionRoot, useForwardPropsEmits } from 'radix-vue'
import type { AccordionRootEmits, AccordionRootProps } from 'radix-vue'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
