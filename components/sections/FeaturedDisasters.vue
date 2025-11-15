<template>
  <section class="py-20 px-4">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Featured Disasters
        </h2>
        <p class="text-lg text-text-secondary font-body">
          Explore the most significant aviation accidents that transformed safety protocols and saved countless lives
        </p>
      </div>

      <!-- Disasters Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <DisasterCard
          v-for="disaster in featuredDisasters"
          :key="disaster.id"
          :disaster="disaster"
        />
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/browse"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-cockpit-green text-cockpit-green-text hover:bg-cockpit-green/10 font-body font-semibold transition-all duration-200"
        >
          <span>View All Disasters</span>
          <Icon
            name="lucide:arrow-right"
            class="w-5 h-5"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featuredDisasters = [
  {
    id: 1,
    name: 'Tenerife Airport Collision',
    date: 'March 27, 1977',
    location: 'Canary Islands, Spain',
    fatalities: 583,
    aircraft: 'Boeing 747 (×2)',
    categories: ['Human Error', 'Communication'],
    description: 'Two Boeing 747s collided on runway in heavy fog. Led to standardized aviation phraseology worldwide.'
  },
  {
    id: 2,
    name: 'Japan Airlines Flight 123',
    date: 'August 12, 1985',
    location: 'Mt. Takamagahara, Japan',
    fatalities: 520,
    aircraft: 'Boeing 747SR',
    categories: ['Maintenance', 'Structural'],
    description: 'Improper bulkhead repair led to explosive decompression. Deadliest single-aircraft accident.'
  },
  {
    id: 3,
    name: 'Charkhi Dadri Mid-Air Collision',
    date: 'November 12, 1996',
    location: 'New Delhi, India',
    fatalities: 349,
    aircraft: 'Boeing 747 / Il-76',
    categories: ['ATC Error', 'Communication'],
    description: 'Mid-air collision between two aircraft. Led to mandatory TCAS requirements.'
  },
  {
    id: 4,
    name: 'Ethiopian Airlines Flight 302',
    date: 'March 10, 2019',
    location: 'Near Bishoftu, Ethiopia',
    fatalities: 157,
    aircraft: 'Boeing 737 MAX',
    categories: ['Design Flaw', 'MCAS'],
    description: 'MCAS system malfunction. Led to 737 MAX grounding and certification reform.'
  },
  {
    id: 5,
    name: 'Air France Flight 447',
    date: 'June 1, 2009',
    location: 'Atlantic Ocean',
    fatalities: 228,
    aircraft: 'Airbus A330',
    categories: ['Pilot Error', 'Weather'],
    description: 'Pitot tube icing and pilot confusion. Improved training on loss of automation.'
  },
  {
    id: 6,
    name: 'American Airlines Flight 191',
    date: 'May 25, 1979',
    location: 'Chicago O\'Hare',
    fatalities: 273,
    aircraft: 'DC-10',
    categories: ['Mechanical', 'Maintenance'],
    description: 'Engine detachment during takeoff. Led to DC-10 design improvements.'
  }
]
</script>
