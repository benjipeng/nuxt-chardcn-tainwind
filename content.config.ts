import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    disasters: defineCollection({
      type: 'page',
      source: 'disasters/**/*.md',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        date: z.string(),
        fatalities: z.number(),
        aircraft: z.string(),
        categories: z.array(z.string()),
        location: z.object({
          city: z.string(),
          country: z.string(),
        }),
        images: z.object({
          hero: z.string(),
        }),
        summary: z.string(),
      })
    })
  }
})
