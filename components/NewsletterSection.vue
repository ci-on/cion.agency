<template>
  <div class="my-12 bg-gray-800">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center"
    >
      <div class="lg:w-0 lg:flex-1">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
        >
          Want product news and updates?
        </h2>
        <p class="max-w-3xl mt-3 text-lg leading-6 text-gray-300">
          We send out monthly newsletters with development tips and the latest
          news relating our products.
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form
          name="subscription"
          class="sm:flex"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="subscription" />

          <input
            aria-label="Email address"
            type="email"
            name="email"
            required
            class="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent rounded-md hover:bg-teal-400 focus:outline-none focus:bg-teal-400"
            >
              Notify me
            </button>
          </div>
        </form>
        <p class="mt-3 text-sm leading-5 text-gray-300">
          Don't worry. We won't spam ya. Easy unsubscribing as well.
        </p>
      </div>
    </div>
  </div>
</template>
