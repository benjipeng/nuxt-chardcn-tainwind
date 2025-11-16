<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Gradient Backdrop -->
    <div class="fixed inset-0 bg-gradient-to-br from-cockpit-green/5 via-transparent to-transparent pointer-events-none" />

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative">
      <!-- Hero -->
      <Motion
        :initial="{ opacity: 0, y: -30, scale: 0.95 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
        class="mb-12 text-center"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <Icon
            name="lucide:shield-check"
            class="w-12 h-12 text-cockpit-green"
          />
        </div>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Safety Improvements
        </h1>
        <p class="text-lg text-text-secondary font-body max-w-2xl mx-auto">
          How aviation disasters led to concrete safety changes
        </p>
      </Motion>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto space-y-6">
        <Motion
          v-for="(improvement, index) in improvements"
          :key="index"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 * (index + 1), ease: [0.16, 1, 0.3, 1] }"
        >
          <Card
            :class="[
              'transition-all duration-300 hover:-translate-y-2',
              improvement.glowClass,
              improvement.borderClass
            ]"
          >
            <CardHeader>
              <CardTitle :class="improvement.titleClass">
                <component
                  :is="improvement.icon"
                  v-if="improvement.icon"
                />
                {{ improvement.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <component :is="improvement.content" />
            </CardContent>
          </Card>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Motion } from '@oku-ui/motion'

useSeoMeta({
  title: 'Safety Improvements - Mayday Archive',
  description: 'How aviation disasters led to safety improvements and regulatory changes.',
})

const improvements = [
  {
    title: 'Why Disasters Matter',
    glowClass: 'hover:shadow-glow-green',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:lightbulb',
      class: 'w-5 h-5 text-cockpit-green'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'text-lg' }, 'Every major aviation accident led to concrete changes that made flying safer.'),
      h('p', null, 'The industry learns from failure. When something goes wrong, investigators find the root cause and regulators mandate changes to prevent it from happening again.'),
      h('p', null, 'This is why modern aviation is so safe - each disaster taught us lessons written in regulation and procedure.')
    ])
  },
  {
    title: 'Communication & CRM',
    glowClass: 'hover:shadow-glow-cyan',
    borderClass: 'border-l-4 border-radar-cyan',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:users',
      class: 'w-5 h-5 text-radar-cyan'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'font-semibold text-text-primary' }, 'Key Accidents: Tenerife (1977), United 173 (1978)'),
      h('p', null, 'The Tenerife disaster killed 583 people partly due to miscommunication between pilots and ATC. United 173 crashed after the crew fixated on a landing gear issue and ignored fuel warnings.'),
      h('div', { class: 'bg-bg-secondary p-4 rounded-md border border-border-subtle' }, [
        h('p', { class: 'font-semibold text-cockpit-green-text mb-2' }, 'Changes Made:'),
        h('ul', { class: 'list-disc list-inside space-y-1 ml-2' }, [
          h('li', null, 'Crew Resource Management (CRM) training became mandatory'),
          h('li', null, 'Standardized phraseology for all radio communications'),
          h('li', null, 'Emphasis on junior crew speaking up to challenge captains')
        ])
      ])
    ])
  },
  {
    title: 'Maintenance & Inspection',
    glowClass: 'hover:shadow-glow-amber',
    borderClass: 'border-l-4 border-aviation-amber',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:wrench',
      class: 'w-5 h-5 text-aviation-amber'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'font-semibold text-text-primary' }, 'Key Accidents: JAL 123 (1985), Aloha 243 (1988)'),
      h('p', null, 'JAL 123 crashed killing 520 after a botched repair weakened the rear bulkhead. Aloha 243 lost part of its roof mid-flight due to metal fatigue.'),
      h('div', { class: 'bg-bg-secondary p-4 rounded-md border border-border-subtle' }, [
        h('p', { class: 'font-semibold text-aviation-amber-text mb-2' }, 'Changes Made:'),
        h('ul', { class: 'list-disc list-inside space-y-1 ml-2' }, [
          h('li', null, 'Stricter maintenance documentation and oversight'),
          h('li', null, 'Enhanced inspection intervals for aging aircraft'),
          h('li', null, 'Better understanding of metal fatigue and stress cycles')
        ])
      ])
    ])
  },
  {
    title: 'Technology & Systems',
    glowClass: 'hover:shadow-glow-green',
    borderClass: 'border-l-4 border-cockpit-green',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:cpu',
      class: 'w-5 h-5 text-cockpit-green'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Modern aircraft have numerous automated safety systems that didn\'t exist in earlier decades:'),
      h('ul', { class: 'list-disc list-inside space-y-2 ml-4' }, [
        h('li', null, 'TCAS (Traffic Collision Avoidance System) - Prevents mid-air collisions'),
        h('li', null, 'GPWS (Ground Proximity Warning System) - Alerts pilots before terrain impact'),
        h('li', null, 'Enhanced weather radar - Detects wind shear and severe turbulence'),
        h('li', null, 'Flight data recorders with extended duration and crash protection')
      ]),
      h('p', { class: 'text-sm text-text-tertiary italic' }, 'Each of these systems exists because accidents proved they were needed.')
    ])
  }
]
</script>
