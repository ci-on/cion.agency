<template>
  <div class="h-screen">
    <Sidebar/>
    <Navigation/>
    <ContactFloater/>
    <!-- <ScrollDownArrow/> -->
    <nuxt/>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation'
import ScrollDownArrow from '~/components/ScrollDownArrow'
import ContactFloater from '~/components/ContactFloater'
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Navigation,
    Sidebar,
    ContactFloater,
    ScrollDownArrow,
  },
}
</script>

<style lang="scss" module>
@import 'assets/css/scss/index';
</style>
