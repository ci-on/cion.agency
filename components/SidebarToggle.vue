<template>
  <div class="toggle-btn block lg:hidden xl:hidden z-30 fixed text-grey">
    <button 
      class="px-4 py-2 flex items-center justify-center outline-none"
      @click="handleClick">
      <span class="brgr mr-3 outline-none overflow-hidden">
        <div class="my-1 line"/>
        <div class="my-1 line"/>
        <div class="my-1 line relative -ml-1"/>
      </span>Menu
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    handleClick() {
      this.$store.dispatch('sidebar/toggleSidebar', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-btn {
  top: 14px;
  right: 10px;

  button {
    &:focus {
      @apply outline-none;
    }
  }
}

.brgr {
  width: 30px;

  > .line {
    height: 3px;
    width: 30px;
    background: #333;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
