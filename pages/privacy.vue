<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section class="bg-bg-secondary border-b border-border-subtle">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p class="text-lg text-text-secondary font-body">
            Last Updated: {{ lastUpdated }}
          </p>
          <p class="mt-6 text-text-secondary font-body">
            Your privacy is important to us. This policy explains how Mayday Archive collects, uses, and protects your information.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Overview Card -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Overview</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-text-secondary font-body leading-relaxed">
              Mayday Archive is an educational platform that documents aviation disasters and safety improvements.
              We are committed to protecting your privacy and being transparent about our data practices.
              This website does not collect personal information from users unless explicitly provided.
            </p>
          </UiCardContent>
        </UiCard>

        <!-- Information We Collect -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Information We Collect</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <UiAccordion type="single" collapsible class="w-full">
              <UiAccordionItem value="item-1">
                <UiAccordionTrigger>Automatically Collected Information</UiAccordionTrigger>
                <UiAccordionContent>
                  <p class="mb-3">When you visit our website, we automatically collect certain technical information:</p>
                  <ul class="list-disc list-inside space-y-2 text-text-secondary font-body">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>IP address (anonymized for analytics)</li>
                  </ul>
                  <p class="mt-3">This information is collected through standard web server logs and is used solely to improve site performance and user experience.</p>
                </UiAccordionContent>
              </UiAccordionItem>

              <UiAccordionItem value="item-2">
                <UiAccordionTrigger>Information You Provide</UiAccordionTrigger>
                <UiAccordionContent>
                  <p class="mb-3">We only collect personal information that you voluntarily provide:</p>
                  <ul class="list-disc list-inside space-y-2 text-text-secondary font-body">
                    <li>Contact forms (if you choose to contact us)</li>
                    <li>Feedback submissions</li>
                    <li>Contribution requests</li>
                  </ul>
                  <p class="mt-3">You are never required to provide personal information to access educational content on this site.</p>
                </UiAccordionContent>
              </UiAccordionItem>

              <UiAccordionItem value="item-3">
                <UiAccordionTrigger>Cookies and Tracking</UiAccordionTrigger>
                <UiAccordionContent>
                  <p class="mb-3">We use minimal cookies for essential functionality:</p>
                  <ul class="list-disc list-inside space-y-2 text-text-secondary font-body">
                    <li><strong>Essential cookies:</strong> Dark mode preference, site navigation</li>
                    <li><strong>Analytics cookies:</strong> Anonymous usage statistics (if enabled)</li>
                  </ul>
                  <p class="mt-3">We do not use advertising cookies or third-party tracking pixels. You can disable cookies in your browser settings at any time.</p>
                </UiAccordionContent>
              </UiAccordionItem>
            </UiAccordion>
          </UiCardContent>
        </UiCard>

        <!-- How We Use Information -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>How We Use Your Information</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>We use collected information for the following purposes:</p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Site improvement:</strong> Analyze usage patterns to enhance user experience</li>
                <li><strong>Technical support:</strong> Troubleshoot technical issues</li>
                <li><strong>Communication:</strong> Respond to inquiries you submit</li>
                <li><strong>Security:</strong> Prevent abuse and maintain site integrity</li>
              </ul>
              <p class="pt-4 border-t border-border-subtle">
                <strong class="text-text-primary">We never:</strong> Sell personal data, share information with third parties for marketing, or use data for commercial purposes.
              </p>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Data Security -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Data Security & Retention</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>We implement industry-standard security measures:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>HTTPS encryption for all connections</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security audits</li>
                <li>Data minimization practices</li>
              </ul>
              <p class="mt-4 p-4 bg-bg-tertiary rounded-md border-l-4 border-cockpit-green">
                <strong class="text-text-primary">Retention:</strong> We retain technical logs for 90 days and user-submitted information only as long as necessary to fulfill its purpose.
              </p>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Children's Privacy (COPPA) -->
        <UiCard class="mb-8 border-l-4 border-aviation-amber">
          <UiCardHeader>
            <UiCardTitle class="flex items-center gap-2">
              <Icon name="lucide:shield-alert" class="w-5 h-5 text-aviation-amber" />
              Children's Privacy (COPPA Compliance)
            </UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                Mayday Archive is an educational resource suitable for students of all ages.
                We are committed to protecting children's privacy in accordance with the Children's Online Privacy Protection Act (COPPA).
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>No registration required:</strong> Children can access all educational content without creating accounts</li>
                <li><strong>No personal data collection:</strong> We do not knowingly collect personal information from children under 13</li>
                <li><strong>Parental rights:</strong> Parents can contact us to review, delete, or refuse further collection of their child's information</li>
              </ul>
              <p class="mt-4 p-4 bg-aviation-amber/10 rounded-md">
                <strong class="text-text-primary">For Educators:</strong> Teachers using this site for classroom instruction should review our content with students and comply with FERPA requirements for educational records.
              </p>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Third-Party Services -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Third-Party Services</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>Our website may use the following third-party services:</p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Hosting:</strong> GitHub Pages (static site hosting)</li>
                <li><strong>Analytics:</strong> Privacy-focused analytics (if enabled)</li>
                <li><strong>External links:</strong> Links to official investigation reports and sources</li>
              </ul>
              <p class="mt-4">
                When you click external links, you leave our site and are subject to those websites' privacy policies.
                We are not responsible for third-party privacy practices.
              </p>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Your Rights -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Your Privacy Rights</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>You have the following rights regarding your information:</p>
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="p-4 bg-bg-secondary rounded-md">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:eye" class="w-4 h-4 text-cockpit-green" />
                    Access
                  </h4>
                  <p class="text-sm">Request information we hold about you</p>
                </div>
                <div class="p-4 bg-bg-secondary rounded-md">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:edit" class="w-4 h-4 text-cockpit-green" />
                    Correction
                  </h4>
                  <p class="text-sm">Request correction of inaccurate data</p>
                </div>
                <div class="p-4 bg-bg-secondary rounded-md">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:trash-2" class="w-4 h-4 text-alert-red" />
                    Deletion
                  </h4>
                  <p class="text-sm">Request deletion of your data</p>
                </div>
                <div class="p-4 bg-bg-secondary rounded-md">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:ban" class="w-4 h-4 text-aviation-amber" />
                    Opt-Out
                  </h4>
                  <p class="text-sm">Opt out of non-essential data collection</p>
                </div>
              </div>
              <p class="mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- International Users -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>International Users & GDPR</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                Mayday Archive is accessible worldwide. If you are accessing this site from the European Union,
                you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>Right to data portability</li>
                <li>Right to restrict processing</li>
                <li>Right to object to processing</li>
                <li>Right to lodge complaints with supervisory authorities</li>
              </ul>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Changes to Policy -->
        <UiCard class="mb-8">
          <UiCardHeader>
            <UiCardTitle>Changes to This Policy</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-text-secondary font-body leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              We will notify users of significant changes by updating the "Last Updated" date at the top of this page.
              Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </UiCardContent>
        </UiCard>

        <!-- Contact Information -->
        <UiCard class="border-l-4 border-cockpit-green">
          <UiCardHeader>
            <UiCardTitle class="flex items-center gap-2">
              <Icon name="lucide:mail" class="w-5 h-5 text-cockpit-green" />
              Contact Us
            </UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div class="p-4 bg-cockpit-green/5 rounded-md border border-cockpit-green/20">
                <p class="font-display font-bold text-text-primary mb-2">Mayday Archive</p>
                <p>Email: <a href="mailto:privacy@maydayarchive.org" class="text-cockpit-green-text hover:underline">privacy@maydayarchive.org</a></p>
                <p class="mt-2 text-sm">We will respond to privacy requests within 30 days.</p>
              </div>
            </div>
          </UiCardContent>
        </UiCard>

        <!-- Bottom Navigation -->
        <div class="mt-12 pt-8 border-t border-border-subtle">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <NuxtLink
              to="/terms"
              class="flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-colors font-body"
            >
              <Icon name="lucide:file-text" class="w-4 h-4" />
              View Terms of Use
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
// SEO and meta tags
useHead({
  title: 'Privacy Policy | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy for Mayday Archive. Learn how we collect, use, and protect your information on our aviation safety educational platform.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})

// Last updated date
const lastUpdated = 'November 16, 2025'
</script>
