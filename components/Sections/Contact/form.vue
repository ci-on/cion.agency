<template>
  <div class="h-full md:py-8">
    <div class="w-full h-full flex flex-col justify-center bg-contact-image text-white mr-20 p-10">
      <h1 class="mb-6 font-black font-sans italic uppercase">
        Interested?
      </h1>
      <p class="mb-6">
        We create innovative solutions for our Clients that way they can continue to do what they do best.
      </p>
      <form
        ref="contactForm"
        name="contact"
        class="form w-full mt-6"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input
          name="bot-field"
          type="hidden"
        >
        <!-- <div class="flex">
          <p class="flex-1 pr-3 mb-6">
            <label
              class="text-base font-semibold block mb-1"
              for="name">Full Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              class="block w-full py-2 rounded px-2"
              name="name"
              placeholder="Full Name"
              required>
          </p>
          <p class="flex-1 mr-3 mb-6">
            <label
              class="text-base font-semibold block mb-1"
              for="company">Company</label>
            <input
              id="company"
              v-model="company"
              type="text"
              class="block w-full py-2 rounded px-2"
              name="company"
              placeholder="Acme Corp"
              required>
          </p>
        </div> -->
        <!-- <div class="flex">
          <p class="flex-1 pr-3 mb-6">
            <label
              class="text-base font-semibold block mb-1"
              for="email">Work Email</label>
            <input
              id="email"
              v-model="email"
              type="text"
              class="block w-full py-2 rounded px-2"
              name="email"
              placeholder="j.doe@email.com"
              required>
          </p>
          <p class="flex-1 mr-3 mb-6">
            <label
              class="text-base font-semibold block mb-1"
              for="phone">Phone Number</label>
            <input
              id="phone"
              v-model="phone"
              type="text"
              class="block w-full py-2 rounded px-2"
              name="phone"
              placeholder="(555) 555-5555"
              required>
          </p>
        </div> -->
        <!-- <div class="flex">
          <p class="flex-1 pr-3 mb-6">
            <label
              class="text-base font-semibold block mb-1"
              for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              rows="4"
              class="block w-full py-2 rounded px-2 focus:outline-none"
              name="message"
              required/>
          </p>
        </div> -->
        <!-- <div class="flex justify-center">
          <p class="flex">
            <button
              type="submit"
              class="flex items-center outline-none p-2 px-4 rounded-full bg-white"
            >
              <span class="icon-envelop flex mr-3 text-blue-light"/>
              <span class="font-bold flex-1 text-blue-light uppercase italic pr-1">Lets Go!</span>
            </button>
          </p>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
if (process.client) {
  const $ = require('jquery')
  const swal = require('sweetalert2')
}

export default {
  data() {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    }
  },

  methods: {
    handleSubmit() {
      const data = $.param({
        'form-name': 'contact',
        name: this.name,
        company: this.company,
        email: this.email,
        phone: this.phone,
        message: this.message,
      })

      this.$axios
        .$post('/', data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then(response => {
          swal({
            title: 'Thanks!',
            text: 'We will get back to you shortly',
            type: 'success',
          })
        })
        .catch(e => {
          swal({
            title: 'Oops!',
            text: 'Something went wrong',
            type: 'error',
          })
        })
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
