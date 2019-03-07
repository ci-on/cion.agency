<template>
  <div class="flex flex-col md:flex-row justify-center items-center h-content">
    <div class="w-full md:w-1/2 h-auto flex md:flex-col md:items-center md:pr-10">
      <div class="h-full w-1/3 md:w-full text-center md:my-4">
        <h3 class="font-black uppercase mb-3 italic">
          Phone
        </h3>
        <p>
          <span class="text-black font-semibold">General:</span>
          <a
            class="text-blue italic"
            href="tel:+18006767830"
          >
            800.676.7830
          </a>
        </p>
      </div>
      <div class="h-full w-1/3 md:w-full text-center md:my-4">
        <h3 class="font-black uppercase mb-3 italic">
          Email
        </h3>
        <p>
          <span class="text-black font-semibold">General:</span>
          <a
            class="text-blue italic"
            href="mailto:info@cion.agency"
          >
            info@cion.agency
          </a>
        </p>
        <!-- <p class="mt-2">
          <span class="text-black font-semibold">Support:</span>
          <a class="text-blue italic" href="mailto:support@eliinova.com">
            support@eliinova.com
          </a>
        </p> -->
      </div>
      <div class="h-full w-1/3 md:w-full text-center md:my-4">
        <h3 class="font-black uppercase mb-3 italic">Location</h3>
        <p class="italic">
          <!-- <a role="button" class="text-blue italic" @click="toggleMap"> -->
          Los Angeles
          <!-- </a> -->
        </p>
      </div>
      <!-- <div class="flex w-full md:w-1/2 items-center md:items-start flex-col mt-10 md:mt-0">
        <h3 class="font-black flex uppercase italic">Follow Us</h3>
        <div class="flex -ml-6 mt-4">
          <SocialMedia :contact="true" />
        </div>
      </div> -->
      <!-- <div class="bottom md:flex flex-1 flex-col bg-grey-lightest">
        <div class="bottom-top flex items-start justify-center pt-10">
          <Subscribe />
        </div>
        <div class="mt-10 md:mt-0 bottom-bottom flex-1 flex items-center justify-center">
          <Blog />
        </div>
      </div> -->
    </div>

    <div class="w-full md:w-overlapped md:h-full py-8 md:-ml-10">
      <div class="h-full flex flex-col justify-center bg-contact-image text-white p-2 md:p-8">
        <h1 class="font-black font-sans italic uppercase">
          Interested?
        </h1>
        <p class="mt-4 md:mb-12">
          We create innovative solutions for our Clients that way they can continue to do what they do best.
        </p>
        <form
          name="contact"
          class="w-full mt-4"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <div class="flex mb-2">
            <p class="flex-1 pr-1">
              <label
                class="text-base font-semibold block mb-1"
                for="fullname"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                class="block w-full p-2 rounded"
                name="fullname"
                placeholder="Full Name"
                required
              >
            </p>
            <p class="flex-1 pl-1">
              <label
                class="text-base font-semibold block mb-1"
                for="company"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                class="block w-full p-2 rounded"
                name="company"
                placeholder="Acme Corp"
                required
              >
            </p>
          </div>
          <div class="flex mb-2">
            <p class="flex-1 pr-1">
              <label
                class="text-base font-semibold block mb-1"
                for="work_email"
              >
                Work Email
              </label>
              <input
                id="work_email"
                type="text"
                class="block w-full p-2 rounded"
                name="work_email"
                placeholder="j.doe@email.com"
                required
              >
            </p>
            <p class="flex-1 pl-1">
              <label
                class="text-base font-semibold block mb-1"
                for="phone_number"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                type="text"
                class="block w-full p-2 rounded"
                name="phone_number"
                placeholder="(555) 555-5555"
                required
              >
            </p>
          </div>
          <div class="flex mb-2">
            <p class="flex-1">
              <label
                class="text-base font-semibold block mb-1"
                for="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block w-full p-2 rounded"
                name="message"
                required
                placeholder="What are your needs? Include as much detail as possible."
              />
            </p>
          </div>
          <div class="flex justify-center">
            <p class="flex">
              <button
                type="submit"
                class="flex items-center outline-none md:mt-4 px-2 rounded-full bg-white"
              >
                <span class="flex items-center justify-center w-8 h-8 text-brand-primary text-blue-light text-xs">
                  <svg
                    class="fill-current"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v10c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-10c0-0.825-0.675-1.5-1.5-1.5zM6.23 8.6l-4.23 3.295v-7.838l4.23 4.543zM2.756 4h10.488l-5.244 3.938-5.244-3.938zM6.395 8.777l1.605 1.723 1.605-1.723 3.29 4.223h-9.79l3.29-4.223zM9.77 8.6l4.23-4.543v7.838l-4.23-3.295z"/>
                  </svg>
                </span>
                <span class="font-bold text-blue-light uppercase italic pr-2">Lets Go!</span>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>

    <div
      v-if="map"
      class="fixed pin overflow-auto z-50 bg-smoke-light flex"
    >
      <div class="relative w-auto min-h-lg m-auto flex-col items-center flex">
        <span class="absolute pin-t pin-b pin-r p-1 h-4">
          <svg
            class="h-6 w-6 shadow text-white hover:text-grey fill-current"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
        <div class="pt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212043.49750104913!2d-117.71886079414715!3d33.85926076846033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb0b9ea5d606d%3A0x8998d10fd29252f1!2sCorona%2C+California%2C+EE.+UU.!5e0!3m2!1ses!2sar!4v1550154066528"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: false,
    }
  },

  methods: {
    toggleMap() {
      this.map = !this.map
    },
  },
}
</script>

<style>
.bg-contact-image {
  background: url('~assets/images/contact/contact-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
