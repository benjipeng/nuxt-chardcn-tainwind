export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  ssr: false,
  app: {
    baseURL: '/nuxt-chardcn-tainwind/',
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  compatibilityDate: '2024-11-13',
  future: {
    compatibilityVersion: 4
  }
})