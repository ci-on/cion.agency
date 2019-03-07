<template>
  <div class="flex h-content">
    <div class="hidden md:flex w-1/2 items-center z-20">
      <img
        src="~/assets/images/digital/digital-lady.png"
        title="Digital"
      >
    </div>

    <div class="w-full md:w-overlapped py-8 md:-ml-10">
      <div class="h-full bg-digital-image text-white p-16 flex flex-col justify-center">
        <div class="text-3xl opacity-50">01</div>
        <div class="absolute ml-20">
          <img
            class="rotating"
            src="~/assets/images/digital/gear.svg"
          >
        </div>
        <div class="absolute mt-20">
          <img
            class="rotating"
            src="~/assets/images/digital/gear.svg"
          >
        </div>
        <h1 class="mb-6 text-5xl font-black italic uppercase">
          Digital
          <svg
            class="fill-current"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <path d="M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"/>
            <path d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"/>
            <path d="M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z"/>
          </svg>
        </h1>
        <p class="mb-6">
          Information is the DNA of a Company. We build effective solutions to use it.
        </p>
        <ul class="list-reset pl-4">
          <li
            v-for="(item, index) in list_data"
            :key="index"
            class="py-4 flex items-center"
          >
            <svg
              class="fill-current"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="20"
              height="16"
              viewBox="0 0 20 16"
            >
              <path d="M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"/>
              <path d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"/>
              <path d="M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z"/>
            </svg>
            <span class="ml-2">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list_data: [
        { name: 'Custom Software Dev' },
        { name: 'Web & Mobile App Dev' },
        { name: 'Database Architecture' },
      ],
    }
  },
}
</script>

<style>
.bg-digital-image {
  background: url('~assets/images/digital/digital-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
