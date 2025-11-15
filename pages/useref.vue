<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">useRef Demo</h2>
    <input ref="inputRef" type="text" class="border p-2 rounded" />
    <button
      @click="focusInput"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
    >
      Focus Input
    </button>
  </div>
</template>

<script setup lang="ts">
const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  inputRef.value?.focus();
};
</script>
