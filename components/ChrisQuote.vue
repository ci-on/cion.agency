<template>
  <div class="py-12 overflow-hidden bg-white md:py-20 lg:py-24">
    <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="relative">
        <cion-logo class="h-10 mx-auto" />

        <blockquote class="mt-8">
          <div
            class="max-w-3xl mx-auto text-2xl font-medium leading-9 text-center text-gray-900"
          >
            <p>
              &ldquo;We specialize in modern PHP &amp; JavaScript development
              and think of ourselves as Laravel &amp; Vue.js experts. Our team
              has more than 50 years of combined experience and provides a
              variety of skills readily available to meet your needs for new
              branding and custom software. &rdquo;
            </p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="md:flex-shrink-0">
                <img
                  class="w-10 h-10 mx-auto rounded-full"
                  src="~/assets/chris.jpeg"
                  alt="Chris Breuer Avatar"
                />
              </div>
              <div
                class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
              >
                <div class="text-base font-medium leading-6 text-gray-900">
                  Chris Breuer
                </div>

                <svg
                  class="hidden w-5 h-5 mx-1 text-teal-600 md:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base font-medium leading-6 text-gray-500">
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
