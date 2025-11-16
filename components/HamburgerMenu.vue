<template>
  <!-- Backdrop -->
  <Transition
    name="fade"
    @after-leave="$emit('close')"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-bg-backdrop/60 backdrop-blur-sm z-40"
      @click="$emit('close')"
    />
  </Transition>

  <!-- Menu Panel -->
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed top-2 right-3 h-[calc(100vh-1rem)] w-80 max-w-[85vw] bg-bg-secondary/95 backdrop-blur-sm z-[60] shadow-2xl flex flex-col rounded-l-xl"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b border-border-default flex-shrink-0">
        <div class="flex items-center gap-3">
          <div
            class="flex items-center justify-center w-10 h-10 border-2 border-cockpit-green bg-cockpit-green/10 rounded-md"
          >
            <span class="font-display font-bold text-cockpit-green text-base">
              MA
            </span>
          </div>
          <span class="font-display font-bold text-lg text-text-primary">
            MAYDAY ARCHIVE
          </span>
        </div>
        <button
          class="p-2 hover:bg-cockpit-green/10 rounded-md transition-colors"
          @click="$emit('close')"
          aria-label="Close menu"
        >
          <Icon
            name="lucide:x"
            class="w-6 h-6 text-text-primary"
          />
        </button>
      </div>

      <!-- Scrollable Content Area -->
      <div class="flex-1 overflow-y-auto">
        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1 p-4 pb-32">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="menu-item group"
            @click="$emit('close')"
          >
            <Icon
              :name="item.icon"
              :class="[
                'w-5 h-5 transition-colors',
                item.iconColor
              ]"
            />
            <span>{{ item.mobileLabel }}</span>
          </NuxtLink>

          <div class="h-px bg-border-default my-2" />

          <button
            class="menu-item group"
            @click="handleSearch"
          >
            <Icon
              name="lucide:search"
              class="w-5 h-5 text-text-secondary group-hover:text-cockpit-green-text transition-colors"
            />
            <span>Search</span>
          </button>

          <div class="h-px bg-border-default my-2" />

          <!-- Dark Mode Toggle -->
          <button
            class="menu-item group"
            @click="toggleDarkMode"
          >
            <Icon
              v-if="isDarkMode"
              name="lucide:moon"
              class="w-5 h-5 text-aviation-amber"
            />
            <Icon
              v-else
              name="lucide:sun"
              class="w-5 h-5 text-aviation-amber"
            />
            <span>{{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}</span>
            <div
              :class="[
                'ml-auto w-10 h-6 rounded-full transition-colors',
                isDarkMode ? 'bg-cockpit-green' : 'bg-border-default'
              ]"
            >
              <div
                :class="[
                  'w-4 h-4 rounded-full bg-bg-primary shadow-md transition-transform mt-1',
                  isDarkMode ? 'translate-x-5' : 'translate-x-1'
                ]"
              />
            </div>
          </button>
        </nav>
      </div>

      <!-- Footer Info -->
      <div class="flex-shrink-0 p-6 border-t border-border-subtle">
        <p class="text-xs text-text-tertiary font-body">
          Insights from aviation's most significant accidents
        </p>
        <p class="text-xs text-text-disabled font-body mt-2">
          Educational resource for aviation safety
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  close: []
}>()

const { isDarkMode, toggleDarkMode } = useDarkMode()
const { navItems } = useNavigation()

const handleSearch = () => {
  // TODO: Implement search modal
  console.log('Search clicked')
}

// Prevent body scroll when menu is open
watch(() => props.isOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Clean up on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.menu-item {
  @apply flex items-center gap-3 px-4 py-3 rounded-lg;
  @apply text-text-primary font-body font-medium;
  @apply hover:bg-cockpit-green/10 transition-all duration-200;
  @apply cursor-pointer;
}

.router-link-active {
  @apply bg-cockpit-green/10 text-cockpit-green-text;
}

/* Fade transition for backdrop */
.fade-enter-active {
  transition: opacity 0.3s ease;
  transition-delay: 0.3s; /* Sync with menu panel entrance */
}

.fade-leave-active {
  transition: opacity 0.3s ease;
  /* No delay on exit */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for menu panel */
.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.3s; /* Delay entrance until navbar collapses */
}

.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* No delay on exit, menu leaves immediately */
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
