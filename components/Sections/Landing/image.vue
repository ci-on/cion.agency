<template>
  <div class="h-full md:py-8">
    <div
      ref="background"
      class="w-full h-full bg-grey relative opacity-0"
    >
      <div
        ref="image"
        class="bg-landing-image w-full h-full rippled-image"
      />

      <div class="absolute flex pin-t pin-r md:pin-none md:pin-b md:pin-r text-black">
        <button
          class="bg-navigation-blue hover:bg-blue w-5 h-5"
          @click="navigateTo('/digital')"
        />
        <button
          class="bg-navigation-yellow hover:bg-yellow-dark w-5 h-5"
          @click="navigateTo('/strategy')"
        />
        <button
          class="bg-navigation-red hover:bg-red-dark w-5 h-5"
          @click="navigateTo('/creative')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sleepMixin from '~/mixins/sleep'
import $ from 'jquery'
if (process.client) {
  const ripples = require('jquery.ripples')
}

export default {
  name: 'LandingImage',

  mixins: [sleepMixin],

  data() {
    return {
      width: 0,
      height: 0,
      autonav: true,
    }
  },

  mounted() {
    this.height = this.$refs.image.offsetHeight
    this.width = this.$refs.image.offsetWidth

    $('.bg-landing-image').ripples({
      resolution: 200,
      dropRadius: 20,
      perturbance: 0.04,
      // interactive: false,
    })

    if (process.client) {
      TweenMax.to(this.$refs.background, 0.1, {
        opacity: 1,
        delay: 0.1,
      })
    }

    this.$nuxt.$on('beginRipples', async () => {
      await this.beginRipples()
      if (this.autonav) {
        this.$router.push('/digital')
      }
    })

    this.$nuxt.$on('noAutoSlide', () => {
      this.autonav = false
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('beginRipples')
    $('.bg-landing-image').ripples('destroy')
  },

  methods: {
    async beginRipples() {
      this.$nuxt.$emit('routeIsChanging', 'digital')

      for (let i = 0; i < this.$store.state.timing.ripplesAmount; i++) {
        $('.bg-landing-image').ripples(
          'drop',
          0,
          this.height * 0.57,
          10 * Math.random(),
          10 * Math.random()
        )
        await this.sleep(this.$store.state.timing.rippleInterval)
      }

      await this.sleep(this.$store.state.timing.ripplesBouncing)
    },

    async navigateTo(section) {
      this.$nuxt.$emit('noAutoSlide')
      this.$nuxt.$emit('routeIsChanging', section.slice(1))

      for (let i = 0; i < this.$store.state.timing.ripplesAmount; i++) {
        $('.rippled-image').ripples(
          'drop',
          (1 - 0.95) * this.width * Math.random() + 0.95 * this.width,
          (1 - 0.95) * this.height * Math.random() + 0.95 * this.height,
          10 * Math.random(),
          10 * Math.random()
        )
        await this.sleep(this.$store.state.timing.rippleInterval)
      }

      await this.sleep(this.$store.state.timing.ripplesBouncing)
      this.$router.push(section)
    },
  },
}
</script>

<style>
.bg-landing-image {
  background: url('~assets/images/landing-bg.png') no-repeat center center;
}
</style>
