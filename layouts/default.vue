<template>
  <div class="min-h-screen container mx-auto">
    <Navigation class="z-20" />
    <Sidebar class="z-30" />
    <ContactFloater class="z-20" />
    <nuxt/>
  </div>
</template>
<script>
import appConfig from '~/app.config'

import Navigation from '~/components/Navigation'
import ContactFloater from '~/components/ContactFloater'
import Sidebar from '~/components/Sidebar'

export default {
  head() {
    return {
      title: `CION Agency | ${appConfig.title}`,
    }
  },

  components: {
    Navigation,
    Sidebar,
    ContactFloater,
  },
}
</script>
