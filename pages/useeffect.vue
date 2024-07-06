<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">useEffect Demo</h2>
    <p>Window Width: {{ windowWidth }}px</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref(0);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
