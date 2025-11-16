<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: -30, scale: 0.95 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }"
      class="relative bg-bg-secondary border-b border-border-subtle overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-cockpit-green/5 to-transparent pointer-events-none" />
      <div class="container mx-auto px-4 pt-32 pb-12 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 500, ease: [0.16, 1, 0.3, 1] } }"
            class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Privacy
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400, duration: 500 } }"
            class="text-lg text-text-secondary font-body"
          >
            Last Updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 60, scale: 0.95 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              delay: 120 * index,
              ease: [0.16, 1, 0.3, 1]
            }
          }"
          :hovered="{
            y: -6,
            scale: 1.02,
            transition: { duration: 300, ease: [0.16, 1, 0.3, 1] }
          }"
          :class="[
            'transition-all duration-300 backdrop-blur-sm mb-8',
            'border-border-subtle',
            card.borderClass,
            card.glowClass
          ]"
        >
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

        <!-- Bottom Navigation -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 500, ease: [0.16, 1, 0.3, 1] } }"
          class="mt-12 pt-8 border-t border-border-default"
        >
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
    title: 'Overview',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'text-lg' }, 'This is a static educational website. No personal information is collected, stored, or processed.'),
      h('p', null, 'The site operates without user accounts, tracking systems, analytics tools, or mailing lists. No cookies are used except for storing theme preference (dark mode).'),
      h('p', null, 'All content is delivered as pre-generated static pages. No user data is transmitted to or retained by this website.')
    ])
  },
  {
    title: 'Server Logs',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'This site is hosted on GitHub Pages. Standard web server information is automatically logged by GitHub\'s infrastructure:'),
      h('ul', { class: 'list-disc list-inside space-y-2 mt-3 ml-4' }, [
        h('li', null, 'IP addresses'),
        h('li', null, 'Browser user agents'),
        h('li', null, 'Requested pages'),
        h('li', null, 'Access timestamps')
      ]),
      h('p', { class: 'mt-4' }, [
        'These server logs are not accessed or analyzed by this site. For information about how GitHub handles this data, ',
        h('a', {
          href: 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection',
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'text-cockpit-green-text hover:underline transition-colors duration-200'
        }, 'GitHub\'s privacy policy'),
        ' should be consulted.'
      ])
    ])
  },
  {
    title: 'Third-Party Sites',
    glowClass: 'hover:shadow-glow-amber',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'External links are provided to official accident investigation reports, news archives, and educational resources.'),
      h('p', null, 'When these external sites are visited, their respective privacy policies and data practices become applicable. This site has no control over or responsibility for third-party privacy practices.')
    ])
  },
  {
    title: 'Contact',
    borderClass: 'border-l-4 border-cockpit-green',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('p', { class: 'text-text-secondary font-body' }, [
      'Questions or concerns regarding this privacy notice may be submitted through the ',
      h('a', {
        href: 'https://github.com/benjipeng/mayday-archive',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-cockpit-green-text hover:underline transition-all duration-200 hover:text-cockpit-green'
      }, 'project repository'),
      ' on GitHub.'
    ])
  }
]
</script>
