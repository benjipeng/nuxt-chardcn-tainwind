<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section class="bg-bg-secondary border-b border-border-subtle">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Privacy
          </h1>
          <p class="text-lg text-text-secondary font-body">
            Last Updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-4xl">

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>The Simple Truth</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p class="text-lg">
                This is a static educational website. I don't collect your personal data.
              </p>
              <p>
                No sign-ups, no tracking, no analytics, no cookies (except maybe one for dark mode preference), no mailing lists, no nothing.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>What Gets Logged</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                This site is hosted on GitHub Pages. GitHub's servers automatically log:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-3">
                <li>Your IP address</li>
                <li>Browser type</li>
                <li>Pages you visit</li>
                <li>When you visit</li>
              </ul>
              <p class="mt-4">
                That's standard web server stuff. I don't see it, I don't use it, I don't care about it.
                Check <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection" target="_blank" rel="noopener noreferrer" class="text-cockpit-green-text hover:underline">GitHub's privacy policy</a> if you want details.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>External Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-text-secondary font-body">
              This site links to official investigation reports, news sources, and other external websites.
              When you click those links, you're subject to their privacy policies, not mine.
            </p>
          </CardContent>
        </Card>

        <Card class="mb-8 border-l-4 border-cockpit-green">
          <CardHeader>
            <CardTitle>Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-text-secondary font-body">
              Open an issue on the <a href="https://github.com/benjipeng/mayday-archive" target="_blank" rel="noopener noreferrer" class="text-cockpit-green-text hover:underline">GitHub repo</a>.
            </p>
          </CardContent>
        </Card>

        <!-- Bottom Navigation -->
        <div class="mt-12 pt-8 border-t border-border-subtle">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <NuxtLink
              to="/terms"
              class="flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-colors font-body"
            >
              <Icon name="lucide:file-text" class="w-4 h-4" />
              Terms of Use
            </NuxtLink>
            <NuxtLink
              to="/"
              class="flex items-center gap-2 text-text-secondary hover:text-cockpit-green-text transition-colors font-body"
            >
              <Icon name="lucide:home" class="w-4 h-4" />
              Return to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Privacy information for Mayday Archive - a static educational site with no data collection.'
    }
  ]
})

const lastUpdated = 'November 16, 2025'
</script>
