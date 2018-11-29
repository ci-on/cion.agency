<template>
  <div class="flex flex-col items-center justify-center">
    <h3 class="font-black uppercase my-2 italic">Phone</h3>
    <p><span class="text-black font-semibold">General:</span>
      <a
        class="text-blue italic"
        href="tel:+18006767830">
        800.676.7830
      </a>
    </p>

    <h3 class="font-black uppercase my-2 italic">Email</h3>
    <p><span class="text-black font-semibold">General:</span>
      <a
        class="text-blue italic"
        href="mailto:info@eliinova.com">
        info@eliinova.com
      </a>
    </p>
    <p><span class="text-black font-semibold">Support:</span>
      <a
        class="text-blue italic"
        href="mailto:support@eliinova.com">
        support@eliinova.com
      </a>
    </p>

    <h3 class="font-black uppercase my-2 italic">Location</h3>
    <p>
      <a
        role="button"
        class="text-blue italic"
        @click="toggleMap">
        Corona, CA
      </a>
    </p>

    <h3 class="font-black uppercase my-2 italic">Follow Us</h3>
    <SocialMedia :contact="$route.params.section === 'contact'" />

    <div class="flex flex-col items-center bg-grey-lightest mt-2">
      <Subscribe />
      <Blog />
    </div>

    <div
      v-show="showMap"
      class="fixed pin overflow-auto z-50 bg-smoke-light flex"
    >
      <div class="relative w-auto min-h-lg m-auto flex-col items-center flex">
        <span class="absolute pin-t pin-b pin-r p-1 h-4">
          <svg
            class="h-6 w-6 shadow text-white hover:text-grey fill-current"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"><title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              @click="toggleMap"
            />
          </svg>
        </span>
        <div class="pt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20903.400206063525!2d-117.52138453297499!3d33.93269796223647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb0b9ea5d606d%3A0x8998d10fd29252f1!2sCorona%2C+CA%2C+USA!5e0!3m2!1sen!2sma!4v1542105230235"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia'
import Subscribe from '~/components/Subscribe'
import Blog from '~/components/Blog'

export default {
  components: {
    SocialMedia,
    Blog,
    Subscribe,
  },

  data: () => ({
    showMap: false,
  }),

  methods: {
    toggleMap() {
      this.showMap = !this.showMap
    },
  },
}
</script>
