<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Parallax Gradient Backdrop -->
    <Motion
      :style="{ y: backdropY }"
      class="fixed inset-0 bg-gradient-to-br from-radar-cyan/5 via-cockpit-green/3 to-transparent pointer-events-none"
    />

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative">
      <!-- Hero Section with Floating Plane -->
      <div class="mb-16 text-center">
        <Motion
          :animate="{
            y: [0, -12, 0],
            rotate: [-2, 2, -2]
          }"
          :transition="{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }"
          class="flex items-center justify-center gap-3 mb-6"
        >
          <div class="relative">
            <Motion
              :animate="{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }"
              :transition="{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }"
              class="absolute inset-0 bg-cockpit-green/20 blur-2xl rounded-full"
            />
            <Icon
              name="lucide:plane"
              class="w-16 h-16 text-cockpit-green relative"
            />
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, margin: '-100px' }"
          :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }"
        >
          <h1 class="font-display text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight">
            About Mayday Archive
          </h1>
          <p class="text-xl md:text-2xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Documenting aviation's most significant accidents and the safety lessons that made flying the safest form of transportation
          </p>
        </Motion>
      </div>

      <!-- Mission Statement Cards with Scroll Trigger -->
      <div class="max-w-6xl mx-auto mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Motion
            v-for="(card, index) in missionCards"
            :key="index"
            :initial="{ opacity: 0, y: 60, scale: 0.9 }"
            :whileInView="{ opacity: 1, y: 0, scale: 1 }"
            :viewport="{ once: true, margin: '-50px' }"
            :transition="{
              duration: 0.7,
              delay: 0.1 * index,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 100
            }"
          >
            <Card
              :class="[
                'group cursor-pointer transition-all duration-500 h-full',
                card.glowClass
              ]"
              @mouseenter="handleCardHover(index)"
            >
              <CardHeader>
                <div class="flex items-center gap-3 mb-3">
                  <Motion
                    :animate="hoveredCard === index ? {
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    } : {}"
                    :transition="{ duration: 0.5 }"
                    :class="[
                      'p-3 rounded-lg transition-all duration-500',
                      card.iconBg
                    ]"
                  >
                    <Icon
                      :name="card.icon"
                      :class="['w-6 h-6', card.iconColor]"
                    />
                  </Motion>
                </div>
                <CardTitle class="text-xl group-hover:text-cockpit-green-text transition-colors duration-300">
                  {{ card.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-text-secondary font-body leading-relaxed">
                  {{ card.description }}
                </p>
              </CardContent>
            </Card>
          </Motion>
        </div>
      </div>

      <!-- Main Content Sections with Parallax -->
      <div class="max-w-4xl mx-auto space-y-8 mb-16">
        <Motion
          v-for="(section, index) in contentSections"
          :key="index"
          :initial="{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -15 : 15 }"
          :whileInView="{ opacity: 1, x: 0, rotateY: 0 }"
          :viewport="{ once: false, margin: '-100px', amount: 0.3 }"
          :transition="{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 80
          }"
          :style="{ perspective: '1000px' }"
        >
          <Card
            :class="[
              'transition-all duration-500 overflow-hidden hover:-translate-y-2',
              section.glowClass,
              section.borderClass
            ]"
          >
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-2xl">
                <Motion
                  :whileHover="{
                    rotate: 360,
                    scale: 1.3
                  }"
                  :transition="{ duration: 0.6, ease: 'easeOut' }"
                >
                  <Icon
                    :name="section.icon"
                    :class="['w-7 h-7', section.iconColor]"
                  />
                </Motion>
                {{ section.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <component :is="section.content" />
            </CardContent>
          </Card>
        </Motion>
      </div>

      <!-- Tech Stack Section with Stagger on Scroll -->
      <Motion
        :initial="{ opacity: 0, y: 80, scale: 0.95 }"
        :whileInView="{ opacity: 1, y: 0, scale: 1 }"
        :viewport="{ once: true, margin: '-80px' }"
        :transition="{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }"
        class="max-w-4xl mx-auto mb-16"
      >
        <Card class="bg-gradient-to-br from-bg-secondary to-bg-tertiary border-2 border-radar-cyan/20 hover:shadow-glow-cyan transition-all duration-500">
          <CardHeader>
            <CardTitle class="flex items-center gap-3 text-2xl">
              <Icon
                name="lucide:code-2"
                class="w-7 h-7 text-radar-cyan"
              />
              Built With Modern Tech
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Motion
                v-for="(tech, index) in techStack"
                :key="index"
                :initial="{ opacity: 0, scale: 0.5, rotate: -10 }"
                :whileInView="{ opacity: 1, scale: 1, rotate: 0 }"
                :viewport="{ once: true, amount: 0.8 }"
                :transition="{
                  duration: 0.5,
                  delay: 0.1 * index,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }"
                :whileHover="{ scale: 1.15, y: -8, rotate: 3 }"
                class="flex items-center gap-2 p-3 bg-bg-primary/50 rounded-lg border border-border-subtle hover:border-cockpit-green transition-all duration-300 cursor-pointer"
              >
                <Icon
                  :name="tech.icon"
                  class="w-5 h-5 text-cockpit-green"
                />
                <span class="font-mono text-sm text-text-primary">{{ tech.name }}</span>
              </Motion>
            </div>
          </CardContent>
        </Card>
      </Motion>

      <!-- Call to Action with Scale on Scroll -->
      <Motion
        :initial="{ opacity: 0, scale: 0.8, y: 60 }"
        :whileInView="{ opacity: 1, scale: 1, y: 0 }"
        :viewport="{ once: true, margin: '-100px' }"
        :transition="{
          duration: 0.9,
          ease: [0.34, 1.56, 0.64, 1],
          type: 'spring',
          stiffness: 80
        }"
        class="max-w-2xl mx-auto text-center"
      >
        <Card class="bg-gradient-to-br from-cockpit-green/10 via-bg-secondary to-bg-secondary border-2 border-cockpit-green/30 hover:shadow-glow-green transition-all duration-500">
          <CardHeader>
            <CardTitle class="text-2xl text-cockpit-green-text">
              Open Source & Community-Driven
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-text-secondary font-body text-lg leading-relaxed">
              This project is open source and built in public. Code, content, and design choices are all transparent.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Motion
                :whileHover="{ scale: 1.1, y: -4 }"
                :whileTap="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 400, damping: 17 }"
              >
                <a
                  href="https://github.com/benjipeng/mayday-archive"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 px-6 py-3 bg-cockpit-green text-white font-display font-bold rounded-lg hover:shadow-glow-green transition-all duration-300"
                >
                  <Icon
                    name="lucide:github"
                    class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  />
                  View on GitHub
                </a>
              </Motion>
              <Motion
                :whileHover="{ scale: 1.1, y: -4 }"
                :whileTap="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 400, damping: 17 }"
              >
                <NuxtLink
                  to="/browse"
                  class="inline-flex items-center gap-2 px-6 py-3 border-2 border-radar-cyan text-radar-cyan font-display font-bold rounded-lg hover:bg-radar-cyan/10 transition-all duration-300"
                >
                  <Icon
                    name="lucide:database"
                    class="w-5 h-5"
                  />
                  Explore Disasters
                </NuxtLink>
              </Motion>
            </div>
          </CardContent>
        </Card>
      </Motion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { Motion, useScroll, useTransform } from '@oku-ui/motion'

