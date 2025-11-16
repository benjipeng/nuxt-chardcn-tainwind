<template>
  <footer class="bg-bg-secondary border-t border-border-subtle py-12 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center justify-center w-10 h-10 border-2 border-cockpit-green bg-cockpit-green/10 rounded-md">
              <span class="font-display font-bold text-cockpit-green text-base">
                MA
              </span>
            </div>
            <span class="font-display font-bold text-lg text-text-primary">
              MAYDAY ARCHIVE
            </span>
          </div>
          <p class="text-sm text-text-tertiary font-body mb-4">
            Educational documentation of aviation's most significant accidents and the safety improvements they inspired.
          </p>
          <div class="flex items-center gap-3">
            <a
              href="https://github.com/benjipeng/mayday-archive"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 hover:bg-cockpit-green/10 rounded-md transition-colors"
              aria-label="GitHub Repository"
            >
              <Icon
                name="lucide:github"
                class="w-5 h-5 text-text-secondary hover:text-cockpit-green transition-colors"
              />
            </a>
          </div>
        </div>

        <!-- Browse -->
        <div>
          <h3 class="font-display font-bold text-text-primary mb-4">Browse</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/browse"
                class="footer-link"
              >
                All Disasters
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/timeline"
                class="footer-link"
              >
                Timeline
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="md:col-span-2">
          <h3 class="font-display font-bold text-text-primary mb-4">Resources</h3>
          <ul class="space-y-2 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2">
            <li>
              <NuxtLink
                to="/statistics"
                class="footer-link"
              >
                Statistics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/safety-improvements"
                class="footer-link"
              >
                Safety Improvements
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/glossary"
                class="footer-link"
              >
                Glossary
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="footer-link"
              >
                About
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-border-subtle">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-text-tertiary font-body">
            © {{ currentYear }} Mayday Archive. Educational purposes only.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink
              to="/privacy"
              class="text-sm text-text-tertiary hover:text-cockpit-green-text transition-colors font-body"
            >
              Privacy Policy
            </NuxtLink>
            <NuxtLink
              to="/terms"
              class="text-sm text-text-tertiary hover:text-cockpit-green-text transition-colors font-body"
            >
              Terms of Use
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-link {
  @apply text-sm text-text-secondary hover:text-cockpit-green-text transition-colors font-body;
}
</style>
