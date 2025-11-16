<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
    <!-- Background Grid Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5" />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />

    <!-- Content -->
    <div class="container mx-auto px-4 z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Main Title -->
        <h1
          class="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-cockpit-green leading-tight"
        >
          MAYDAY ARCHIVE
        </h1>

        <!-- Subtitle Line -->
        <div class="flex items-center justify-center gap-4">
          <div class="h-px w-16 bg-aviation-amber" />
          <span class="text-aviation-amber text-sm md:text-base font-body uppercase tracking-wider">
            Aviation Safety Database
          </span>
          <div class="h-px w-16 bg-aviation-amber" />
        </div>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl lg:text-3xl text-text-secondary font-body font-light max-w-3xl mx-auto">
          Insights from aviation's most significant accidents
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-text-tertiary font-body max-w-2xl mx-auto">
          Explore comprehensive documentation of major air disasters, understand their causes, and learn how they shaped modern aviation safety standards.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <NuxtLink
            to="/browse"
            class="btn-primary"
          >
            <Icon
              name="lucide:layers"
              class="w-5 h-5"
            />
            <span>Explore Disasters</span>
          </NuxtLink>

          <NuxtLink
            to="/timeline"
            class="btn-secondary"
          >
            <Icon
              name="lucide:calendar"
              class="w-5 h-5"
            />
            <span>Browse Timeline</span>
          </NuxtLink>
        </div>

        <!-- Stats Preview -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-3xl mx-auto">
          <div class="stat-card">
            <div class="text-3xl md:text-4xl font-display font-bold text-cockpit-green">
              207+
            </div>
            <div class="text-sm text-text-tertiary font-body mt-1">
              Major Accidents
            </div>
          </div>

          <div class="stat-card">
            <div class="text-3xl md:text-4xl font-display font-bold text-aviation-amber">
              583
            </div>
            <div class="text-sm text-text-tertiary font-body mt-1">
              Deadliest (Tenerife)
            </div>
          </div>

          <div class="stat-card">
            <div class="text-3xl md:text-4xl font-display font-bold text-radar-cyan">
              400x
            </div>
            <div class="text-sm text-text-tertiary font-body mt-1">
              Safer Than 1959
            </div>
          </div>

          <div class="stat-card">
            <div class="text-3xl md:text-4xl font-display font-bold text-cockpit-green">
              0
            </div>
            <div class="text-sm text-text-tertiary font-body mt-1">
              CFIT in 2024
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="pt-16 animate-bounce">
          <Icon
            name="lucide:chevron-down"
            class="w-8 h-8 text-text-tertiary mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgb(var(--accent-green) / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--accent-green) / 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
}

.btn-primary {
  @apply inline-flex items-center gap-2 px-8 py-4 rounded-lg;
  @apply bg-cockpit-green hover:bg-cockpit-green/90;
  @apply text-primary-foreground font-body font-semibold;
  @apply transition-all duration-200;
  @apply shadow-lg shadow-cockpit-green/20 hover:shadow-glow-green;
  @apply transform hover:scale-105;
}

.btn-secondary {
  @apply inline-flex items-center gap-2 px-8 py-4 rounded-lg;
  @apply border-2 border-cockpit-green text-cockpit-green-text;
  @apply hover:bg-cockpit-green/10;
  @apply font-body font-semibold;
  @apply transition-all duration-200;
}

.stat-card {
  @apply p-4 rounded-lg;
  @apply bg-bg-secondary/50 border border-border-subtle;
  @apply backdrop-blur-sm;
  @apply transition-all duration-200;
  @apply hover:border-cockpit-green/50 hover:bg-cockpit-green/5;
}
</style>
