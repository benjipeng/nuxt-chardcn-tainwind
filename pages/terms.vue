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
          <p class="mt-6 text-text-secondary font-body">
            Please read these terms carefully before using Mayday Archive. By accessing this website, you agree to be bound by these terms.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Acceptance of Terms -->
        <Card class="mb-8 border-l-4 border-cockpit-green">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:file-check" class="w-5 h-5 text-cockpit-green" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                By accessing and using Mayday Archive ("the Site"), you accept and agree to be bound by these Terms of Use
                and our Privacy Policy. If you do not agree to these terms, please do not use this website.
              </p>
              <p class="p-4 bg-cockpit-green/5 rounded-md border-l-4 border-cockpit-green">
                <strong class="text-text-primary">Important:</strong> These terms constitute a legally binding agreement between you and Mayday Archive.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Description of Service -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Description of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                Mayday Archive is an educational platform that provides:
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>Comprehensive documentation of significant aviation disasters</li>
                <li>Analysis of accident causes and investigation findings</li>
                <li>Information about safety improvements resulting from accidents</li>
                <li>Educational resources for students, educators, and aviation enthusiasts</li>
                <li>Timeline and statistical data about aviation safety</li>
              </ul>
              <p class="mt-4 p-4 bg-bg-tertiary rounded-md">
                <strong class="text-text-primary">Educational Purpose:</strong> This website is designed for educational,
                research, and informational purposes only. It is not intended for commercial use.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- User Conduct -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>User Conduct & Prohibited Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible class="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Permitted Uses</AccordionTrigger>
                <AccordionContent>
                  <p class="mb-3">You may use Mayday Archive for:</p>
                  <ul class="list-disc list-inside space-y-2 text-text-secondary font-body">
                    <li><strong>Educational purposes:</strong> Classroom instruction, student research, academic study</li>
                    <li><strong>Personal learning:</strong> Self-education about aviation safety</li>
                    <li><strong>Professional development:</strong> Aviation industry training and reference</li>
                    <li><strong>Research:</strong> Non-commercial research and analysis</li>
                    <li><strong>Sharing:</strong> Linking to content with proper attribution</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger class="text-alert-red-text">Prohibited Activities</AccordionTrigger>
                <AccordionContent>
                  <p class="mb-3 text-alert-red-text font-bold">You may NOT:</p>
                  <ul class="list-disc list-inside space-y-2 text-text-secondary font-body">
                    <li>Use content for commercial purposes without written permission</li>
                    <li>Reproduce, redistribute, or republish large portions of content</li>
                    <li>Modify, adapt, or create derivative works without authorization</li>
                    <li>Remove copyright notices, watermarks, or attribution</li>
                    <li>Use automated tools to scrape, download, or harvest content</li>
                    <li>Attempt to gain unauthorized access to any part of the Site</li>
                    <li>Transmit malware, viruses, or harmful code</li>
                    <li>Impersonate Mayday Archive or misrepresent affiliation</li>
                    <li>Use content in a manner that is defamatory, harassing, or offensive</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Consequences of Violation</AccordionTrigger>
                <AccordionContent>
                  <p class="text-text-secondary font-body">
                    Violation of these terms may result in immediate termination of your access to the Site,
                    legal action to enforce our intellectual property rights, and/or reporting to appropriate authorities.
                    We reserve the right to pursue all available legal remedies.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <!-- Intellectual Property -->
        <Card class="mb-8 border-l-4 border-aviation-amber">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:copyright" class="w-5 h-5 text-aviation-amber" />
              Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                All content on Mayday Archive, including but not limited to text, graphics, logos, images, data compilations,
                and software, is the property of Mayday Archive or its content suppliers and is protected by international
                copyright, trademark, and other intellectual property laws.
              </p>

              <div class="p-4 bg-bg-secondary rounded-md">
                <h4 class="font-display font-bold text-text-primary mb-3">Content Ownership</h4>
                <ul class="space-y-2">
                  <li><strong>Original Content:</strong> Articles, analysis, and original research © Mayday Archive</li>
                  <li><strong>Historical Images:</strong> Public domain or licensed with proper attribution</li>
                  <li><strong>Investigation Reports:</strong> Official documents cited with source attribution</li>
                  <li><strong>Data & Statistics:</strong> Compiled from public sources with verification</li>
                </ul>
              </div>

              <div class="mt-4 p-4 bg-aviation-amber/10 rounded-md border border-aviation-amber/30">
                <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                  <Icon name="lucide:scale" class="w-4 h-4 text-aviation-amber" />
                  Fair Use & Attribution
                </h4>
                <p>
                  Limited excerpts may be used under fair use doctrine for educational purposes with proper attribution.
                  Always cite Mayday Archive and include a link to the original content.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Educational Use License -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:graduation-cap" class="w-5 h-5 text-cockpit-green" />
              Educational Use License
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                We grant educators and educational institutions a limited, non-exclusive, non-transferable license to use
                Mayday Archive content for classroom instruction under the following conditions:
              </p>
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="p-4 bg-cockpit-green/5 rounded-md border border-cockpit-green/20">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:check-circle" class="w-4 h-4 text-cockpit-green" />
                    Allowed
                  </h4>
                  <ul class="text-sm space-y-1 list-disc list-inside">
                    <li>Classroom presentations</li>
                    <li>Student assignments</li>
                    <li>Course materials (non-commercial)</li>
                    <li>Educational handouts</li>
                  </ul>
                </div>
                <div class="p-4 bg-alert-red/5 rounded-md border border-alert-red/20">
                  <h4 class="font-display font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Icon name="lucide:x-circle" class="w-4 h-4 text-alert-red" />
                    Not Allowed
                  </h4>
                  <ul class="text-sm space-y-1 list-disc list-inside">
                    <li>Inclusion in paid courses</li>
                    <li>Textbook publication</li>
                    <li>Commercial training materials</li>
                    <li>Sale or licensing to others</li>
                  </ul>
                </div>
              </div>
              <p class="mt-4 italic">
                Attribution required: "Source: Mayday Archive (maydayarchive.org)"
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Accuracy & Disclaimers -->
        <Card class="mb-8 border-l-4 border-alert-red">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:alert-triangle" class="w-5 h-5 text-alert-red" />
              Content Accuracy & Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                While we strive for accuracy and rely on official investigation reports, please note:
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Information accuracy:</strong> Content is provided "as is" without warranties of any kind</li>
                <li><strong>Sources:</strong> We cite official sources but cannot guarantee completeness or currency</li>
                <li><strong>Interpretations:</strong> Analysis and commentary represent educational perspectives</li>
                <li><strong>Not professional advice:</strong> Content is not a substitute for professional aviation expertise</li>
              </ul>
              <div class="mt-4 p-4 bg-alert-red/10 rounded-md border border-alert-red/30">
                <p class="font-bold text-text-primary mb-2">IMPORTANT DISCLAIMER:</p>
                <p class="text-sm">
                  Mayday Archive is an independent educational project and is not affiliated with, endorsed by,
                  or connected to any airline, aircraft manufacturer, aviation authority, or official investigation body.
                  Official investigation reports should always be consulted for authoritative information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Limitation of Liability -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                To the fullest extent permitted by law:
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>Mayday Archive and its operators shall not be liable for any damages arising from use of this website</li>
                <li>We make no guarantees about site availability, functionality, or error-free operation</li>
                <li>We are not responsible for any decisions made based on information from this site</li>
                <li>Use of this website is at your own risk</li>
              </ul>
              <p class="mt-4 p-4 bg-bg-tertiary rounded-md text-sm">
                Some jurisdictions do not allow limitation of liability for certain damages. In such cases,
                our liability will be limited to the maximum extent permitted by law.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- External Links -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>External Links & Third-Party Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                Mayday Archive contains links to external websites, including official investigation reports,
                news sources, and aviation authorities. These links are provided for convenience and informational purposes.
              </p>
              <ul class="list-disc list-inside space-y-2 mt-3">
                <li>We do not control external websites and are not responsible for their content</li>
                <li>Inclusion of a link does not imply endorsement</li>
                <li>External sites have their own terms of use and privacy policies</li>
                <li>We are not liable for any harm resulting from visiting external links</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- User Contributions -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>User Contributions & Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                If you submit feedback, corrections, or contributions to Mayday Archive:
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>You grant us a non-exclusive, worldwide, royalty-free license to use your submission</li>
                <li>You warrant that you have the right to submit the content</li>
                <li>You agree your submission does not violate any third-party rights</li>
                <li>We may edit, modify, or choose not to publish submissions at our discretion</li>
                <li>We will credit contributors when appropriate</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- Modifications to Terms -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Modifications to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon
                posting to this page with an updated "Last Updated" date.
              </p>
              <p class="mt-3">
                Your continued use of the Site after changes are posted constitutes acceptance of the modified terms.
                We encourage you to review these terms periodically.
              </p>
              <p class="mt-3 p-4 bg-bg-secondary rounded-md">
                <strong class="text-text-primary">Notification:</strong> For significant changes, we will display a notice
                on the homepage for at least 30 days.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Governing Law -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Governing Law & Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                These Terms of Use shall be governed by and construed in accordance with applicable laws,
                without regard to conflict of law principles.
              </p>
              <ul class="list-disc list-inside space-y-2 mt-3">
                <li>Any disputes will be resolved through good-faith negotiation first</li>
                <li>If negotiation fails, disputes may be subject to binding arbitration</li>
                <li>You agree to resolve disputes individually, not as part of a class action</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- Severability -->
        <Card class="mb-8">
          <CardHeader>
            <CardTitle>Severability & Entire Agreement</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                <strong class="text-text-primary">Severability:</strong> If any provision of these terms is found to be
                unenforceable, the remaining provisions will continue in full force.
              </p>
              <p class="mt-3">
                <strong class="text-text-primary">Entire Agreement:</strong> These Terms of Use, together with our
                Privacy Policy, constitute the entire agreement between you and Mayday Archive regarding use of this website.
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Contact Information -->
        <Card class="border-l-4 border-cockpit-green">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Icon name="lucide:help-circle" class="w-5 h-5 text-cockpit-green" />
              Questions About These Terms?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4 text-text-secondary font-body">
              <p>
                If you have questions, concerns, or requests regarding these Terms of Use, please contact us:
              </p>
              <div class="p-4 bg-cockpit-green/5 rounded-md border border-cockpit-green/20">
                <p class="font-display font-bold text-text-primary mb-2">Mayday Archive</p>
                <p>Email: <a href="mailto:legal@maydayarchive.org" class="text-cockpit-green-text hover:underline">legal@maydayarchive.org</a></p>
                <p class="mt-2 text-sm">We will respond to inquiries within 5-7 business days.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Acknowledgment -->
        <div class="mt-8 p-6 bg-bg-secondary rounded-lg border border-border-subtle">
          <p class="text-center text-text-secondary font-body">
            By using Mayday Archive, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
        </div>

        <!-- Bottom Navigation -->
        <div class="mt-12 pt-8 border-t border-border-subtle">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <NuxtLink
              to="/privacy"
              class="flex items-center gap-2 text-cockpit-green-text hover:text-cockpit-green transition-colors font-body"
            >
              <Icon name="lucide:shield" class="w-4 h-4" />
              View Privacy Policy
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
  title: 'Terms of Use | Mayday Archive',
  meta: [
    {
      name: 'description',
      content: 'Terms of Use for Mayday Archive. Learn about acceptable use, intellectual property rights, and legal terms for our aviation safety educational platform.'
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
