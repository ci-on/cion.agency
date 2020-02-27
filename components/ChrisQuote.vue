<template>
  <div class="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
    <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <cion-logo class="mx-auto h-10" />

        <blockquote class="mt-8">
          <div
            class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
          >
            <p>
              &ldquo;CION is a Software Development & Creative Agency based in
              Southern California. Time and time again we are able to help our
              Clients grow what matters most to them, relationships. &rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="md:flex-shrink-0">
                <img
                  class="mx-auto h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div
                class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
              >
                <div class="text-base leading-6 font-medium text-gray-900">
                  Chris Breuer
                </div>

                <svg
                  class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base leading-6 font-medium text-gray-500">
                  Founder & Tech Lead, CION Agency
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
import CionLogo from './CionLogo'

export default {
  components: {
    CionLogo
  }
}
</script>
