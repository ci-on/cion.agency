<template>
  <div class="flex h-content">
    <div class="hidden md:flex w-1/2 items-center z-20">
      <img
        src="~/assets/images/creative/creative-bike.png"
        title="Creative"
      >
    </div>

    <div class="w-full md:w-overlapped py-8 md:-ml-10">
      <div class="h-full bg-creative-image text-white p-16 flex flex-col justify-center">
        <div class="text-3xl opacity-50">03</div>
        <div class="absolute">
          <img src="~/assets/images/creative/set.svg">
        </div>
        <h1 class="mb-6 text-5xl font-black italic uppercase">
          Creative
          <svg
            class="fill-current"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M16 7h-1.577c-0.432-2.785-2.638-4.991-5.423-5.423v-1.577h-2v1.577c-2.785 0.432-4.991 2.638-5.423 5.423h-1.577v2h1.577c0.432 2.785 2.638 4.991 5.423 5.423v1.577h2v-1.577c2.785-0.432 4.991-2.638 5.423-5.423h1.577v-2zM12.388 7h-1.559c-0.301-0.852-0.977-1.528-1.829-1.829v-1.559c1.68 0.383 3.005 1.708 3.388 3.388zM8 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM7 3.612v1.559c-0.852 0.301-1.528 0.977-1.829 1.829h-1.559c0.383-1.68 1.708-3.005 3.388-3.388zM3.612 9h1.559c0.301 0.852 0.977 1.528 1.829 1.829v1.559c-1.68-0.383-3.005-1.708-3.388-3.388zM9 12.388v-1.559c0.852-0.301 1.528-0.977 1.829-1.829h1.559c-0.383 1.68-1.708 3.005-3.388 3.388z"/>
          </svg>
        </h1>
        <p class="mb-6">
          Impactful branding & interfaces all have one similarity, user driven design.
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
              <path d="M16 7h-1.577c-0.432-2.785-2.638-4.991-5.423-5.423v-1.577h-2v1.577c-2.785 0.432-4.991 2.638-5.423 5.423h-1.577v2h1.577c0.432 2.785 2.638 4.991 5.423 5.423v1.577h2v-1.577c2.785-0.432 4.991-2.638 5.423-5.423h1.577v-2zM12.388 7h-1.559c-0.301-0.852-0.977-1.528-1.829-1.829v-1.559c1.68 0.383 3.005 1.708 3.388 3.388zM8 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM7 3.612v1.559c-0.852 0.301-1.528 0.977-1.829 1.829h-1.559c0.383-1.68 1.708-3.005 3.388-3.388zM3.612 9h1.559c0.301 0.852 0.977 1.528 1.829 1.829v1.559c-1.68-0.383-3.005-1.708-3.388-3.388zM9 12.388v-1.559c0.852-0.301 1.528-0.977 1.829-1.829h1.559c-0.383 1.68-1.708 3.005-3.388 3.388z"/>
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
        { name: 'Brand & Visual Identity' },
        { name: 'Interaction Design' },
        { name: 'Photography & Videography' },
      ],
    }
  },
}
</script>

<style>
.bg-creative-image {
  background: url('~assets/images/creative/creative-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
