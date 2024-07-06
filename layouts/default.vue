<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
    <TheSidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <TheHeader />
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
import TheSidebar from "~/components/TheSidebar.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>
