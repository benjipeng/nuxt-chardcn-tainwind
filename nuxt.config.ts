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

  // Generate dynamic routes for SSG using prerender:routes hook (Nuxt 4 recommended)
  hooks: {
    async 'prerender:routes'(ctx) {
      // Read disaster content files from filesystem
      const { readdirSync } = await import('fs')
      const { join } = await import('path')

      const contentDir = join(process.cwd(), 'content', 'disasters')
      const files = readdirSync(contentDir)

      // Add disaster detail routes to prerender context
      for (const file of files.filter((f: string) => f.endsWith('.md'))) {
        const slug = file.replace('.md', '')
        ctx.routes.add(`/disaster/${slug}`)
      }
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