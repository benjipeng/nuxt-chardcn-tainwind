<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <button
          @click="toggleSidebar"
          class="mr-4 text-gray-800 dark:text-white md:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
          Vue Hooks Demo
        </h1>
      </div>
      <button @click="toggleDarkMode" class="text-gray-800 dark:text-white">
        <svg
          v-if="isDarkMode"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkMode } from "~/composables/useDarkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();

const emit = defineEmits(["toggle-sidebar"]);

const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
