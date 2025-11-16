<script setup lang="ts">
import { computed } from 'vue'

// Define the disaster type based on frontmatter structure
interface Disaster {
  slug: string
  title: string
  date: string
  fatalities: number
  aircraft: string
  categories: string[]
  location: {
    city: string
    country: string
  }
  images: {
    hero: string
  }
  summary: string
  _path: string
}

// Fetch all disasters from content
const { data: disasters } = await useAsyncData('disasters-timeline', () =>
  queryCollection('disasters').all()
)

// Sort disasters by date (oldest first for timeline)
const sortedDisasters = computed(() => {
  if (!disasters.value) return []
  return [...disasters.value].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )
})

// Group disasters by decade
const timelineByDecade = computed(() => {
  if (!sortedDisasters.value) return {}

  return sortedDisasters.value.reduce((acc, disaster) => {
    const year = new Date(disaster.date).getFullYear()
    const decade = Math.floor(year / 10) * 10
    const decadeLabel = `${decade}s`

    if (!acc[decadeLabel]) {
      acc[decadeLabel] = []
    }
    acc[decadeLabel].push(disaster)
    return acc
  }, {} as Record<string, Disaster[]>)
})

// Get category color classes
function getCategoryColor(category: string): string {
  switch (category) {
    case 'Human Error':
      return 'bg-aviation-amber/10 text-aviation-amber-text border-aviation-amber/30'
    case 'Mechanical':
      return 'bg-alert-red/10 text-alert-red-text border-alert-red/30'
    case 'Weather':
      return 'bg-radar-cyan/10 text-radar-cyan border-radar-cyan/30'
    case 'Other':
      return 'bg-nav-magenta/10 text-nav-magenta border-nav-magenta/30'
    default:
      return 'bg-bg-tertiary text-text-secondary border-border-default'
  }
}

// Format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Get year from date
function getYear(dateString: string): number {
  return new Date(dateString).getFullYear()
}
</script>

