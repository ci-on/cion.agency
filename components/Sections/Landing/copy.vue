<template>
  <div class="md:-mr-20 px-6 md:px-0 md:h-full md:flex items-center">
    <div ref="text">
      <div class="flex md:flex-row flex-col relative">
        <h1 class="font-sans text-4xl md:text-5xl lg:text-8xl font-black italic uppercase text-grey-darkest">
          Give Innovation a nudge
        </h1>
        <div
          class="hidden md:block md:absolute"
          style="width: 290px; bottom: 16px; left: 370px;">
          <BlueSlider/>
        </div>
      </div>
      <p class="text-small lg:text-xl text-grey-darkest">We have a knack for transforming businesses with creative digital solutions</p>
    </div>
  </div>
</template>

<script>
import BlueSlider from '~/components/BlueSlider'

export default {
  components: {
    BlueSlider,
  },

  mounted() {
    if (process.client) {
      TweenMax.from(this.$refs.text, 2, {
        transform: 'translateX(-80px)',
        delay: this.$store.state.timing.landingCopyDelay / 1000,
      })
    }
  },
}
</script>
