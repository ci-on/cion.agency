<template>
  <div>
    <div class="flex flex-col container mx-auto swiper-container h-content">
      <div class="swiper-wrapper h-content">
        <welcome
          class="swiper-slide"
          data-hash="welcome"
        />
        <digital
          class="swiper-slide"
          data-hash="digital"
        />
        <strategy
          class="swiper-slide"
          data-hash="strategy"
        />
        <creative
          class="swiper-slide"
          data-hash="creative"
        />
        <clients
          class="swiper-slide"
          data-hash="clients"
        />
        <contact
          class="swiper-slide"
          data-hash="contact"
        />
      </div>
    </div>
    <transition name="fade">
      <contact-floater v-show="$route.hash.slice(1) !== 'contact'" />
    </transition>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import Digital from '~/components/Digital.vue'
import Strategy from '~/components/Strategy.vue'
import Creative from '~/components/Creative.vue'
import Clients from '~/components/Clients.vue'
import Contact from '~/components/Contact.vue'
import ContactFloater from '~/components/ContactFloater.vue'

import Swiper from 'swiper'

export default {
  components: {
    Welcome,
    Digital,
    Strategy,
    Creative,
    Clients,
    Contact,
    ContactFloater,
  },

  mounted() {
    if (process.client) {
      let mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheel: true,
        speed: 1000,
        hashNavigation: {
          watchState: true,
        },
      })
    }
  },
}
</script>
