<template>
  <section class="py-20 px-4 bg-bg-secondary/30">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Aviation Safety Progress
        </h2>
        <p class="text-lg text-text-secondary font-body">
          From tragedy comes progress. See how aviation has become 400× safer since 1959
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        <div class="stat-box">
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-alert-red/10">
              <Icon
                name="lucide:alert-triangle"
                class="w-6 h-6 text-alert-red"
              />
            </div>
            <span class="text-sm font-body text-text-tertiary">Total Accidents</span>
          </div>
          <div class="text-4xl font-display font-bold text-text-primary mb-1">
            207+
          </div>
          <div class="text-sm text-text-tertiary font-body">
            With 100+ fatalities
          </div>
        </div>

        <div class="stat-box">
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-aviation-amber/10">
              <Icon
                name="lucide:trending-down"
                class="w-6 h-6 text-aviation-amber"
              />
            </div>
            <span class="text-sm font-body text-text-tertiary">Accident Rate</span>
          </div>
          <div class="text-4xl font-display font-bold text-aviation-amber mb-1">
            1.13
          </div>
          <div class="text-sm text-text-tertiary font-body">
            Per million flights (2024)
          </div>
        </div>

        <div class="stat-box">
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-cockpit-green/10">
              <Icon
                name="lucide:trending-up"
                class="w-6 h-6 text-cockpit-green"
              />
            </div>
            <span class="text-sm font-body text-text-tertiary">Improvement</span>
          </div>
          <div class="text-4xl font-display font-bold text-cockpit-green mb-1">
            400×
          </div>
          <div class="text-sm text-text-tertiary font-body">
            Safer than 1959
          </div>
        </div>

        <div class="stat-box">
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-radar-cyan/10">
              <Icon
                name="lucide:shield-check"
                class="w-6 h-6 text-radar-cyan"
              />
            </div>
            <span class="text-sm font-body text-text-tertiary">CFIT (2024)</span>
          </div>
          <div class="text-4xl font-display font-bold text-radar-cyan mb-1">
            0
          </div>
          <div class="text-sm text-text-tertiary font-body">
            Zero incidents
          </div>
        </div>
      </div>

      <!-- Timeline Comparison -->
      <div class="max-w-4xl mx-auto bg-bg-secondary rounded-lg p-8 border border-border-subtle">
        <h3 class="text-2xl font-display font-bold text-text-primary mb-6 text-center">
          Fatal Accident Rate Improvement
        </h3>

        <div class="space-y-6">
          <!-- 1959 -->
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-20 text-right">
              <span class="text-lg font-display font-bold text-text-primary">1959</span>
            </div>
            <div class="flex-1">
              <div class="h-12 bg-alert-red/20 rounded-lg flex items-center px-4 border border-alert-red/30">
                <span class="text-alert-red-text font-body font-semibold">40 fatal per million</span>
              </div>
            </div>
          </div>

          <!-- 1969 -->
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-20 text-right">
              <span class="text-lg font-display font-bold text-text-primary">1969</span>
            </div>
            <div class="flex-1">
              <div class="h-12 bg-aviation-amber/20 rounded-lg flex items-center px-4 border border-aviation-amber/30" style="width: 50%;">
                <span class="text-aviation-amber-text font-body font-semibold">&lt;2 fatal per million</span>
              </div>
            </div>
          </div>

          <!-- 2024 -->
          <div class="flex items-center gap-4">
            <div class="flex-shrink-0 w-20 text-right">
              <span class="text-lg font-display font-bold text-cockpit-green">2024</span>
            </div>
            <div class="flex-1">
              <div class="h-12 bg-cockpit-green/20 rounded-lg flex items-center px-4 border border-cockpit-green/30" style="width: 10%;">
                <span class="text-cockpit-green-text font-body font-semibold whitespace-nowrap">~0.1 fatal per million</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Milestone -->
        <div class="mt-8 p-4 bg-cockpit-green/10 rounded-lg border border-cockpit-green/30">
          <div class="flex items-start gap-3">
            <Icon
              name="lucide:trophy"
              class="w-6 h-6 text-cockpit-green flex-shrink-0 mt-1"
            />
            <div>
              <h4 class="font-display font-bold text-cockpit-green mb-1">
                2024 Milestone Achievement
              </h4>
              <p class="text-sm text-text-secondary font-body">
                Zero CFIT (Controlled Flight Into Terrain) accidents recorded—a historic first demonstrating the effectiveness of GPWS systems and crew training protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-box {
  @apply p-6 rounded-lg;
  @apply bg-bg-primary border border-border-subtle;
  @apply transition-all duration-200;
  @apply hover:border-cockpit-green/30 hover:shadow-md;
}
</style>
