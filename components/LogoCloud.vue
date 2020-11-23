<template>
  <div id="clients" class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <p
        class="text-base font-semibold leading-6 tracking-wider text-center text-gray-600 uppercase"
      >
        Trusted by small and large companies
      </p>
      <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'aetna'"
          @mouseleave="hovering = null"
        >
          <a href="https://www.aetna.com/">
            <img
              class="max-h-12"
              :src="
                hovering === 'aetna'
                  ? '/aetna-logo-color.svg'
                  : '/aetna-logo-gray.svg'
              "
              alt="Aetna"
            />
          </a>
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'meema'"
          @mouseleave="hovering = null"
        >
          <a href="https://meema.io/">
            <img
              class="max-h-10"
              :src="
                hovering === 'meema'
                  ? '/meema-logo-color.svg'
                  : '/meema-logo-gray.svg'
              "
              alt="Meema"
            />
          </a>
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'girlgaze'"
          @mouseleave="hovering = null"
        >
          <a href="https://girlgaze.com/">
            <img
              class="max-h-12"
              :src="
                hovering === 'girlgaze'
                  ? '/girlgaze-logo-color.svg'
                  : '/girlgaze-logo-gray.svg'
              "
              alt="Girlgaze"
            />
          </a>
        </div>

        <!-- <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'greenline'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'greenline'
                ? '/greenline-logo-color.svg'
                : '/greenline-logo-gray.svg'
            "
            alt="Greenline"
          />
        </div> -->

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'bixolon'"
          @mouseleave="hovering = null"
        >
          <a href="https://www.bixolon.com/">
            <img
              class="max-h-6"
              :src="
                hovering === 'bixolon'
                  ? '/bixolon-logo-color.svg'
                  : '/bixolon-logo-gray.svg'
              "
              alt="Bixolon"
            />
          </a>
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'carefree'"
          @mouseleave="hovering = null"
        >
          <a href="https://carefreeagency.com/">
            <img
              class="max-h-12"
              :src="
                hovering === 'carefree'
                  ? '/carefree-logo-color.svg'
                  : '/carefree-logo-gray.svg'
              "
              alt="CareFree"
            />
          </a>
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out bg-gray-50"
          @mouseover="hovering = 'mutesix'"
          @mouseleave="hovering = null"
        >
          <a href="https://www.mutesix.com/">
            <img
              class="max-h-6"
              :src="
                hovering === 'mutesix'
                  ? '/mutesix-logo-color.svg'
                  : '/mutesix-logo-gray.svg'
              "
              alt="Mutesix"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovering: null
    }
  }
}
</script>
