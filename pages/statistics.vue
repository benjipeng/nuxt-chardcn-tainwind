<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Gradient Backdrop -->
    <div class="fixed inset-0 bg-gradient-to-br from-aviation-amber/5 via-transparent to-transparent pointer-events-none" />

    <!-- Content -->
    <div class="container mx-auto px-4 pt-32 pb-12 relative">
      <!-- Hero -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -30, scale: 0.95 }"
        :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }"
        class="mb-12 text-center"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <Icon
            name="lucide:bar-chart-3"
            class="w-12 h-12 text-aviation-amber"
          />
        </div>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Aviation Disaster Statistics
        </h1>
        <p class="text-lg text-text-secondary font-body max-w-2xl mx-auto">
          Data insights from documented aviation accidents
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            v-for="(stat, index) in topStats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: 100 * (index + 1),
                ease: [0.16, 1, 0.3, 1]
              }
            }"
            class="transition-all duration-300 hover:shadow-glow-amber hover:-translate-y-2"
          >
            <CardHeader>
              <div class="flex items-center gap-3 mb-2">
                <component
                  :is="stat.icon"
                  class="transition-transform duration-300 group-hover:scale-110"
                />
                <CardTitle class="text-xl">{{ stat.title }}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div class="text-4xl font-display font-bold text-text-primary mb-2">
                {{ stat.value }}
              </div>
              <p class="text-sm text-text-tertiary font-body">
                {{ stat.description }}
              </p>
            </CardContent>
          </Card>
        </div>

        <!-- Detailed Sections -->
        <div class="space-y-6">
          <Card
            v-for="(section, index) in sections"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: 500 + 100 * index,
                ease: [0.16, 1, 0.3, 1]
              }
            }"
            :class="['transition-all duration-300', section.glowClass]"
          >
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <component :is="section.icon" />
                {{ section.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <component :is="section.content" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useSeoMeta({
  title: 'Statistics - Mayday Archive',
  description: 'Statistical analysis of aviation disasters and safety trends.',
})

const topStats = [
  {
    title: 'Disasters Documented',
    value: 'Coming Soon',
    description: 'Major aviation accidents catalogued',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:database',
      class: 'w-6 h-6 text-cockpit-green'
    })
  },
  {
    title: 'Total Fatalities',
    value: 'Coming Soon',
    description: 'Lives lost across all documented events',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:users',
      class: 'w-6 h-6 text-alert-red'
    })
  },
  {
    title: 'Years Covered',
    value: 'Coming Soon',
    description: 'Timespan of documented accidents',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:calendar',
      class: 'w-6 h-6 text-radar-cyan'
    })
  }
]

const sections = [
  {
    title: 'Accidents by Category',
    glowClass: 'hover:shadow-glow-green',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:pie-chart',
      class: 'w-5 h-5 text-cockpit-green'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Breakdown of aviation disasters by root cause:'),
      h('ul', { class: 'list-disc list-inside space-y-2 ml-4' }, [
        h('li', null, 'Human Error - Pilot mistakes, ATC failures, communication breakdowns'),
        h('li', null, 'Mechanical Failure - Engine failures, structural issues, design flaws'),
        h('li', null, 'Weather - Severe turbulence, wind shear, icing conditions'),
        h('li', null, 'Other - Terrorism, military action, unknown causes')
      ]),
      h('p', { class: 'text-sm text-text-tertiary italic' }, 'Full statistics will be available once more disasters are documented.')
    ])
  },
  {
    title: 'Temporal Trends',
    glowClass: 'hover:shadow-glow-cyan',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:trending-down',
      class: 'w-5 h-5 text-radar-cyan'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Aviation has become dramatically safer over time.'),
      h('p', null, 'The 1970s and 1980s saw the highest number of fatal accidents. Since then, safety improvements from lessons learned have made commercial aviation the safest form of transportation.'),
      h('p', { class: 'text-sm text-text-tertiary italic' }, 'Timeline visualizations and detailed trend analysis coming soon.')
    ])
  }
]
</script>
