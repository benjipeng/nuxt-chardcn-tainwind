<template>
  <div class="min-h-screen">
    <SectionsHero />
    <SectionsFeaturedDisasters />
    <SectionsStatsDashboard />
    <SectionsBrowseCategories />
  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'Mayday Archive - Insights from Aviation\'s Most Significant Accidents',
  meta: [
    {
      name: 'description',
      content: 'Explore comprehensive documentation of major air disasters, understand their causes, and learn how they shaped modern aviation safety standards.'
    },
    {
      property: 'og:title',
      content: 'Mayday Archive - Aviation Safety Insights'
    },
    {
      property: 'og:description',
      content: 'Educational database of aviation accidents that changed the industry'
    }
  ]
})
</script>