<template>
  <div class="min-h-screen bg-bg-primary">
    <Navbar />

    <!-- Header Section -->
    <div class="container mx-auto px-4 pt-32 pb-12">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Timeline
        </h1>
        <p class="text-lg text-text-secondary font-body">
          A chronological view of aviation's most significant accidents. Each disaster contributed to the safety improvements that protect millions of passengers today.
        </p>
      </div>
    </div>

    <!-- Timeline -->
    <div class="container mx-auto px-4 pb-20">
      <div class="max-w-5xl mx-auto">
        <!-- Timeline Container -->
        <div class="relative">
          <!-- Vertical Line (hidden on mobile, shown on md+) -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-default -translate-x-1/2" aria-hidden="true"></div>

          <!-- Mobile Vertical Line -->
          <div class="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border-default" aria-hidden="true"></div>

          <!-- Timeline Items grouped by decade -->
          <div class="space-y-16">
            <div v-for="(decadeDisasters, decade) in timelineByDecade" :key="decade">
              <!-- Decade Header -->
              <div class="relative mb-8">
                <div class="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div class="bg-cockpit-green px-6 py-2 rounded-full border-4 border-bg-primary shadow-glow-green">
                    <span class="text-sm md:text-base font-display font-bold text-bg-primary">{{ decade }}</span>
                  </div>
                </div>
                <!-- Mobile decade header adjustment -->
                <div class="md:hidden ml-16 mb-4">
                  <div class="inline-block bg-cockpit-green px-6 py-2 rounded-full shadow-glow-green">
                    <span class="text-sm font-display font-bold text-bg-primary">{{ decade }}</span>
                  </div>
                </div>
              </div>

              <!-- Disasters in this decade -->
              <div class="space-y-12">
                <div
                  v-for="(disaster, index) in decadeDisasters"
                  :key="disaster.slug"
                  class="relative"
                >
                  <!-- Desktop: Alternating layout -->
                  <div class="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                    <!-- Left side (even indexes) -->
                    <div :class="index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'">
                      <NuxtLink
                        :to="`/disaster/${disaster.slug}`"
                        class="group inline-block text-left max-w-md bg-bg-secondary border border-border-subtle rounded-lg p-6 hover:border-cockpit-green hover:shadow-glow-green transition-all duration-300 hover:-translate-y-1"
                      >
                        <!-- Year Badge -->
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cockpit-green/10 border border-cockpit-green/30 rounded-full mb-3">
                          <Icon name="lucide:calendar" class="w-3 h-3 text-cockpit-green-text" />
                          <span class="text-xs font-mono font-semibold text-cockpit-green-text">
                            {{ getYear(disaster.date) }}
                          </span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl font-display font-bold text-text-primary mb-2 group-hover:text-cockpit-green-text transition-colors">
                          {{ disaster.title }}
                        </h3>

                        <!-- Summary -->
                        <p class="text-sm text-text-secondary font-body mb-3 line-clamp-2">
                          {{ disaster.summary }}
                        </p>

                        <!-- Metadata -->
                        <div class="space-y-2 mb-3">
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:plane-crash" class="w-3 h-3 text-text-tertiary mr-2" />
                            <span class="text-text-secondary font-body">{{ disaster.aircraft }}</span>
                          </div>
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:map-pin" class="w-3 h-3 text-text-tertiary mr-2" />
                            <span class="text-text-secondary font-body">{{ disaster.location.city }}, {{ disaster.location.country }}</span>
                          </div>
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:users" class="w-3 h-3 text-alert-red mr-2" />
                            <span class="text-alert-red-text font-semibold">{{ disaster.fatalities }} fatalities</span>
                          </div>
                        </div>

                        <!-- Categories -->
                        <div class="flex flex-wrap gap-1.5">
                          <span
                            v-for="category in disaster.categories"
                            :key="category"
                            :class="getCategoryColor(category)"
                            class="px-2 py-0.5 text-xs font-display font-medium rounded border"
                          >
                            {{ category }}
                          </span>
                        </div>
                      </NuxtLink>
                    </div>

                    <!-- Center dot -->
                    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cockpit-green rounded-full border-4 border-bg-primary shadow-glow-green" aria-hidden="true"></div>
                  </div>

                  <!-- Mobile: Stacked layout -->
                  <div class="md:hidden flex gap-4">
                    <!-- Dot -->
                    <div class="flex flex-col items-center flex-shrink-0">
                      <div class="w-3 h-3 bg-cockpit-green rounded-full border-2 border-bg-primary shadow-glow-green mt-2" aria-hidden="true"></div>
                    </div>

                    <!-- Content -->
                    <div class="flex-1 pb-8">
                      <NuxtLink
                        :to="`/disaster/${disaster.slug}`"
                        class="group block bg-bg-secondary border border-border-subtle rounded-lg p-4 hover:border-cockpit-green hover:shadow-glow-green transition-all duration-300"
                      >
                        <!-- Year Badge -->
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cockpit-green/10 border border-cockpit-green/30 rounded-full mb-3">
                          <Icon name="lucide:calendar" class="w-3 h-3 text-cockpit-green-text" />
                          <span class="text-xs font-mono font-semibold text-cockpit-green-text">
                            {{ getYear(disaster.date) }}
                          </span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-lg font-display font-bold text-text-primary mb-2 group-hover:text-cockpit-green-text transition-colors">
                          {{ disaster.title }}
                        </h3>

                        <!-- Summary -->
                        <p class="text-sm text-text-secondary font-body mb-3 line-clamp-2">
                          {{ disaster.summary }}
                        </p>

                        <!-- Metadata -->
                        <div class="space-y-1.5 mb-3">
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:plane-crash" class="w-3 h-3 text-text-tertiary mr-2" />
                            <span class="text-text-secondary font-body">{{ disaster.aircraft }}</span>
                          </div>
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:map-pin" class="w-3 h-3 text-text-tertiary mr-2" />
                            <span class="text-text-secondary font-body">{{ disaster.location.city }}, {{ disaster.location.country }}</span>
                          </div>
                          <div class="flex items-center text-xs">
                            <Icon name="lucide:users" class="w-3 h-3 text-alert-red mr-2" />
                            <span class="text-alert-red-text font-semibold">{{ disaster.fatalities }} fatalities</span>
                          </div>
                        </div>

                        <!-- Categories -->
                        <div class="flex flex-wrap gap-1.5">
                          <span
                            v-for="category in disaster.categories"
                            :key="category"
                            :class="getCategoryColor(category)"
                            class="px-2 py-0.5 text-xs font-display font-medium rounded border"
                          >
                            {{ category }}
                          </span>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
