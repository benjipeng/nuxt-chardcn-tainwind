export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  // SSG mode enabled (ssr: true is default)
  ssr: true,

  app: {
    baseURL: '/nuxt-chardcn-tainwind/',
  },

  // Optimize for static generation
  nitro: {
    prerender: {
      routes: [
        '/',
        '/usestate',
        '/useeffect',
        '/useref'
      ],
      crawlLinks: true,
      failOnError: false
    }
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