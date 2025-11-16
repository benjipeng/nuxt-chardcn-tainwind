import { motionPlugin } from '@oku-ui/motion'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(motionPlugin)
})
