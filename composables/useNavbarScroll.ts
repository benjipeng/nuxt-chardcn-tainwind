export function useNavbarScroll() {
  const scrollY = ref(0)
  const scrollDirection = ref<'up' | 'down'>('down')
  const navbarState = ref<'full' | 'compact' | 'minimal'>('full')
  const prevScrollY = ref(0)

  // Debounce timer
  let debounceTimer: NodeJS.Timeout | null = null

  const updateScrollPosition = () => {
    if (process.client) {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      if (currentScrollY > prevScrollY.value) {
        scrollDirection.value = 'down'
      } else if (currentScrollY < prevScrollY.value) {
        scrollDirection.value = 'up'
      }

      // Update scroll position
      scrollY.value = currentScrollY
      prevScrollY.value = currentScrollY

      // Determine navbar state based on scroll position
      if (currentScrollY < 100) {
        navbarState.value = 'full'
      } else if (currentScrollY >= 100 && currentScrollY < 400) {
        navbarState.value = 'compact'
      } else {
        navbarState.value = 'minimal'
      }
    }
  }

  const handleScroll = () => {
    // Debounce scroll events for performance
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(() => {
      updateScrollPosition()
    }, 10)
  }

  onMounted(() => {
    if (process.client) {
      // Initialize scroll position
      updateScrollPosition()

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  })

  onUnmounted(() => {
    if (process.client) {
      // Clean up event listener and timer
      window.removeEventListener('scroll', handleScroll)
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
    }
  })

  return {
    scrollY: readonly(scrollY),
    scrollDirection: readonly(scrollDirection),
    navbarState: readonly(navbarState)
  }
}
