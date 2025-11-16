<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section
      v-motion
      :initial="{ opacity: 0, y: -30, scale: 0.95 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }"
      class="relative bg-bg-secondary border-b border-border-subtle overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-aviation-amber/5 to-transparent pointer-events-none" />
      <div class="container mx-auto px-4 pt-32 pb-12 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 500, ease: [0.16, 1, 0.3, 1] } }"
            class="font-display text-4xl md:text-5xl font-bold text-text-primary"
          >
            Terms of Use
          </h1>
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
          :initial="{ y: 60, scale: 0.95 }"
          :visibleOnce="{
            y: 0,
            scale: 1,
            transition: {
              duration: 600,
              delay: 100 * index,
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
          :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 500, ease: [0.16, 1, 0.3, 1] } }"
          class="mt-12 pt-8 border-t border-border-default"
        >
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

useHead({
  title: 'Terms of Use | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Terms of use for Mayday Archive - an educational resource about aviation safety.'
    }
  ]
})

const cards = [
  {
    title: 'Purpose and Scope',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'This website is provided as an educational resource documenting significant aviation accidents and the safety improvements derived from their investigation.'),
      h('p', null, 'The content is offered freely for educational, research, and informational purposes.'),
      h('p', null, 'By accessing and using this site, the following terms and conditions are accepted.')
    ])
  },
  {
    title: 'Disclaimers and Limitations',
    borderClass: 'border-l-4 border-alert-red',
    glowClass: 'hover:shadow-glow-red',
    titleClass: 'flex items-center gap-2',
    icon: () => h(resolveComponent('Icon'), {
      name: 'lucide:alert-triangle',
      class: 'w-5 h-5 text-alert-red'
    }),
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('ul', { class: 'list-disc list-inside space-y-3 ml-4' }, [
        h('li', null, [h('strong', null, 'Educational Purpose Only:'), ' This site is not intended to provide professional aviation advice or guidance. Content should not be relied upon for operational or safety-critical decisions.']),
        h('li', null, [h('strong', null, 'Accuracy:'), ' While official sources are referenced, accuracy cannot be guaranteed. Important information should be verified against original investigation reports and official documentation.']),
        h('li', null, [h('strong', null, 'No Affiliation:'), ' This site maintains no affiliation with airlines, aircraft manufacturers, aviation authorities, or accident investigation agencies.']),
        h('li', null, [h('strong', null, 'No Warranty:'), ' Content is provided "as is" without warranties of any kind, either express or implied. Use of this site is at the visitor\'s own risk.'])
      ])
    ])
  },
  {
    title: 'Permitted Use',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'The following uses are permitted:'),
      h('ul', { class: 'list-disc list-inside space-y-2 ml-4' }, [
        h('li', null, 'Reading and learning from site content'),
        h('li', null, 'Linking to pages for reference purposes'),
        h('li', null, 'Educational and non-commercial research use'),
        h('li', null, 'Sharing content with proper attribution')
      ])
    ])
  },
  {
    title: 'Prohibited Activities',
    glowClass: 'hover:shadow-glow-amber',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'The following activities are prohibited:'),
      h('ul', { class: 'list-disc list-inside space-y-2 ml-4' }, [
        h('li', null, 'Automated scraping or mass reproduction of content'),
        h('li', null, 'Removal of attribution or misrepresentation of authorship'),
        h('li', null, 'Commercial use without prior written permission'),
        h('li', null, 'Attempts to compromise site security or functionality')
      ])
    ])
  },
  {
    title: 'Content and Intellectual Property',
    glowClass: 'hover:shadow-glow-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Original written content is authored specifically for this site. Historical images and official reports are sourced from public domain materials or are properly attributed to their respective owners.'),
      h('p', null, 'Substantial use of site content beyond the scope outlined in "Permitted Use" requires prior authorization.'),
      h('p', null, 'Requests for extended use may be submitted through the project repository.')
    ])
  },
  {
    title: 'Contact and Inquiries',
    borderClass: 'border-l-4 border-cockpit-green',
    glowClass: 'hover:shadow-glow-green',
    content: () => h('p', { class: 'text-text-secondary font-body' }, [
      'Questions, concerns, or permission requests regarding these terms may be submitted through the ',
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
