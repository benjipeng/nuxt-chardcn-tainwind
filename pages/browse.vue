<script setup lang="ts">
import { ref, computed } from 'vue'

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
const { data: disasters } = await useAsyncData('disasters', () =>
  queryCollection('disasters').all()
)

// Filters and sort
const selectedCategory = ref<string>('All')
const sortBy = ref<string>('fatalities-desc')
const searchQuery = ref<string>('')

// Available categories
const categories = ['All', 'Human Error', 'Mechanical', 'Weather', 'Other']

// Filtered and sorted disasters
const filteredDisasters = computed(() => {
  if (!disasters.value) return []

  let result = [...disasters.value]

  // Filter by category
  if (selectedCategory.value !== 'All') {
    result = result.filter(d => d.categories?.includes(selectedCategory.value))
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(d =>
      d.title.toLowerCase().includes(query) ||
      d.aircraft.toLowerCase().includes(query) ||
      d.location.city.toLowerCase().includes(query) ||
      d.location.country.toLowerCase().includes(query)
    )
  }

  // Sort
  result.sort((a, b) => {
    switch (sortBy.value) {
      case 'fatalities-desc':
        return b.fatalities - a.fatalities
      case 'fatalities-asc':
        return a.fatalities - b.fatalities
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      default:
        return 0
    }
  })

  return result
})

// Get category color classes (for badges)
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
</script>

<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Header Section -->
    <div class="container mx-auto px-4 pt-32 pb-12">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Browse Disasters
        </h1>
        <p class="text-lg text-text-secondary font-body">
          Explore aviation's most significant accidents. Filter by category, search by location or aircraft, and sort by impact.
        </p>
      </div>
    </div>

    <!-- Filters and Controls -->
    <div class="container mx-auto px-4 pb-8">
      <div class="bg-bg-secondary border border-border-subtle rounded-lg p-6">
        <!-- Search -->
        <div class="mb-6">
          <label for="search" class="block text-sm font-display font-medium text-text-secondary mb-2">
            Search
          </label>
          <div class="relative">
            <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
            <input
              id="search"
              v-model="searchQuery"
              type="text"
              placeholder="Search by title, aircraft, or location..."
              class="w-full pl-10 pr-4 py-2.5 bg-bg-primary border border-border-default rounded-md text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-cockpit-green focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Category Filter -->
          <div>
            <label for="category" class="block text-sm font-display font-medium text-text-secondary mb-2">
              Category
            </label>
            <select
              id="category"
              v-model="selectedCategory"
              class="w-full px-4 py-2.5 bg-bg-primary border border-border-default rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-cockpit-green focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>

          <!-- Sort By -->
          <div>
            <label for="sort" class="block text-sm font-display font-medium text-text-secondary mb-2">
              Sort By
            </label>
            <select
              id="sort"
              v-model="sortBy"
              class="w-full px-4 py-2.5 bg-bg-primary border border-border-default rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-cockpit-green focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="fatalities-desc">Fatalities (High to Low)</option>
              <option value="fatalities-asc">Fatalities (Low to High)</option>
              <option value="date-desc">Date (Newest First)</option>
              <option value="date-asc">Date (Oldest First)</option>
            </select>
          </div>
        </div>

        <!-- Results count -->
        <div class="mt-4 pt-4 border-t border-border-subtle">
          <p class="text-sm text-text-tertiary font-body">
            Showing <span class="font-semibold text-cockpit-green-text">{{ filteredDisasters.length }}</span>
            {{ filteredDisasters.length === 1 ? 'disaster' : 'disasters' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Disaster Grid -->
    <div class="container mx-auto px-4 pb-20">
      <div v-if="filteredDisasters.length === 0" class="text-center py-16">
        <Icon name="lucide:search-x" class="w-16 h-16 text-text-tertiary mx-auto mb-4" />
        <p class="text-xl text-text-secondary font-body">No disasters found matching your criteria</p>
        <p class="text-sm text-text-tertiary mt-2">Try adjusting your filters or search query</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="disaster in filteredDisasters"
          :key="disaster.slug"
          :to="`/disaster/${disaster.slug}`"
          class="group bg-bg-secondary border border-border-subtle rounded-lg overflow-hidden hover:border-cockpit-green hover:shadow-glow-green transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Image -->
          <div class="aspect-video bg-bg-tertiary overflow-hidden">
            <NuxtImg
              :src="disaster.images.hero"
              :alt="disaster.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Date -->
            <p class="text-xs font-mono text-text-tertiary mb-2">
              {{ formatDate(disaster.date) }}
            </p>

            <!-- Title -->
            <h3 class="text-xl font-display font-bold text-text-primary mb-2 group-hover:text-cockpit-green-text transition-colors">
              {{ disaster.title }}
            </h3>

            <!-- Summary -->
            <p class="text-sm text-text-secondary font-body mb-4 line-clamp-2">
              {{ disaster.summary }}
            </p>

            <!-- Metadata -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center text-sm">
                <Icon name="lucide:plane-crash" class="w-4 h-4 text-text-tertiary mr-2" />
                <span class="text-text-secondary font-body">{{ disaster.aircraft }}</span>
              </div>
              <div class="flex items-center text-sm">
                <Icon name="lucide:map-pin" class="w-4 h-4 text-text-tertiary mr-2" />
                <span class="text-text-secondary font-body">{{ disaster.location.city }}, {{ disaster.location.country }}</span>
              </div>
              <div class="flex items-center text-sm">
                <Icon name="lucide:users" class="w-4 h-4 text-alert-red mr-2" />
                <span class="text-alert-red-text font-semibold">{{ disaster.fatalities }} fatalities</span>
              </div>
            </div>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="category in disaster.categories"
                :key="category"
                :class="getCategoryColor(category)"
                class="px-2 py-1 text-xs font-display font-medium rounded border"
              >
                {{ category }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
