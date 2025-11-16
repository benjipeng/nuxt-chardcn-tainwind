<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Gradient Backdrop -->
    <div class="fixed inset-0 bg-gradient-to-br from-radar-cyan/5 via-transparent to-transparent pointer-events-none" />

    <!-- Content -->
    <div class="container mx-auto px-4 py-20 relative">
      <!-- Hero -->
      <Motion
        :initial="{ opacity: 0, y: -30, scale: 0.95 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
        class="mb-12 text-center"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <Icon
            name="lucide:book-open"
            class="w-12 h-12 text-radar-cyan"
          />
        </div>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Aviation Glossary
        </h1>
        <p class="text-lg text-text-secondary font-body max-w-2xl mx-auto">
          Common terms and acronyms used in aviation accident documentation
        </p>
      </Motion>

      <!-- Glossary Content -->
      <div class="max-w-4xl mx-auto">
        <Motion
          v-for="(section, sectionIndex) in glossarySections"
          :key="sectionIndex"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 * (sectionIndex + 1), ease: [0.16, 1, 0.3, 1] }"
          class="mb-8"
        >
          <Card class="transition-all duration-300 hover:shadow-glow-cyan">
            <CardHeader>
              <CardTitle class="flex items-center gap-2">
                <Icon
                  :name="section.icon"
                  class="w-5 h-5 text-radar-cyan"
                />
                {{ section.category }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl class="space-y-4">
                <div
                  v-for="(term, termIndex) in section.terms"
                  :key="termIndex"
                  class="group"
                >
                  <dt class="font-display font-bold text-cockpit-green-text mb-1">
                    {{ term.term }}
                  </dt>
                  <dd class="text-text-secondary font-body ml-4">
                    {{ term.definition }}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from '@oku-ui/motion'

useSeoMeta({
  title: 'Glossary - Mayday Archive',
  description: 'Aviation terms and acronyms explained for disaster documentation.',
})

const glossarySections = [
  {
    category: 'Flight Operations',
    icon: 'lucide:plane-takeoff',
    terms: [
      {
        term: 'ATC (Air Traffic Control)',
        definition: 'Ground-based controllers who direct aircraft movements, maintain separation, and manage airspace.'
      },
      {
        term: 'CRM (Crew Resource Management)',
        definition: 'Training and procedures that improve teamwork, communication, and decision-making in the cockpit.'
      },
      {
        term: 'CFIT (Controlled Flight Into Terrain)',
        definition: 'When an airworthy aircraft under pilot control crashes into terrain, water, or obstacles.'
      },
      {
        term: 'V1',
        definition: 'Critical decision speed during takeoff. Below V1, the crew can abort; above V1, they must continue.'
      },
      {
        term: 'VFR/IFR',
        definition: 'Visual Flight Rules (flying by sight) vs. Instrument Flight Rules (flying by instruments in poor visibility).'
      }
    ]
  },
  {
    category: 'Safety Systems',
    icon: 'lucide:shield',
    terms: [
      {
        term: 'CVR (Cockpit Voice Recorder)',
        definition: 'Records all audio in the cockpit including crew conversations and radio communications. Critical for accident investigation.'
      },
      {
        term: 'FDR (Flight Data Recorder)',
        definition: 'Records hundreds of flight parameters (speed, altitude, control inputs). Often called the "black box" (actually orange).'
      },
      {
        term: 'GPWS (Ground Proximity Warning System)',
        definition: 'Automated system that alerts pilots when the aircraft is too close to terrain or obstacles.'
      },
      {
        term: 'TCAS (Traffic Collision Avoidance System)',
        definition: 'Automated system that detects nearby aircraft and provides collision avoidance instructions.'
      }
    ]
  },
  {
    category: 'Investigation & Regulation',
    icon: 'lucide:search',
    terms: [
      {
        term: 'NTSB (National Transportation Safety Board)',
        definition: 'US agency that investigates all civil aviation accidents and makes safety recommendations.'
      },
      {
        term: 'FAA (Federal Aviation Administration)',
        definition: 'US regulatory body that sets and enforces aviation safety standards.'
      },
      {
        term: 'ICAO (International Civil Aviation Organization)',
        definition: 'UN agency that establishes international aviation standards and protocols.'
      },
      {
        term: 'AD (Airworthiness Directive)',
        definition: 'Legally enforceable regulations issued when an unsafe condition exists in an aircraft type.'
      }
    ]
  },
  {
    category: 'Technical Terms',
    icon: 'lucide:settings',
    terms: [
      {
        term: 'Stall',
        definition: 'Loss of lift when airflow over the wings becomes disrupted (not related to engine failure).'
      },
      {
        term: 'Wind Shear',
        definition: 'Sudden change in wind speed or direction that can destabilize an aircraft during takeoff or landing.'
      },
      {
        term: 'Hypoxia',
        definition: 'Oxygen deficiency affecting the brain, often from cabin depressurization or high altitude.'
      },
      {
        term: 'Fatigue (Metal)',
        definition: 'Weakening of aircraft structure from repeated stress cycles over time.'
      },
      {
        term: 'Hydraulics',
        definition: 'Pressurized fluid systems that control flight surfaces, landing gear, and brakes.'
      }
    ]
  }
]
</script>
