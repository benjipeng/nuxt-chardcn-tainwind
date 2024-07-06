<template>
  <aside
    class="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
  >
    <nav>
      <NuxtLink
        to="/"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/usestate"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >useState Demo</NuxtLink
      >
      <NuxtLink
        to="/useeffect"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >useEffect Demo</NuxtLink
      >
      <NuxtLink
        to="/useref"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >useRef Demo</NuxtLink
      >
    </nav>
  </aside>
</template>
