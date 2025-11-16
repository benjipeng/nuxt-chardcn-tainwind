export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content'
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

  // Route rules for pre-rendering
  routeRules: {
    '/': { prerender: true },
    '/browse': { prerender: true },
    '/timeline': { prerender: true },
    '/disaster/tenerife-1977': { prerender: true },
    '/disaster/jal123-1985': { prerender: true },
    '/disaster/charkhi-dadri-1996': { prerender: true },
    '/disaster/aa191-1979': { prerender: true },
    '/disaster/af447-2009': { prerender: true },
    '/disaster/ethiopian-302-2019': { prerender: true }
  },

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

  // Generate dynamic routes for SSG
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return

      // Read disaster content files from filesystem
      const { readdirSync } = await import('fs')
      const { join } = await import('path')

      const contentDir = join(process.cwd(), 'content', 'disasters')
      const files = readdirSync(contentDir)

      // Generate routes for all disaster detail pages (without baseURL, Nuxt handles that)
      const disasterRoutes = files
        .filter((file: string) => file.endsWith('.md'))
        .map((file: string) => `/disaster/${file.replace('.md', '')}`)

      // Add all routes to prerender (Nuxt will automatically prepend baseURL)
      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []

      // Clear default routes and add our explicit list
      nitroConfig.prerender.routes = [
        '/',
        '/browse',
        '/timeline',
        ...disasterRoutes
      ]
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