useSeoMeta({
  title: 'About - Mayday Archive',
  description: 'About Mayday Archive, an educational platform documenting aviation disasters and the safety improvements they inspired.',
})

// Parallax scroll effect for backdrop
const { scrollY } = useScroll()
const backdropY = useTransform(scrollY, [0, 1000], [0, -200])

// Track hovered card for icon animation
const hoveredCard = ref<number | null>(null)

const handleCardHover = (index: number) => {
  hoveredCard.value = index
  setTimeout(() => {
    if (hoveredCard.value === index) {
      hoveredCard.value = null
    }
  }, 500)
}

const missionCards = [
  {
    title: 'Educational Mission',
    description: 'Every aviation disaster teaches invaluable lessons. I document these events to preserve their lessons and honor those who lost their lives.',
    icon: 'lucide:book-open',
    iconColor: 'text-cockpit-green',
    iconBg: 'bg-cockpit-green/10',
    glowClass: 'hover:shadow-glow-green'
  },
  {
    title: 'Safety First',
    description: 'Aviation became the safest transportation because it learns from failure. Each tragedy led to concrete improvements that saved countless lives.',
    icon: 'lucide:shield-check',
    iconColor: 'text-radar-cyan',
    iconBg: 'bg-radar-cyan/10',
    glowClass: 'hover:shadow-glow-cyan'
  },
  {
    title: 'Transparent & Honest',
    description: 'No ads, no tracking, no business agenda. Just honest documentation of accidents and the safety improvements they inspired.',
    icon: 'lucide:eye',
    iconColor: 'text-aviation-amber',
    iconBg: 'bg-aviation-amber/10',
    glowClass: 'hover:shadow-glow-amber'
  }
]

