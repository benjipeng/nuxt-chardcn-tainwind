<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <Motion
      :initial="{ opacity: 0, y: -30, scale: 0.95 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
    >
      <section class="relative bg-bg-secondary border-b border-border-subtle overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-cockpit-green/5 to-transparent pointer-events-none" />
        <div class="container mx-auto px-4 py-16 md:py-24 relative">
          <div class="max-w-3xl mx-auto text-center">
            <Motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :animate="{ opacity: 1, scale: 1 }"
              :transition="{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
            >
              <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Privacy
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
          :transition="{ staggerChildren: 0.12, delayChildren: 0.3 }"
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
          :transition="{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
        >
          <div class="mt-12 pt-8 border-t border-border-default">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <NuxtLink
                to="/terms"
                class="group flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-all duration-300 font-body"
              >
                <Icon name="lucide:file-text" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <span class="transition-all duration-300 group-hover:translate-x-1">Terms of Use</span>
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
  title: 'Privacy | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Privacy information for Mayday Archive - a static educational site with no data collection.'
    }
  ]
})

const lastUpdated = 'November 16, 2025'

const cards = [
  {
    title: 'The Simple Truth',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'text-lg' }, 'This is a static educational website. I don\'t collect your personal data.'),
      h('p', null, 'No sign-ups, no tracking, no analytics, no cookies (except maybe one for dark mode preference), no mailing lists, no nothing.')
    ])
  },
  {
    title: 'What Gets Logged',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'GitHub Pages hosts this site. GitHub\'s servers log standard stuff:'),
      h('ul', { class: 'list-disc list-inside space-y-2 mt-3' }, [
        h('li', null, 'IP address'),
        h('li', null, 'Browser type'),
        h('li', null, 'Pages you visit'),
        h('li', null, 'Time of visit')
      ]),
      h('p', { class: 'mt-4' }, [
        'I don\'t see this data, don\'t use it, don\'t care about it. Check ',
        h('a', {
          href: 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection',
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'text-cockpit-green-text hover:underline transition-colors duration-200'
        }, 'GitHub\'s privacy policy'),
        ' for details.'
      ])
    ])
  },
  {
    title: 'External Links',
    glowClass: 'hover:shadow-glow-amber',
    content: () => h('p', { class: 'text-text-secondary font-body' },
      'I link to official investigation reports, news sources, and other external sites. Their privacy policies apply when you visit them.'
    )
  },
  {
    title: 'Questions?',
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
