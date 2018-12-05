<template>
  <div class="min-h-content flex flex-col-reverse md:flex-row justify-end">
    <div class="w-full md:w-1/2 relative z-10 mb-16 md:mb-0 min-h-half-content md:min-h-0 overflow-hidden md:overflow-visible">
      <!-- left / bottom -->
      <transition name="fade">
        <component
          :is="currentLeft"
          class="absolute pin"
        />
      </transition>
      <transition name="fade">
        <component
          :is="nextLeft"
          class="absolute pin"
        />
      </transition>
    </div>
    <div class="w-full md:w-1/2 relative h-content md:h-auto">
      <!-- right / top -->
      <transition name="fade">
        <component
          :is="currentRight"
          class="absolute pin"
        />
      </transition>
      <transition name="fade">
        <component
          :is="nextRight"
          class="absolute pin"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import LandingImage from '~/components/Sections/Landing/image'
import DigitalCopy from '~/components/Sections/Digital/copy'
import StrategyCopy from '~/components/Sections/Strategy/copy'
import CreativeCopy from '~/components/Sections/Creative/copy'
import ClientsCopy from '~/components/Sections/Clients/copy'
import ContactForm from '~/components/Sections/Contact/form'

import LandingCopy from '~/components/Sections/Landing/copy'
import DigitalImage from '~/components/Sections/Digital/image'
import StrategyImage from '~/components/Sections/Strategy/image'
import CreativeImage from '~/components/Sections/Creative/image'
import ClientsList from '~/components/Sections/Clients/list'
import ContactInfo from '~/components/Sections/Contact/info'

import sleepMixin from '~/mixins/sleep'

export default {
  components: {
    LandingImage,
    DigitalCopy,
    StrategyCopy,
    CreativeCopy,
    ClientsCopy,
    ContactForm,
    LandingCopy,
    DigitalImage,
    StrategyImage,
    CreativeImage,
    ClientsList,
    ContactInfo,
  },

  mixins: [sleepMixin],

  data() {
    return {
      sections: [
        'landing',
        'digital',
        'strategy',
        'creative',
        'clients',
        'contact',
      ],
      left: [
        'landing-copy',
        'digital-image',
        'strategy-image',
        'creative-image',
        'clients-list',
        'contact-info',
      ],
      right: [
        'landing-image',
        'digital-copy',
        'strategy-copy',
        'creative-copy',
        'clients-copy',
        'contact-form',
      ],
      currentLeft: null,
      currentRight: null,
      nextLeft: null,
      nextRight: null,
      timeID: null,
      section: 'landing',
    }
  },

  mounted() {
    const index = this.sections.findIndex(
      item => item === this.$route.params.section
    )

    this.section = this.sections[index]
    if (this.section == 'landing' || this.section == 'contact') {
      return
    }

    this.timeID = setTimeout(async () => {
      this.section = this.sections[index + 1]
      this.$router.push(`/${this.section}`)
      this.$nuxt.$emit('routeIsChanging', this.section)
    }, 12500)

    this.$nuxt.$on('noAutoSlide', () => {
      clearTimeout(this.timeID)
    })
  },

  created() {
    this.currentLeft = this.left.find(component =>
      component.startsWith(this.$route.params.section)
    )
    this.currentRight = this.right.find(component =>
      component.startsWith(this.$route.params.section)
    )
  },

  methods: {
    async display() {
      // this.$nuxt.$emit('routeIsChanging', this.section)
      this.nextRight = this.right.find(component =>
        component.startsWith(this.section)
      )

      await this.sleep(1000)

      this.currentLeft = null
      this.nextLeft = this.left.find(component =>
        component.startsWith(this.section)
      )
    },
  },

  async beforeRouteUpdate(to, from, next) {
    clearTimeout(this.timeID)

    this.section = to.path.slice(1)

    await this.display()

    // this is the fade duration
    setTimeout(() => {
      next()
    }, 1000)
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
