<template>
  <header class="sticky pin-t bg-white w-full h-16 flex items-center justify-between z-20">
    <a
      href="/#welcome"
      class="ml-4 h-full"
    >
      <img
        class="h-full"
        src="~/assets/images/logo.png"
        alt="CiOn Agency"
      >
    </a>
    <div class="flex justify-between pr-4">
      <nav class="hidden md:block">
        <a
          v-for="section in sections"
          :key="section"
          :href="`#${section}`"
          :class="[ section === $route.hash.slice(1) ? 'border-brand-primary' : 'border-white blur' ]"
          class="transition border-b text-base mx-4 py-2 no-underline text-grey-darkest capitalize"
        >{{ section }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        // 'landing',
        'digital',
        'strategy',
        'creative',
        'clients',
        'contact',
      ],
      current: '',
    }
  },
}
</script>
