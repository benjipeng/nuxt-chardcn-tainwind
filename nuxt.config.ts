export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/motion/nuxt'
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  // Font configuration
  fonts: {
    families: [
      // B612 - Aviation cockpit font for headings
      { name: 'B612', provider: 'google' },
      // Work Sans - Modern professional font for body
      { name: 'Work Sans', provider: 'google' }
    ]
  },

  // Icon configuration
  icon: {
    serverBundle: {
      collections: ['lucide']
    }
  },

  // Image configuration
  image: {
    dir: 'public'
  },

  // SSG mode enabled (ssr: true is default)
  ssr: true,

  app: {
    baseURL: '/mayday-archive/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/mayday-archive/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/mayday-archive/favicon.ico' }
      ]
    }
  },

  // Optimize for static generation
  nitro: {
    prerender: {
      routes: ['/'],
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