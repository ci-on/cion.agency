<template>
  <div class="relative container mx-auto min-h-screen md:h-screen font-sans z-10">
    <ContactFloater class="z-40"/>
    <Sidebar class="z-50"/>
    <Navigation class="z-30"/>
    <div class="flex items-center justify-center min-h-content md:h-content z-20">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import appConfig from '~/app.config'
import Sidebar from '~/components/Sidebar'
import Navigation from '~/components/Navigation'
import ContactFloater from '~/components/ContactFloater'

export default {
  head() {
    return {
      title: `Ellinova Solutions | ${appConfig.title}`,
    }
  },

  components: {
    Sidebar,
    Navigation,
    ContactFloater,
  },
}
</script>
