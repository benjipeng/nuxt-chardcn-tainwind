<template>
  <nav
    :class="[
      'fixed top-2 left-3 right-3 z-50',
      'bg-bg-secondary/95 backdrop-blur-sm',
      'border border-border-subtle rounded-xl',
      'origin-top-right',
      isMenuOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
      navbarClasses
    ]"
  >
    <div class="container mx-auto px-4 h-full">
      <div class="flex items-center justify-between h-full">
        <!-- Logo and Title -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 transition-all duration-300"
        >
          <!-- Logo Box -->
          <div
            :class="[
              'flex items-center justify-center transition-all duration-300',
              'border-2 border-cockpit-green bg-cockpit-green/10',
              'rounded-md',
              logoClasses
            ]"
          >
            <span
              :class="[
                'font-display font-bold text-cockpit-green',
                'transition-all duration-300',
                navbarState === 'full' ? 'text-lg' : navbarState === 'compact' ? 'text-base' : 'text-sm'
              ]"
            >
              MA
            </span>
          </div>

          <!-- Title Text -->
          <div class="flex flex-col justify-center">
            <span
              :class="[
                'font-display font-bold text-text-primary',
                'transition-all duration-300 leading-tight',
                titleClasses
              ]"
            >
              MAYDAY
              <span
                v-if="navbarState === 'full'"
                class="transition-opacity duration-300"
              >
                ARCHIVE
              </span>
            </span>
            <span
              v-if="navbarState === 'full'"
              class="text-xs text-aviation-amber font-body transition-opacity duration-300"
            >
              Aviation Safety Insights
            </span>
          </div>
        </NuxtLink>

        <!-- Navigation Items (Desktop) -->
        <div
          :class="[
            'hidden md:flex items-center gap-6 transition-all duration-300',
            navbarState === 'minimal' ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
          ]"
        >
          <template v-for="(item, index) in navItems" :key="item.to">
            <span v-if="index > 0" class="text-text-tertiary">|</span>
            <NuxtLink
              :to="item.to"
              class="nav-link"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-4">
          <!-- Search Icon -->
          <button
            class="p-2 hover:bg-cockpit-green/10 rounded-md transition-colors"
            aria-label="Search"
          >
            <Icon
              name="lucide:search"
              class="w-5 h-5 text-text-secondary hover:text-cockpit-green transition-colors"
            />
          </button>

          <!-- Dark Mode Toggle (visible in full/compact states on desktop) -->
          <button
            v-if="navbarState !== 'minimal' || isMobile"
            class="p-2 hover:bg-cockpit-green/10 rounded-md transition-colors hidden md:block"
            @click="toggleDarkMode"
            aria-label="Toggle dark mode"
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
          </button>

          <!-- Hamburger Menu Button (mobile: always visible, desktop: only when minimal) -->
          <button
            :class="[
              'p-2 hover:bg-cockpit-green/10 rounded-md transition-all duration-300',
              // Always visible on mobile, visible on desktop only when navbar is minimal
              navbarState === 'minimal' ? 'block' : 'block md:hidden'
            ]"
            @click="toggleMenu"
            aria-label="Menu"
          >
            <Icon
              v-if="!isMenuOpen"
              name="lucide:menu"
              class="w-6 h-6 text-text-primary"
            />
            <Icon
              v-else
              name="lucide:x"
              class="w-6 h-6 text-text-primary"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Hamburger Menu Overlay -->
    <HamburgerMenu
      :is-open="isMenuOpen"
      @close="isMenuOpen = false"
    />
  </nav>
</template>

<script setup lang="ts">
const { navbarState } = useNavbarScroll()
const { isDarkMode, toggleDarkMode } = useDarkMode()
const { navItems } = useNavigation()

const isMenuOpen = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Detect mobile screen size
const checkMobile = () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 768
  }
}

onMounted(() => {
  if (process.client) {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', checkMobile)
  }
})

// Computed classes for different states
const navbarClasses = computed(() => {
  switch (navbarState.value) {
    case 'full':
      return 'h-16 md:h-20'
    case 'compact':
      return 'h-14 md:h-16'
    case 'minimal':
      return 'h-12 md:h-14'
    default:
      return 'h-16 md:h-20'
  }
})

const logoClasses = computed(() => {
  switch (navbarState.value) {
    case 'full':
      return 'w-10 h-10 md:w-12 md:h-12'
    case 'compact':
      return 'w-8 h-8 md:w-10 md:h-10'
    case 'minimal':
      return 'w-7 h-7 md:w-8 md:h-8'
    default:
      return 'w-10 h-10 md:w-12 md:h-12'
  }
})

const titleClasses = computed(() => {
  switch (navbarState.value) {
    case 'full':
      return 'text-base md:text-lg'
    case 'compact':
      return 'text-sm md:text-base'
    case 'minimal':
      return 'text-xs md:text-sm'
    default:
      return 'text-base md:text-lg'
  }
})
</script>

<style scoped>
/* Navbar collapse animation */
nav {
  transition-property: all;
  transition-duration: 0.25s;
  /* Premium spring-like easing (inspired by iOS) */
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* When navbar is appearing (not menu open), add delay */
nav:not(.scale-0) {
  transition-delay: 0.25s;
  /* Bouncy entrance when expanding */
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* When navbar is disappearing (menu opening), no delay */
nav.scale-0 {
  transition-delay: 0s;
  /* Smooth collapse */
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link {
  @apply font-body text-sm font-medium text-text-secondary;
  @apply hover:text-cockpit-green-text transition-colors duration-200;
  @apply relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-cockpit-green;
  @apply transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}

.router-link-active {
  @apply text-cockpit-green-text;
}

.router-link-active::after {
  @apply w-full;
}
</style>
