<template>
  <div class="subscribe md:flex items-end my-2">
    <div class="flex-1 flex flex-col">
      <h3 class="text-2xl font-black uppercase italic">Subscribe</h3>
      <form>
        <BaseInput
          type="email"
          class="p-2 w-full border rounded focus:border-brand-teal"
          placeholder="Email Address" />
      </form>
    </div>
    <div class="flex justify-center md:justify-start mt-2 md:mt-0">
      <button
        class="flex items-center outline-none p-2 px-4 ml-5 rounded-full border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
        @click="subscribe"
      >
        <span class="icon-envelop flex mr-3"/>
        <h4 class="flex-1 uppercase italic">Submit</h4>
      </button>
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/BaseInput'

export default {
  components: {
    BaseInput,
  },

  methods: {
    /**
     * Subscribe for newsletter.
     */
    subscribe() {
      alert('Subscribed')
    },
  },
}
</script>

<style lang="scss">
.subscribe {
  width: 70%;
}
</style>
