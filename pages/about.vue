<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Gradient Backdrop -->
    <div class="fixed inset-0 bg-gradient-to-br from-radar-cyan/5 via-transparent to-transparent pointer-events-none" />

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
            name="lucide:plane"
            class="w-12 h-12 text-cockpit-green"
          />
        </div>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          About Mayday Archive
        </h1>
        <p class="text-lg text-text-secondary font-body max-w-2xl mx-auto">
          Why this project exists and what it aims to accomplish
        </p>
      </Motion>

      <!-- Main Content -->
      <div class="max-w-3xl mx-auto space-y-6">
        <Motion
          v-for="(card, index) in cards"
          :key="index"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 * (index + 1), ease: [0.16, 1, 0.3, 1] }"
        >
          <Card
            :class="[
              'transition-all duration-300 hover:shadow-glow-cyan',
              card.glowClass
            ]"
          >
            <CardHeader>
              <CardTitle :class="card.titleClass">
                <component
                  :is="card.icon"
                  v-if="card.icon"
                />
                {{ card.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <component :is="card.content" />
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
  title: 'About - Mayday Archive',
  description: 'About Mayday Archive, an educational platform documenting aviation disasters and safety improvements.',
})

const cards = [
  {
    title: 'What This Is',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'text-lg' }, 'Mayday Archive documents aviation\'s most significant accidents and the safety improvements they inspired.'),
      h('p', null, 'I built this because aviation disasters teach us invaluable lessons. Every major accident led to concrete changes that made flying safer for everyone.'),
      h('p', null, 'This is a personal educational project. No ads, no business, no BS.')
    ])
  },
  {
    title: 'Why It Matters',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Aviation is the safest form of transportation because the industry learns from every failure.'),
      h('p', null, 'Tenerife (1977) changed how pilots communicate. JAL 123 (1985) improved maintenance procedures. Each tragedy pushed aviation to evolve.'),
      h('p', null, 'I want to preserve these stories and honor the lives lost by showing how they made the skies safer.')
    ])
  },
  {
    title: 'Who Made This',
    glowClass: 'hover:shadow-glow-amber',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Built by an aviation enthusiast fascinated by how complex systems fail and how humans respond.'),
      h('p', null, [
        'Code is open source on ',
        h('a', {
          href: 'https://github.com/benjipeng/mayday-archive',
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'text-cockpit-green-text hover:underline transition-colors'
        }, 'GitHub'),
        '. Contributions welcome, but I keep editorial control.'
      ])
    ])
  }
]
</script>
