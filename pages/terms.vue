<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section class="bg-bg-secondary border-b border-border-subtle">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Terms of Use
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
            <CardTitle>What This Site Is</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                I built Mayday Archive to document significant aviation disasters
                and the safety improvements that came from them.
              </p>
              <p>
                Use it free for education, research, and learning.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8 border-l-4 border-alert-red">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:alert-triangle" class="w-5 h-5 text-alert-red" />
              Important Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <ul class="list-disc list-inside space-y-3">
                <li>
                  <strong>Not professional advice:</strong> This is a hobby project. Don't use it for professional aviation decisions.
                </li>
                <li>
                  <strong>Accuracy:</strong> I cite official sources but I'm not infallible. Verify important info with official investigation reports.
                </li>
                <li>
                  <strong>Not affiliated:</strong> I have no affiliation with airlines, manufacturers, aviation authorities, or investigation agencies.
                </li>
                <li>
                  <strong>Use at your own risk:</strong> I provide the site "as is" without warranties.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>What You Can Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>Feel free to:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Read and learn from the content</li>
                <li>Link to pages</li>
                <li>Use it for educational purposes</li>
                <li>Share it with attribution</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>What You Can't Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>Don't:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Scrape or republish large portions of content</li>
                <li>Remove attribution or claim it as your own</li>
                <li>Use it commercially without permission</li>
                <li>Try to hack or break the site</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Content & Copyright</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                I wrote the original content. Historical images and investigation reports come from public domain sources or I cite them properly.
              </p>
              <p>
                Want to use substantial portions? Just ask.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-8 border-l-4 border-cockpit-green">
          <CardHeader>
            <CardTitle>Questions or Issues?</CardTitle>
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
              to="/privacy"
              class="flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-colors font-body"
            >
              <Icon name="lucide:shield" class="w-4 h-4" />
              Privacy
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
  title: 'Terms of Use | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Terms of use for Mayday Archive - a personal educational project about aviation safety.'
    }
  ]
})

const lastUpdated = 'November 16, 2025'
</script>
