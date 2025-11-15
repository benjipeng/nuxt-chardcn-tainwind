<template>
  <div
    :class="{ dark: isDarkMode }"
    class="flex h-screen bg-gray-100 dark:bg-gray-900"
  >
    <TheSidebar :isOpen="isSidebarOpen" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <TheHeader @toggle-sidebar="toggleSidebar" />
      <main
        class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800"
      >
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// All imports are auto-imported in Nuxt 4
const { isDarkMode } = useDarkMode();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
