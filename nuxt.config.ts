export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  ssr: false,
  app: {
    baseURL: '/nuxt-chardcn-tainwind/',
    buildAssetsDir: '/nuxt-chardcn-tainwind/_nuxt/',
    cdnURL: 'https://benjipeng.github.io'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
})