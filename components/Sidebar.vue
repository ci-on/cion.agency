<template>
  <div
    :class="{ closed: !open }"
    class="fixed pin bg-grey-darkest transition"
  >
    <button
      class="p-4 text-lg absolute pin-t pin-r text-white font-bold leading-none"
      @click.stop="handleClick">
      &#x2715;
    </button>
    <nav class="h-full flex flex-col items-center justify-around">
      <template v-for="section in sections">
        <nuxt-link
          :key="section"
          :to="section"
          class="text-base font-semibold no-underline text-left text-white uppercase tracking-extra-wide"
          @click.native="handleClick"
        >
          {{ section | capitalize }}
        </nuxt-link>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
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
    }
  },

  computed: {
    open() {
      return this.$store.state.sidebar.sidebarOpen
    },
  },

  methods: {
    handleClick() {
      this.$store.dispatch('sidebar/toggleSidebar')
    },
  },
}
</script>

<style>
.transition {
  transition: all 0.5s ease;
}

.closed {
  transform: translateX(100%);
}
</style>
