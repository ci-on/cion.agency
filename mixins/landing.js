import sleepMixin from '~/mixins/sleep'
import { mapState, mapMutations } from 'vuex'

export default {
  mixins: [sleepMixin],

  data() {
    return {
      showRight: true,
      showLeft: false,
      showNext: false,
      current: 'landing',
      sections: [
        'landing',
        'digital',
        'strategy',
        'creative',
        'clients',
        'contact',
      ],
    }
  },

  computed: {
    ...mapState('navigation', ['autoNavIsEnabled']),
  },

  transition: {
    enterActiveClass: 'animated fadeIn',
    leaveActiveClass: 'animated fadeOut',
    mode: 'in-out',
  },

  methods: {
    ...mapMutations(['navigation/setTimeoutId', 'navigation/clearTimeoutIds']),

    async showSection() {
      await this.sleep(1000)
      this.showLeft = true
    },

    cancel() {
      this['navigation/clearTimeoutIds']()
    },
  },

  beforeDestroy() {
    this.cancel()
  },

  async mounted() {
    this.cancel()

    this.current = this.$nuxt.$route.name

    this.$nuxt.$on('routeChanged', current => {
      this.current = current.name
    })

    this.showSection()

    if (this.autoNavigates) {
      const timeoutId = setTimeout(() => {
        this.current = this.sections[
          this.sections.findIndex(item => item == this.current) + 1
        ]
        if (this.autoNavIsEnabled) {
          this.$router.push(this.current)
        }
      }, 10000)
      this['navigation/setTimeoutId'](timeoutId)
    }
  },

  async beforeRouteLeave(to, from, next) {
    this.cancel()
    this.showRight = false
    // if (this.overlaps) {
    // await this.sleep(300)
    this.showNext = true
    // }
    await this.sleep(1000)
    next()
  },
}
