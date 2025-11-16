<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Fetch the disaster content
const { data: disaster } = await useAsyncData(`disaster-${slug}`, () =>
  queryContent(`disasters/${slug}`).findOne()
)

// Handle 404
if (!disaster.value) {
  throw createError({
    statusCode: 404,
    message: 'Disaster not found',
  })
}

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

// SEO Meta tags
useHead({
  title: disaster.value?.title || 'Disaster',
  meta: [
    { name: 'description', content: disaster.value?.summary || '' },
  ],
})
</script>

<template>
  <div v-if="disaster" class="min-h-screen bg-bg-primary">
    <Navbar />

    <!-- Hero Image -->
    <div class="relative w-full h-[50vh] md:h-[60vh] bg-bg-tertiary">
      <NuxtImg
        :src="disaster.images.hero"
        :alt="disaster.title"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 -mt-32 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Back button -->
        <div class="mb-6">
          <NuxtLink
            to="/browse"
            class="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-default rounded-lg text-text-secondary hover:text-cockpit-green-text hover:border-cockpit-green transition-all duration-200"
          >
            <Icon name="lucide:arrow-left" class="w-4 h-4" />
            <span class="font-body text-sm">Back to Browse</span>
          </NuxtLink>
        </div>

        <!-- Article Header Card -->
        <div class="bg-bg-secondary border border-border-subtle rounded-lg p-6 md:p-8 mb-8 shadow-lg">
          <!-- Categories -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="category in disaster.categories"
              :key="category"
              :class="getCategoryColor(category)"
              class="px-3 py-1 text-xs font-display font-medium rounded border"
            >
              {{ category }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {{ disaster.title }}
          </h1>

          <!-- Date -->
          <p class="text-lg text-text-tertiary font-mono mb-6">
            {{ formatDate(disaster.date) }}
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
            <!-- Fatalities -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-alert-red/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:users" class="w-5 h-5 text-alert-red" />
              </div>
              <div>
                <p class="text-2xl font-display font-bold text-alert-red-text">{{ disaster.fatalities }}</p>
                <p class="text-xs text-text-tertiary font-body">Fatalities</p>
              </div>
            </div>

            <!-- Aircraft -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-cockpit-green/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:plane" class="w-5 h-5 text-cockpit-green" />
              </div>
              <div>
                <p class="text-sm font-display font-semibold text-text-primary">{{ disaster.aircraft }}</p>
                <p class="text-xs text-text-tertiary font-body">Aircraft Type</p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-radar-cyan/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-radar-cyan" />
              </div>
              <div>
                <p class="text-sm font-display font-semibold text-text-primary">{{ disaster.location.city }}</p>
                <p class="text-xs text-text-tertiary font-body">{{ disaster.location.country }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Article Content -->
        <article class="bg-bg-secondary border border-border-subtle rounded-lg p-6 md:p-8 mb-8 prose prose-lg max-w-none
          prose-headings:font-display prose-headings:text-text-primary
          prose-p:text-text-secondary prose-p:font-body prose-p:leading-relaxed
          prose-a:text-cockpit-green-text prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary prose-strong:font-semibold
          prose-ul:text-text-secondary prose-ol:text-text-secondary
          prose-li:text-text-secondary
          prose-blockquote:border-l-cockpit-green prose-blockquote:text-text-secondary
          prose-code:text-cockpit-green-text prose-code:bg-cockpit-green/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border-subtle prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-img:rounded-lg"
        >
          <ContentRenderer :value="disaster" />
        </article>

        <!-- Navigation to other disasters -->
        <div class="bg-bg-secondary border border-border-subtle rounded-lg p-6 mb-8">
          <h2 class="text-xl font-display font-bold text-text-primary mb-4">Explore More</h2>
          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/browse"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cockpit-green text-bg-primary rounded-lg font-display font-semibold hover:bg-cockpit-green/90 transition-colors"
            >
              <Icon name="lucide:grid-3x3" class="w-4 h-4" />
              Browse All Disasters
            </NuxtLink>
            <NuxtLink
              to="/timeline"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-bg-tertiary text-text-primary border border-border-default rounded-lg font-display font-semibold hover:bg-bg-primary hover:border-cockpit-green transition-all"
            >
              <Icon name="lucide:clock" class="w-4 h-4" />
              View Timeline
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
/* Additional prose styling for better content rendering */
:deep(.prose h2) {
  scroll-margin-top: 100px;
}

:deep(.prose h3) {
  scroll-margin-top: 100px;
}
</style>
