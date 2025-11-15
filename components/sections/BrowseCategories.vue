<template>
  <section class="py-20 px-4">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Browse by Category
        </h2>
        <p class="text-lg text-text-secondary font-body">
          Explore disasters organized by their primary causes and contributing factors
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="category.link"
          class="category-card group"
        >
          <div
            :class="[
              'p-3 rounded-lg mb-4 w-fit',
              getCategoryBgClass(category.color)
            ]"
          >
            <Icon
              :name="category.icon"
              :class="[
                'w-8 h-8 transition-transform group-hover:scale-110',
                getCategoryTextClass(category.color)
              ]"
            />
          </div>

          <h3 class="text-xl font-display font-bold text-text-primary mb-2 group-hover:text-cockpit-green-text transition-colors">
            {{ category.name }}
          </h3>

          <p class="text-sm text-text-secondary font-body mb-3">
            {{ category.description }}
          </p>

          <div class="flex items-center gap-2 text-text-tertiary text-sm font-body">
            <span>{{ category.count }} cases</span>
            <Icon
              name="lucide:arrow-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </NuxtLink>
      </div>

      <!-- Additional Links -->
      <div class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/timeline"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bg-secondary hover:bg-bg-tertiary border border-border-default transition-all"
        >
          <Icon
            name="lucide:calendar"
            class="w-5 h-5 text-radar-cyan"
          />
          <span class="font-body font-medium text-text-primary">View Timeline</span>
        </NuxtLink>

        <NuxtLink
          to="/statistics"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bg-secondary hover:bg-bg-tertiary border border-border-default transition-all"
        >
          <Icon
            name="lucide:bar-chart-3"
            class="w-5 h-5 text-aviation-amber"
          />
          <span class="font-body font-medium text-text-primary">View Statistics</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Human Error',
    description: 'Pilot mistakes, ATC errors, and communication failures',
    icon: 'lucide:user-x',
    color: 'aviation-amber',
    count: '~166',
    link: '/browse?category=human-error'
  },
  {
    id: 2,
    name: 'Mechanical Failure',
    description: 'Design flaws, maintenance errors, and equipment malfunctions',
    icon: 'lucide:wrench',
    color: 'alert-red',
    count: '~43',
    link: '/browse?category=mechanical'
  },
  {
    id: 3,
    name: 'Weather',
    description: 'Severe conditions, icing, turbulence, and wind shear',
    icon: 'lucide:cloud-rain',
    color: 'radar-cyan',
    count: '~23',
    link: '/browse?category=weather'
  },
  {
    id: 4,
    name: 'Other Factors',
    description: 'Terrorism, sabotage, bird strikes, and mid-air collisions',
    icon: 'lucide:alert-circle',
    color: 'nav-magenta',
    count: '~18',
    link: '/browse?category=other'
  }
]

// Helper functions to map color strings to static Tailwind classes
const getCategoryBgClass = (color: string) => {
  switch (color) {
    case 'aviation-amber':
      return 'bg-aviation-amber/10'
    case 'alert-red':
      return 'bg-alert-red/10'
    case 'radar-cyan':
      return 'bg-radar-cyan/10'
    case 'nav-magenta':
      return 'bg-nav-magenta/10'
    default:
      return 'bg-cockpit-green/10'
  }
}

const getCategoryTextClass = (color: string) => {
  switch (color) {
    case 'aviation-amber':
      return 'text-aviation-amber'
    case 'alert-red':
      return 'text-alert-red'
    case 'radar-cyan':
      return 'text-radar-cyan'
    case 'nav-magenta':
      return 'text-nav-magenta'
    default:
      return 'text-cockpit-green'
  }
}
</script>

<style scoped>
.category-card {
  @apply p-6 rounded-lg;
  @apply bg-bg-secondary border border-border-subtle;
  @apply transition-all duration-300;
  @apply hover:border-cockpit-green/50 hover:shadow-lg;
  @apply hover:transform hover:-translate-y-1;
  @apply cursor-pointer;
}
</style>
