<template>
  <div class="relative overflow-hidden bg-gray-50 bg-man">
    <background-pattern />

    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <cion-logo-small style="height: 50px" />
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  @click="open = true"
                >
                  <svg
                    class="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <a
              href="#strategy"
              class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >Strategy</a
            >
            <a
              href="#services"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >Services</a
            >
            <a
              href="#case-study"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >Case Study</a
            >
            <a
              href="#clients"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >Clients</a
            >
            <a
              href="#contact"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              @click="$emit('show:contact')"
              >Contact</a
            >
          </div>
          <div
            class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
          >
            <span class="inline-flex rounded-md shadow">
              <a
                href="#client-portal"
                class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700"
                @click="$emit('show:login')"
              >
                Client Portal
              </a>
            </span>
          </div>
        </nav>
      </div>

      <div
        v-show="open"
        style="display: none;"
        class="absolute inset-x-0 top-0 p-2 md:hidden"
      >
        <transition
          v-show="open"
          class="transition origin-top-right transform rounded-lg shadow-md"
          enter="duration-150 ease-out"
          enter-start="opacity-0 scale-95"
          enter-end="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leave-start="opacity-100 scale-100"
          leave-end="opacity-0 scale-95"
        >
          <div class="overflow-hidden bg-white rounded-lg shadow-xs">
            <div class="flex items-center justify-between px-5 pt-4">
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  @click="open = true"
                >
                  <svg
                    class="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >Product</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                >Company</a
              >
            </div>
            <div>
              <a
                href="#"
                class="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
                @click="$emit('show:login')"
              >
                Client Portal
              </a>
            </div>
          </div>
        </transition>
      </div>

      <div
        class="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
      >
        <div class="text-center">
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            Build awesome digital
            <br class="xl:hidden" />
            <span class="text-indigo-600">experiences</span>
          </h2>
          <p
            class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            We have a knack for transforming businesses with creative digital
            solutions
          </p>
          <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#contact"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                @click="$emit('show:contact')"
              >
                Let's talk
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#strategy"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                What do we do?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundPattern from './BackgroundPattern'
import CionLogoSmall from './CionLogoSmall'

export default {
  components: {
    BackgroundPattern,
    CionLogoSmall
  },

  data() {
    return {
      open: false
    }
  }
}
</script>

<style>
.bg-man {
  background-color: rgba(255, 255, 255, 0.85) !important;
  background: url('~assets/man-working.jpg');
  background-blend-mode: color;
  background-size: cover;
  background-position: bottom;
}
</style>
