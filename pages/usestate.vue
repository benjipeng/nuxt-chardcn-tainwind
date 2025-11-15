<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">useState Demo</h2>
    <p>Count: {{ count }}</p>
    <button
      @click="increment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
