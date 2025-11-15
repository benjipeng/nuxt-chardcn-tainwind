<template>
  <div
    class="disaster-card group"
  >
    <!-- Card Header -->
    <div class="flex items-start justify-between mb-3">
      <div class="flex-1">
        <h3 class="text-xl font-display font-bold text-text-primary mb-1 group-hover:text-cockpit-green-text transition-colors">
          {{ disaster.name }}
        </h3>
        <p class="text-sm text-radar-cyan font-body">
          {{ disaster.date }}
        </p>
      </div>
      <Icon
        name="lucide:plane"
        class="w-6 h-6 text-cockpit-green/50 group-hover:text-cockpit-green transition-colors"
      />
    </div>

    <!-- Location -->
    <div class="flex items-center gap-2 text-sm text-text-tertiary font-body mb-3">
      <Icon
        name="lucide:map-pin"
        class="w-4 h-4"
      />
      <span>{{ disaster.location }}</span>
    </div>

    <!-- Fatalities -->
    <div class="flex items-center gap-2 mb-4">
      <div class="px-3 py-1 rounded-md bg-alert-red/10 border border-alert-red/30">
        <span class="text-alert-red-text font-display font-bold text-lg">
          {{ disaster.fatalities }}
        </span>
        <span class="text-alert-red-text/70 text-xs ml-1 font-body">
          fatalities
        </span>
      </div>
      <div class="px-3 py-1 rounded-md bg-bg-tertiary border border-border-subtle">
        <span class="text-text-secondary text-xs font-body">
          {{ disaster.aircraft }}
        </span>
      </div>
    </div>

    <!-- Description -->
    <p class="text-sm text-text-secondary font-body mb-4 line-clamp-2">
      {{ disaster.description }}
    </p>

    <!-- Categories -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="category in disaster.categories"
        :key="category"
        :class="categoryClass(category)"
      >
        {{ category }}
      </span>
    </div>

    <!-- Read More Link -->
    <div class="flex items-center gap-2 text-cockpit-green-text font-body font-medium text-sm group-hover:gap-3 transition-all">
      <span>Read More</span>
      <Icon
        name="lucide:arrow-right"
        class="w-4 h-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  disaster: {
    id: number
    name: string
    date: string
    location: string
    fatalities: number
    aircraft: string
    categories: string[]
    description: string
  }
}>()

const categoryClass = (category: string) => {
  const baseClass = 'px-2 py-1 rounded text-xs font-body font-medium'

  if (category.includes('Human') || category.includes('Pilot')) {
    return `${baseClass} bg-aviation-amber/10 text-aviation-amber-text border border-aviation-amber/30`
  } else if (category.includes('Mechanical') || category.includes('Design')) {
    return `${baseClass} bg-alert-red/10 text-alert-red-text border border-alert-red/30`
  } else if (category.includes('Weather')) {
    return `${baseClass} bg-radar-cyan/10 text-radar-cyan border border-radar-cyan/30`
  } else {
    return `${baseClass} bg-nav-magenta/10 text-nav-magenta border border-nav-magenta/30`
  }
}
</script>

<style scoped>
.disaster-card {
  @apply p-6 rounded-lg;
  @apply bg-bg-secondary border border-border-subtle;
  @apply transition-all duration-300;
  @apply hover:border-cockpit-green/50 hover:shadow-glow-green;
  @apply hover:transform hover:-translate-y-1;
  @apply cursor-pointer;
}
</style>
