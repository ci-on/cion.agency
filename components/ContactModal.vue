<template>
  <div
    v-show="open"
    class="fixed inset-x-0 bottom-0 z-50 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <transition
      v-show="open"
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      class="fixed inset-0 transition-opacity"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </transition>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-100"
      leave-active-class="duration-200 ease-in"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-show="open"
        ref="modal"
        class="relative w-11/12 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl h-11/12"
      >
        <div class="absolute top-0 right-0 mt-2 mr-2">
          <button
            class="justify-center w-10 h-10 text-sm font-bold text-white border-2 rounded-full hover:text-teal-500 md:h-12 md:w-12 md:text-base lg:h-16 lg:w-16 lg:text-xl hover:bg-white"
            @click="$emit('closed')"
          >
            EXIT
          </button>
        </div>
        <div class="flex w-full h-full">
          <div class="w-1/2 h-full rounded">
            <GMap
              ref="gMap"
              class="h-full"
              :center="{ lat: locations[0].lat, lng: locations[0].lng }"
              :options="{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                gestureHandling: 'cooperative',
                styles: {}
              }"
              :zoom="15"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{ lat: location.lat, lng: location.lng }"
                @click="currentLocation = location"
              >
                <GMapInfoWindow>
                  <h3 class="mb-1 font-bold">CION Agency</h3>
                  <span>770 S Grand Ave</span>
                  <br />
                  <span>Los Angeles, CA 90017</span>
                  <br />
                  <p class="mt-1 italic">Mo - Fr from 8:00am - 6:00pm PST</p>
                </GMapInfoWindow>
              </GMapMarker>
            </GMap>
          </div>

          <div
            class="flex flex-col items-center justify-center w-1/2 h-full overflow-auto bg-teal-600 rounded"
          >
            <form name="contact" class="px-8" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div class="mb-10 text-center">
                <h1
                  class="mb-2 text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl"
                >
                  Let's talk!
                </h1>
                <p
                  class="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                >
                  Have questions in mind? Ask away!
                </p>
              </div>

              <div class="mb-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required="required"
                  class="w-full px-3 py-3 leading-tight rounded bg-grey-light focus:outline-none"
                />
              </div>
              <div class="mb-4">
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required="required"
                  class="w-full px-3 py-3 leading-tight rounded bg-grey-light focus:outline-none"
                />
              </div>
              <div class="mb-4">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required="required"
                  class="w-full px-3 py-3 leading-tight rounded bg-grey-light focus:outline-none"
                />
              </div>
              <div class="mb-4">
                <textarea
                  rows="5"
                  cols="10"
                  name="message"
                  type="text"
                  placeholder="Message"
                  required="required"
                  class="w-full px-3 py-3 leading-tight rounded bg-grey-light focus:outline-none"
                ></textarea>
              </div>

              <div class="flex items-center justify-center">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-teal-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700"
                  >
                    <svg
                      class="w-5 h-5 mr-3 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: '',
      locations: [
        {
          lat: 34.04625,
          lng: -118.25637,
          name: 'Los Angeles'
        }
      ]
    }
  }
}
</script>

<style>
.GMap__Wrapper {
  height: 100% !important;
  border-radius: 0.25rem;
}
</style>
