<template>
  <div
    class="wrapper flex fixed pin-b items-center justify-center w-full z-20"
  >
    <a
      href="#"
      class="scroll-arrow hover:bg-brand-teal hover:text-white rounded-full flex justify-center pl-4 pr-2 my-2 text-grey"
    >
      <span class="text-sm flex items-center">down</span>
      <span class="icon-kb-right rotate-1\/4 text-3xl text-black"/>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.scroll-arrow {
  .icon-kb-right {
    transform: rotate(90deg);
  }
}
</style>
