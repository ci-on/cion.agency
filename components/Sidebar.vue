<template>
  <div class="sidebar h-full absolute z-30">
    <div
      :class="[{active: open}]"
      class="sidebar-inner h-full px-8 py-4 shadow-lg z-30">
      <div class="flex justify-end">
        <span
          class="px-4 py-2 close text-lg"
          @click.stop="handleClick">
          x
        </span>
      </div>
      <nav class="block text-left">
        <template v-for="section in sections">
          <nuxt-link
            :key="section"
            :to="section"
            class="block text-base text-black font-semibold no-underline text-grey-darkest text-left text-white p-3 py-5 uppercase tracking-wide"
            @click.native="handleClick"
          >
            {{ section | capitalize }}
          </nuxt-link>
        </template>
      </nav>
    </div>
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
      this.$store.dispatch('sidebar/toggleSidebar', true)
    },
  },
}
</script>


<style lang="scss" scoped>
@import '~assets/css/scss/breakpoints';

.sidebar {
  .sidebar-inner {
    width: 300px;
    background: #333;
    position: fixed;
    top: 0;
    right: 0;
    color: #fff;
    transition: all 0.2s ease;

    @include breakpoint(md) {
      width: 400px;
    }

    &.active {
      right: -400px;
    }
  }

  .close {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  nav {
    > a {
      border-bottom: 1px solid #444;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.8;
        padding-left: 1.3em;
      }
    }
  }
}
</style>
