<template>
  <header class="sticky pin-t bg-white w-full h-16 flex items-center justify-between z-20">
    <nuxt-link
      to="/"
      class="ml-4 home-link"
      @click.native="handleNavClick"
    >
      <img
        src="~/assets/images/logo.svg"
        alt="CION Agency">
    </nuxt-link>
    <div class="flex items-center justify-between">
      <nav class="hidden lg:flex relative py-1">
        <div
          v-for="section in sections"
          :key="section"
          :id="`${section}Div`"
          class="px-4"
        >
          <nuxt-link
            :to="`/${section}`"
            :class="{ 'pointer-events-none': !clickEnabled }"
            class="text-center text-base text-black font-semibold no-underline text-grey-darkest"
            @click.native="handleNavClick(section)"
          >{{ section | capitalize }}</nuxt-link>
          <div
            :id="`${section}Indicator`"
            class=""
          />
        </div>
        <div
          ref="routing"
          class="absolute border border-black pin-b"
        />
      </nav>
      <SocialMedia/>
      <SidebarToggle />
    </div>
  </header>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
import SidebarToggle from '~/components/SidebarToggle.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    SocialMedia,
    SidebarToggle,
  },

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
      divWidth: [],
      indicatorWidth: [],
      clickEnabled: true,
    }
  },

  computed: {
    marginWidth() {
      return this.sections.map((section, index) => {
        return (this.divWidth[index] - this.indicatorWidth[index]) / 2
      })
    },

    positions() {
      return this.sections.map((section, index) => {
        let left = index
        let x = 0
        while (left > 0) {
          x = x + this.divWidth[left - 1]
          left = left - 1
        }
        return x + this.marginWidth[index]
      })
    },
  },

  mounted() {
    this.divWidth = this.sections.map(section => {
      const width = this.$el.querySelector(`#${section}Div`).clientWidth
      return width
    })

    this.indicatorWidth = this.sections.map(section => {
      const width = this.$el.querySelector(`#${section}Indicator`).clientWidth
      return width
    })

    this.$nuxt.$on('routeIsChanging', navigated => {
      const from = this.sections.findIndex(
        section => section === this.$route.params.section
      )
      const to = this.sections.findIndex(section => section === navigated)
      if (process.client) {
        this.animateFromTo(from, to)
      }
    })

    const index = this.sections.findIndex(
      section => section === this.$route.params.section
    )

    if (process.client) {
      this.animateFromTo(null, index)
    }
  },

  methods: {
    handleNavClick(section) {
      this.$nuxt.$emit('noAutoSlide')
      this.$nuxt.$emit('routeIsChanging', section)
    },

    animateFromTo(fromIndex, toIndex) {
      TweenMax.fromTo(
        this.$refs.routing,
        4,
        {
          x: fromIndex !== null ? this.positions[fromIndex] : 0,
          width: fromIndex !== null ? this.indicatorWidth[fromIndex] : 0,
        },
        {
          x: this.positions[toIndex],
          width: this.indicatorWidth[toIndex],
          onStart: () => {
            this.clickEnabled = false
          },
          onComplete: () => {
            this.clickEnabled = true
          },
        }
      )
    },
  },
}
</script>

<style lang="scss">
@import '~assets/css/scss/index';
</style>
