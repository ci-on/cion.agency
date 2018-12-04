<template>
  <div class="block md:hidden text-grey">
    <button
      class="p-2 outline-none"
      @click="handleClick">
      &#x2630;
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
      this.$store.dispatch('sidebar/toggleSidebar')
    },
  },
}
</script>
