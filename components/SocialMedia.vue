<template>
  <div
    :class="[{'hidden lg:flex' : !contact, 'flex': contact}]"
    class="my-1"
  >
    <template v-for="(item, index) in socialAccounts">
      <a
        :href="item.path"
        :title="item.name"
        :key="index"
        class="flex-1 flex items-start justify-center text-grey-darkest no-underline mx-4">
        <span :class="item.icon" />
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },

  computed: {
    socialAccounts() {
      return this.$store.state.socialmedia.social_list
    },
  },
}
</script>

<style lang="scss" module>
.social {
  a {
    height: 25px;
    width: 25px;
  }
}
</style>
