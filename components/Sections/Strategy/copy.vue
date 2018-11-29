<template>
  <div class="h-full md:py-8">
    <div
      ref="image"
      class="w-full bg-strategy-image text-white p-20 h-full flex flex-col justify-center relative rippled-image"
    >
      <div class="text-3xl opacity-50">02</div>
      <div class="absolute">
        <img
          src="~/assets/images/strategy/set.svg">
      </div>
      <div class="absolute">
        <img
          src="~/assets/images/strategy/arrow-up.svg">
      </div>
      <h1 class="mb-6 text-5xl font-black italic uppercase">
        Strategy
        <span class="icon-arrow-right relative"/>
      </h1>
      <p class="mb-6">
        We work to build innovative experiences for our Clients by combining technology with marketing.
        Paired together this makes the best platform to generate results for you.
      </p>
      <ul class="list-reset pl-4">
        <li
          v-for="(item, index) in list_data"
          :key="index"
          class="py-4">
          <span class="icon-arrow-right mr-4"/>
          {{ item.name }}
        </li>
      </ul>


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
  mixins: [sleepMixin],

  data() {
    return {
      list_data: [
        {
          name: 'Brand Consultation',
        },
        {
          name: 'Market Research',
        },
        {
          name: 'Audience Connection',
        },
        {
          name: 'Marketing Strategy',
        },
      ],
    }
  },

  mounted() {
    $(this.$refs.image).ripples({
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.04,
      // interactive: false,
    })
  },

  beforeDestroy() {
    $('.rippled-image').ripples('destroy')
    $(this.$refs.image).ripples('destroy')
  },

  methods: {
    async navigateTo(section) {
      this.$nuxt.$emit('noAutoSlide')
      this.$nuxt.$emit('routeIsChanging', section.slice(1))

      const height = this.$refs.image.offsetHeight
      const width = this.$refs.image.offsetWidth
      for (let i = 0; i < 10; i++) {
        $('.rippled-image').ripples(
          'drop',
          (1 - 0.95) * width * Math.random() + 0.95 * width,
          (1 - 0.95) * height * Math.random() + 0.95 * height,
          10 * Math.random(),
          10 * Math.random()
        )
        await this.sleep(250)
      }
      await this.sleep(5500)
      this.$router.push(section)
    },
  },
}
</script>

<style>
.bg-strategy-image {
  background: url('~assets/images/strategy/strategy-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
