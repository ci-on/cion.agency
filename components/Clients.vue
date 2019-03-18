<template>
  <div class="flex flex-col md:flex-row items-center justify-center h-content">
    <div class="w-full flex flex-col px-8 md:pl-0 md:pr-10">
      <h1 class="font-sans text-2xl md:text-5xl font-black italic uppercase text-grey-darkest">
        Our Clients
      </h1>
      <p class="mt-4 text-sm lg:text-xl text-grey-dark">
        We've had the pleasure of working with some amazing clients. You could be next.
      </p>

      <div class="flex flex-wrap w-full mt-8">
        <div class="w-1/4 h-24 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/aetna-logo.svg"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/carefree-logo.svg"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/csu-logo.png"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/cpp-logo.svg"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/auditme-logo.svg"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/datasix-logo.png"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/mutesix-logo.png"
          >
        </div>
        <div class="w-1/4 h-16 md:h-24 flex">
          <img
            class="m-auto lg:w-2/3 md:w-1/3"
            src="~/assets/images/clients/productn-logo.png"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-clients-image {
  background: url('~assets/images/contact/contact-bg.png') no-repeat center;
  @apply bg-cover;
}
</style>
