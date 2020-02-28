<template>
  <nav
    class="relative flex items-center justify-between sm:h-10 md:justify-center"
  >
    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
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
        >Contact</a
      >
    </div>
    <div
      class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
    >
      <span class="inline-flex rounded-md shadow">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700"
        >
          Client Portal
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
import CionLogoSmall from './CionLogoSmall'

export default {
  components: {
    CionLogoSmall
  }
}
</script>
