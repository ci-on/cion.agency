<template>
  <div class="my-12 overflow-hidden bg-white">
    <div
      class="relative max-w-screen-xl px-4 pt-20 pb-12 mx-auto sm:px-6 lg:px-8 lg:py-20"
    >
      <svg
        class="absolute left-0 transform -translate-y-24 top-full translate-x-80 lg:hidden"
        width="784"
        height="404"
        fill="none"
        viewBox="0 0 784 404"
      >
        <defs>
          <pattern
            id="svg-pattern-squares-1"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="784" height="404" fill="url(#svg-pattern-squares-1)" />
      </svg>

      <svg
        class="absolute hidden transform translate-x-1/2 -translate-y-1/2 lg:block right-full top-1/2"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="svg-pattern-squares-2"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
      </svg>

      <div class="relative lg:flex lg:items-center">
        <div class="hidden lg:block lg:flex-shrink-0">
          <img
            class="w-64 h-64 rounded-full xl:h-80 xl:w-80"
            src="~/assets/andres-garcia.jpg"
            alt="Andres Garcia"
          />
        </div>

        <div class="relative lg:ml-10">
          <svg
            class="absolute top-0 left-0 text-indigo-200 transform -translate-x-8 -translate-y-24 opacity-50 h-36 w-36"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
          >
            <path
              stroke-width="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote>
            <div class="text-2xl font-medium leading-9 text-gray-900">
              <p>
                Having worked with CION for the last few months made me
                appreciate and love their quality of work. Coming from a
                software development background myself, the quality of code
                delivered is of immense importance to me. It’s a calming feeling
                to be able to trust their shipped code blindly.
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex">
                <div class="flex-shrink-0 lg:hidden">
                  <img
                    class="w-12 h-12 rounded-full"
                    src="~/assets/andres-garcia.jpg"
                    alt=""
                  />
                </div>
                <div class="ml-4 lg:ml-0">
                  <div class="text-base font-medium leading-6 text-grya-900">
                    Andres Garcia
                  </div>
                  <div class="text-base font-medium leading-6 text-indigo-600">
                    Co-Founder, Meema
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