const contentSections = [
  {
    title: 'Why This Exists',
    icon: 'lucide:lightbulb',
    iconColor: 'text-cockpit-green',
    glowClass: 'hover:shadow-glow-green',
    borderClass: 'border-l-4 border-cockpit-green',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', { class: 'text-lg' }, 'Aviation disasters are tragic, but they\'re also turning points in aviation safety.'),
      h('p', null, 'The Tenerife disaster (1977) killed 583 people and revolutionized cockpit communication. JAL Flight 123 (1985) led to stricter maintenance oversight. The Ethiopian 302 crash (2019) exposed critical flaws in the 737 MAX design and certification process.'),
      h('p', null, 'These aren\'t just statistics. Each accident represents lives lost and lessons learned. I built this archive to ensure those lessons aren\'t forgotten.')
    ])
  },
  {
    title: 'The Data Matters',
    icon: 'lucide:bar-chart-3',
    iconColor: 'text-radar-cyan',
    glowClass: 'hover:shadow-glow-cyan',
    borderClass: 'border-l-4 border-radar-cyan',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'Aviation safety didn\'t improve by accident. It improved because investigators analyzed every failure, identified root causes, and regulators mandated changes.'),
      h('ul', { class: 'list-disc list-inside space-y-2 ml-4' }, [
        h('li', null, 'Crew Resource Management (CRM) training became mandatory after United 173 crashed while troubleshooting a landing gear issue'),
        h('li', null, 'Ground Proximity Warning Systems (GPWS) were mandated after controlled flight into terrain accidents'),
        h('li', null, 'Modern weather radar and wind shear detection systems prevent disasters that once were common')
      ]),
      h('p', null, 'Every safety feature in modern aircraft exists because an accident proved it was needed.')
    ])
  },
  {
    title: 'Who I Am',
    icon: 'lucide:user',
    iconColor: 'text-aviation-amber',
    glowClass: 'hover:shadow-glow-amber',
    borderClass: 'border-l-4 border-aviation-amber',
    content: () => h('div', { class: 'space-y-4 text-text-secondary font-body' }, [
      h('p', null, 'I\'m an aviation enthusiast fascinated by complex systems, human factors, and how we learn from catastrophic failures.'),
      h('p', null, 'I\'m not a pilot, investigator, or aerospace engineer. I\'m a software developer who believes in learning from history and sharing knowledge openly.'),
      h('p', null, [
        'This project is my contribution to aviation education. All content is researched from official accident reports, NTSB/BEA/AAIB investigations, and reputable aviation sources. Code is ',
        h('a', {
          href: 'https://github.com/benjipeng/mayday-archive',
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'text-cockpit-green-text hover:underline font-semibold transition-colors'
        }, 'open source on GitHub'),
        '.'
      ])
    ])
  }
]

const techStack = [
  { name: 'Nuxt 4', icon: 'lucide:layout-template' },
  { name: 'Vue 3', icon: 'lucide:component' },
  { name: 'Tailwind', icon: 'lucide:palette' },
  { name: 'TypeScript', icon: 'lucide:code' },
  { name: 'shadcn-nuxt', icon: 'lucide:blocks' },
  { name: 'Motion', icon: 'lucide:move' }
]
</script>
