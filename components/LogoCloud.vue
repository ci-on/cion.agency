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
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna1'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna1'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna2'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna2'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna3'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna3'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna4'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna4'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
          />
        </div>

        <div
          class="flex items-center justify-center col-span-1 px-8 py-8 bg-gray-50"
          @mouseover="hovering = 'aetna5'"
          @mouseleave="hovering = null"
        >
          <img
            class="max-h-12"
            :src="
              hovering === 'aetna5'
                ? '/aetna-logo-color.svg'
                : '/aetna-logo-gray.svg'
            "
            alt="Aetna"
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
      hovering: null
    }
  }
}
</script>
