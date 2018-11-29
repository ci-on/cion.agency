<template>
  <div class="flex items-center w-4/5 my-2">
    <div class="arrow arrow-prev">
      <nuxt-link to="/">
        <span class="icon-kb-left text-lg"/>
      </nuxt-link>
    </div>

    <div class="flex bg-white relative shadow">
      <div class="relative flex-1 justify-center flex flex-col pl-5">
        <p class="mb-3 font-black">Ever accidentally close the wrong tab on Chrome?</p>
        <p class="text-grey-dark text-xs">UGH! Ever accidentally close the wrong tab on Google Chrome??? SAME. Reopen a Google Tab you've just closed it by…</p>
      </div>
      <div class="relative">
        <img
          class="h-full"
          src="~/assets/images/contact/placeholder-blog-post.png">
        <nuxt-link
          to="/"
          class="uppercase absolute no-underline">
          <p class="text-md text-white italic font-black">
            Read more
            <span class="icon-arrow-right text-sm ml-2"/>
          </p>
        </nuxt-link>
      </div>
    </div>

    <div class="arrow arrow-prev">
      <nuxt-link to="/">
        <span class="icon-kb-right text-lg text-center"/>
      </nuxt-link>
    </div>
  </div>

</template>
