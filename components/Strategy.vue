<template>
  <div class="flex h-content">
    <div class="hidden md:flex w-1/2 items-center z-20">
      <img
        src="~/assets/images/strategy/strategy-computer.png"
        title="Strategy"
      >
    </div>

    <div class="w-full md:w-overlapped py-8 md:-ml-10">
      <div class="h-full bg-strategy-image text-white p-16 flex flex-col justify-center">
        <div class="text-3xl opacity-50">02</div>
        <div class="absolute">
          <img src="~/assets/images/strategy/set.svg">
        </div>
        <div class="absolute">
          <img src="~/assets/images/strategy/arrow-up.svg">
        </div>
        <h1 class="mb-6 text-5xl font-black italic uppercase">
          Strategy
          <svg
            class="fill-current"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M15.5 8l-7.5-7.5v4.5h-8v6h8v4.5z"/>
          </svg>
        </h1>
        <p class="mb-6">
          It’s not just about the end goal, but the way we get there is just as crucial.
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
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M15.5 8l-7.5-7.5v4.5h-8v6h8v4.5z"/>
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
        { name: 'Brand Consultation' },
        { name: 'Market Strategy' },
        { name: 'Audience Connection' },
      ],
    }
  },
}
</script>

<style>
.bg-strategy-image {
  background: url('~assets/images/strategy/strategy-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
