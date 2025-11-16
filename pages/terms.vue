<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <Motion
      :initial="{ opacity: 0, y: -30, scale: 0.95 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
    >
      <section class="relative bg-bg-secondary border-b border-border-subtle overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-aviation-amber/5 to-transparent pointer-events-none" />
        <div class="container mx-auto px-4 py-16 md:py-24 relative">
          <div class="max-w-3xl mx-auto text-center">
            <Motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :animate="{ opacity: 1, scale: 1 }"
              :transition="{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
            >
              <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Terms of Use
              </h1>
            </Motion>
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.4, duration: 0.5 }"
            >
              <p class="text-lg text-text-secondary font-body">
                Last Updated: {{ lastUpdated }}
              </p>
            </Motion>
          </div>
        </div>
      </section>
    </Motion>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ staggerChildren: 0.1, delayChildren: 0.3 }"
        >
          <Motion
            v-for="(card, index) in cards"
            :key="index"
            :initial="{ opacity: 0, y: 30, scale: 0.95 }"
            :animate="{ opacity: 1, y: 0, scale: 1 }"
            :transition="{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
            :whileHover="{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }"
            class="mb-8"
          >
            <Card :class="[
              'transition-all duration-300 backdrop-blur-sm',
              'border-border-subtle',
              card.borderClass,
              card.glowClass
            ]">
              <CardHeader>
                <CardTitle :class="card.titleClass">
                  <component :is="card.icon" v-if="card.icon" />
                  {{ card.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <component :is="card.content" />
              </CardContent>
            </Card>
          </Motion>
        </Motion>

        <!-- Bottom Navigation -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 1.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
        >
          <div class="mt-12 pt-8 border-t border-border-default">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <NuxtLink
                to="/privacy"
                class="group flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-all duration-300 font-body"
              >
                <Icon name="lucide:shield" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                <span class="transition-all duration-300 group-hover:translate-x-1">Privacy</span>
              </NuxtLink>
              <NuxtLink
                to="/"
                class="group flex items-center gap-2 text-text-secondary hover:text-cockpit-green-text transition-all duration-300 font-body"
              >
                <Icon name="lucide:home" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span class="transition-all duration-300 group-hover:translate-x-1">Return to Home</span>
              </NuxtLink>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Motion } from '@oku-ui/motion'
import { h } from 'vue'

useHead({
  title: 'Terms of Use | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Terms of use for Mayday Archive - a personal educational project about aviation safety.'
    }
  ]
})

const lastUpdated = 'November 16, 2025'

const cards = [
  {
    title: 'What This Site Is',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'I built Mayday Archive to document significant aviation disasters and the safety improvements that came from them.'),
      h('p', null, 'Use it free for education, research, and learning.')
    ])
  },
  {
    title: 'Important Disclaimers',
    borderClass: 'border-l-4 border-alert-red',
    glowClass: 'hover:shadow-glow-red',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:alert-triangle',
      class: 'w-5 h-5 text-alert-red'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('ul', { class: 'list-disc list-inside space-y-3' }, [
        h('li', null, [h('strong', null, 'Not professional advice:'), ' This is a hobby project. Don\'t use it for professional aviation decisions.']),
        h('li', null, [h('strong', null, 'Accuracy:'), ' I cite official sources but I\'m not infallible. Verify important info with official investigation reports.']),
        h('li', null, [h('strong', null, 'Not affiliated:'), ' I have no affiliation with airlines, manufacturers, aviation authorities, or investigation agencies.']),
        h('li', null, [h('strong', null, 'Use at your own risk:'), ' I provide the site "as is" without warranties.'])
      ])
    ])
  },
  {
    title: 'What You Can Do',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Feel free to:'),
      h('ul', { class: 'list-disc list-inside space-y-2' }, [
        h('li', null, 'Read and learn from the content'),
        h('li', null, 'Link to pages'),
        h('li', null, 'Use it for educational purposes'),
        h('li', null, 'Share it with attribution')
      ])
    ])
  },
  {
    title: 'What You Can\'t Do',
    glowClass: 'hover:shadow-glow-amber',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Don\'t:'),
      h('ul', { class: 'list-disc list-inside space-y-2' }, [
        h('li', null, 'Scrape or republish large portions of content'),
        h('li', null, 'Remove attribution or claim it as your own'),
        h('li', null, 'Use it commercially without permission'),
        h('li', null, 'Try to hack or break the site')
      ])
    ])
  },
  {
    title: 'Content & Copyright',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'I wrote the original content. Historical images and investigation reports come from public domain sources or I cite them properly.'),
      h('p', null, 'Want to use substantial portions? Just ask.')
    ])
  },
  {
    title: 'Questions or Issues?',
    borderClass: 'border-l-4 border-cockpit-green',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('p', { class: 'text-text-secondary font-body' }, [
      'Open an issue on the ',
      h('a', {
        href: 'https://github.com/benjipeng/mayday-archive',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-cockpit-green-text hover:underline transition-all duration-200 hover:text-cockpit-green'
      }, 'GitHub repo'),
      '.'
    ])
  }
]
</script>
