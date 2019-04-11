<template>
  <main class="font-sans">
    <section
      class="max-h-sm min-h-sm md:max-h-md md:min-h-md relative bg-cover bg-man"
    >
      <header class="pt-10 md:mt-0 h-16 px-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <a href="/">
              <img src="@/assets/img/cion-logo.svg" alt="CION Agency Logo" style="height: 50px">
            </a>
          </div>

          <div class="mt-6 md:mt-0">
            <div class="flex flex-col md:flex-row items-center">
              <div>
                <a href="#services" class="apperance-none text-black no-underline px-6" v-smooth-scroll>
                  services
                </a>
                <a href="#clients" class="apperance-none text-black no-underline px-6" v-smooth-scroll>
                  clients
                </a>
                <a href="#contact" class="apperance-none text-black no-underline px-6" v-smooth-scroll>
                  contact
                </a>
              </div>
              <div class="mt-6 md:mt-0">
                <button class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path fill="#333" fill-rule="evenodd" d="M12.458 11.127a2.362 2.362 0 0 1-1.33 1.33c-.922.366-3.108.282-4.126.282-1.019 0-3.208.08-4.126-.281a2.362 2.362 0 0 1-1.33-1.331C1.18 10.205 1.263 8.018 1.263 7c0-1.018-.081-3.208.281-4.127a2.362 2.362 0 0 1 1.33-1.33c.922-.366 3.108-.282 4.127-.282 1.018 0 3.207-.08 4.125.281a2.362 2.362 0 0 1 1.33 1.331c.366.922.282 3.109.282 4.127 0 1.018.084 3.208-.281 4.127m1.493-7.014C13.898 2.992 13.64 2 12.82 1.18 12 .362 11.008.105 9.886.05c-1.155-.066-4.619-.066-5.774 0C2.994.101 2 .357 1.18 1.176.358 1.995.105 2.989.05 4.11c-.066 1.156-.066 4.62 0 5.777C.101 11.008.357 12 1.18 12.82c.821.818 1.811 1.075 2.933 1.13 1.155.066 4.619.066 5.774 0 1.122-.052 2.115-.308 2.933-1.13.818-.819 1.075-1.812 1.13-2.933.066-1.156.066-4.618 0-5.774m-2.376-.85a.835.835 0 0 1-.837.838.837.837 0 1 1 .837-.837m-4.572 6.07A2.338 2.338 0 0 1 4.668 7a2.336 2.336 0 0 1 2.334-2.334A2.336 2.336 0 0 1 9.335 7a2.338 2.338 0 0 1-2.333 2.334m0-5.923A3.583 3.583 0 0 0 3.412 7a3.583 3.583 0 0 0 3.59 3.59A3.583 3.583 0 0 0 10.59 7a3.583 3.583 0 0 0-3.588-3.59"/>
                  </svg>
                </button>
                <button class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
                      <path fill="#333" fill-rule="evenodd" d="M2.324 16V8.844H0V6h2.324V3.76C2.324 1.324 3.767 0 5.873 0 6.882 0 7.748.078 8 .112v2.544H6.54c-1.146 0-1.367.563-1.367 1.385V6h2.585l-.355 2.844h-2.23V16"/>
                  </svg>
                </button>
                <button class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
                      <path fill="#333" fill-rule="evenodd" d="M14.355 3.24c.01.142.01.284.01.426 0 4.337-3.299 9.334-9.33 9.334A9.264 9.264 0 0 1 0 11.527c.264.03.518.041.792.041a6.566 6.566 0 0 0 4.071-1.402 3.285 3.285 0 0 1-3.066-2.275c.203.03.406.051.62.051.294 0 .588-.04.862-.112A3.28 3.28 0 0 1 .65 4.61v-.04c.437.244.945.396 1.483.417A3.278 3.278 0 0 1 .67 2.255c0-.61.162-1.168.447-1.656a9.32 9.32 0 0 0 6.761 3.433 3.705 3.705 0 0 1-.081-.752A3.278 3.278 0 0 1 11.077 0a3.27 3.27 0 0 1 2.395 1.036 6.455 6.455 0 0 0 2.081-.792 3.271 3.271 0 0 1-1.441 1.808c.66-.072 1.3-.254 1.888-.508a7.05 7.05 0 0 1-1.645 1.696"/>
                  </svg>
                </button>
                <button class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <path fill="#333" fill-rule="evenodd" d="M13.997 14H11.1V9.45c0-1.084-.022-2.475-1.51-2.475-1.508 0-1.74 1.178-1.74 2.397V14H4.952V4.653h2.784v1.275h.04c.388-.734 1.334-1.51 2.747-1.51C13.459 4.419 14 6.354 14 8.867V14h-.003zM1.68 3.378C.753 3.378 0 2.61 0 1.681a1.682 1.682 0 0 1 3.362 0c0 .928-.753 1.697-1.681 1.697zM.23 14h2.903V4.653H.23V14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </header>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center h-full w-full px-10 max-h-sm min-h-sm md:max-h-md md:min-h-md md:-mt-20">
          <h1 class="w-full md:w-2/3 mb-4 uppercase leading-none text-black text-2xl md:text-5xl lg:text-7xl font-extrabold italic">
            Build awesome experiences
          </h1>
          <h3 class="w-2/3 lg:w-1/3 leading-tight font-medium text-base md:text-xl text-black mb-12">
            We have a knack for transforming businesses with creative digital solutions
          </h3>
          <a href="#contact" class="w-64 focus:outline-none no-underline flex items-center" v-smooth-scroll>
            <div class="w-10 h-10 rounded-full bg-turquoise-blue flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 m-auto">
                <path class="fill-white" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/>
                <path class="fill-white" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/>
              </svg>
            </div>
            <span class="block w-16 ml-2 uppercase text-black font-extrabold italic text-left">
              Lets go!
            </span>
          </a>
        </div>
      </div>
    </section>

    <section class="min-h-md bg-turquoise-blue flex flex-col items-center justify-center text-white py-8">
      <h1 class="mb-8 uppercase text-2xl lg:text-5xl font-extrabold italic">
        Digital strategy matters
      </h1>
      <p class="w-full px-10 lg:px-0 md:w-2/3 lg:w-1/4 leading-normal mb-16 text-center text-sm">
        CION is a Software Development & Creative Agency based in Southern California. Time and time again we are able to help our Clients grow what matters most to them, relationships.
      </p>
      <div class="w-full lg:w-2/3 flex flex-col lg:flex-row mx-auto">
        <div class="w-full mt-6 lg:mt-0 lg:w-1/3 flex flex-col items-center">
          <h3 class="mb-2 lg:mb-4 text-center font-semibold">
            Discover
          </h3>
          <p class="text-center text-sm w-1/2">
            We study the in’s and out’s of your brand to craft a meaningful strategy.
          </p>
        </div>
        <div class="flex-1 w-full hidden lg:block">
          <div class="flex items-center justify-center">
            <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.7" stroke-linecap="round" stroke-linejoin="round">
                    <g id="Landing" transform="translate(-579.000000, -1056.000000)" stroke="#FFFFFF" stroke-width="1.6875">
                        <g id="solutions-that-matter" transform="translate(0.000000, 685.000000)">
                            <polyline id="Stroke-1" transform="translate(583.000000, 378.000000) rotate(-90.000000) translate(-583.000000, -378.000000) " points="589 375 583 381 577 375"></polyline>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>
        <div class="w-full mt-6 lg:mt-0 lg:w-1/3 flex flex-col items-center">
          <h3 class="mb-2 lg:mb-4 text-center font-semibold">
            Cultivate
          </h3>
          <p class="text-center text-sm w-1/2">
            We build custom solutions centered around the end goal for your Customers.
          </p>
        </div>
        <div class="flex-1 w-full hidden lg:block">
          <div class="flex items-center justify-center">
            <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.7" stroke-linecap="round" stroke-linejoin="round">
                    <g id="Landing" transform="translate(-579.000000, -1056.000000)" stroke="#FFFFFF" stroke-width="1.6875">
                        <g id="solutions-that-matter" transform="translate(0.000000, 685.000000)">
                            <polyline id="Stroke-1" transform="translate(583.000000, 378.000000) rotate(-90.000000) translate(-583.000000, -378.000000) " points="589 375 583 381 577 375"></polyline>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>
        <div class="w-full mt-6 lg:mt-0 lg:w-1/3 flex flex-col items-center">
          <h3 class="mb-2 lg:mb-4 text-center font-semibold">
            Launch
          </h3>
          <p class="text-center text-sm w-1/2">
            We create an effective message for you, but also show you how to use it.
          </p>
        </div>
      </div>
    </section>

    <section class="min-h-md flex flex-col md:flex-row bg-charcoal-grey-4">
      <div
        class="hidden lg:block w-full lg:w-2/5 min-h-full bg-clothes relative"
      >
        <div>
          <img
            class="shadow absolute pin-b pin-r max-w-md mb-10 md:w-full -mr-20"
            src="@/assets/img/greenline.png"
          >
        </div>
      </div>
      <div class="w-full lg:w-3/5 pt-20 md:py-0 md:pl-32 md:pr-8 flex items-center justify-center">
        <div class="w-5/6">
          <svg class="mb-10" xmlns="http://www.w3.org/2000/svg" width="145" height="16" viewBox="0 0 145 16">
              <defs>
                  <linearGradient id="a" x1="97.083%" x2="0%" y1="50%" y2="50%">
                      <stop offset="0%" stop-color="#09B209"/>
                      <stop offset="100%" stop-color="#07D907"/>
                  </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                  <path fill="#4A4A4A" d="M25.533 7.83H22.91v.892c.873-.096 1.748-.189 2.623-.28V7.83zM22.91 12.67c-.882.533-1.906.8-3.071.8-1.038 0-1.966-.237-2.784-.711-.07-.04-.136-.084-.203-.127-1.195.113-2.389.23-3.582.35a7.502 7.502 0 0 0 2.303 1.986C16.796 15.656 18.168 16 19.69 16c1.08 0 2.133-.17 3.157-.51a8.229 8.229 0 0 0 2.687-1.466v-2.148c-.875.07-1.75.14-2.623.214v.58zM14.443 8.008c0-1.066.23-2.013.693-2.842a4.913 4.913 0 0 1 1.92-1.931c.817-.459 1.752-.689 2.804-.689 1.606 0 2.978.593 4.116 1.777l1.749-1.777A6.709 6.709 0 0 0 23.145.66C22.12.23 20.982.016 19.731.016c-1.536 0-2.918.344-4.148 1.032a7.483 7.483 0 0 0-2.89 2.853c-.697 1.213-1.045 2.583-1.045 4.107 0 .721.08 1.407.235 2.059.93-.125 1.862-.247 2.793-.366a6.014 6.014 0 0 1-.234-1.693M31.419 2.68h3.241c1.209 0 2.126.266 2.751.799.626.533.939 1.295.939 2.287 0 .601-.116 1.12-.346 1.555 1-.077 2.001-.15 3.003-.22.09-.42.137-.863.137-1.335 0-1.14-.256-2.124-.768-2.953-.512-.829-1.248-1.465-2.207-1.91-.96-.443-2.087-.665-3.38-.665h-6.143V8.13c.924-.09 1.848-.177 2.773-.261V2.68zM28.646 15.778h2.773v-4.342c-.925.065-1.85.132-2.773.2v4.142zM35.364 11.227l3.05 4.551H41.4l-3.211-4.775c-1.336.078-2.953.239-2.825.224M43.703 15.778h11.196v-2.42h-8.424v-2.78c-.925.041-1.849.084-2.772.13v5.07zM46.475 6.698v-4.04h8.126V.237H43.703v6.684c1.25-.08 1.52-.155 2.772-.224M57.458 15.778h11.197v-2.42H60.23v-3.231c-.925.02-1.85.04-2.773.065v5.586zM60.23 2.657h8.126V.237H57.458v6.016c.924-.031 1.848-.06 2.773-.085v-3.51zM90.728.238h-2.773v5.994c.925.03 1.85.062 2.773.098V.238zM87.955 15.778h10.578v-2.442h-7.805V10.25c-.924-.027-1.848-.052-2.773-.075v5.602zM102.97.238h-2.773V6.79c.925.054 1.849.11 2.772.171V.238zM100.197 15.778h2.772v-5.04a604.29 604.29 0 0 0-2.772-.133v5.173zM109.218 5.255l1.8 2.302c1.237.102 2.473.21 3.708.321l-5.978-7.64h-2.282v6.965c.918.067 1.835.136 2.752.208V5.255zM119.732.238h-2.751v7.851c.917.088 1.834.18 2.75.273V.238zM106.466 15.778h2.752v-4.695c-.917-.055-1.834-.108-2.752-.16v4.855zM117.45 15.778h2.282v-3.964c-1.902-.15-3.806-.29-5.713-.42l3.43 4.384zM133.189 9.073V6.698h-7.209v-4.04h8.126V.237h-10.898v8.49c1.013.112 2.025.228 3.036.345h6.945zM123.208 12.096v3.682h11.196v-2.42h-8.424v-1.022c-.923-.082-1.847-.163-2.772-.24M71.214 9.993v5.785h2.751V9.991l-.938-.002c-.605 0-1.209.002-1.813.004M81.728 10.76l-.56-.715c-1.16-.015-2.322-.029-3.485-.038l4.514 5.771h2.282v-5.68c-.916-.017-1.834-.032-2.751-.045v.708zM84.48.238h-2.752v5.835c.918.017 1.835.036 2.751.059V.238zM73.965 5.992v-.737l.578.739c1.159.003 2.317.011 3.474.024L73.496.238h-2.282v5.756c.604-.002 1.208-.004 1.813-.004l.938.002"/>
                  <path fill="url(#a)" d="M0 13.333a584.611 584.611 0 0 1 72.498-4.5c24.529 0 48.72 1.53 72.497 4.5a449.483 449.483 0 0 0-72.497-5.864A449.483 449.483 0 0 0 0 13.333"/>
              </g>
          </svg>

          <h1 class="mb-8 uppercase text-xl md:text-3xl lg:text-5xl font-extrabold italic text-black">
            Refined & capable
          </h1>
          <p class="mb-8 text-charcoal-grey-64 leading-normal">
            Greenline started as a napkin sketch idea that developed into a fully integrated cloud based POS & management system for Dry Cleaners.
          </p>

          <div class="flex flex-col md:flex-row flex-wrap">
            <div class="w-full md:w-1/2 flex my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23">
                  <g fill="none" fill-rule="evenodd" stroke="#1DB488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25">
                      <path d="M3.25 21.25a1.5 1.5 0 0 1-1.5-1.5V3.365A1.62 1.62 0 0 1 3.365 1.75h19.278a1.613 1.613 0 0 1 1.607 1.607v16.278a1.621 1.621 0 0 1-1.615 1.615H3.25zM24.25 6.25H1.75"/>
                      <path d="M17.5 10.75l3 3-3 3M8.5 10.75l-3 3 3 3M14.5 10.75l-3 6"/>
                  </g>
              </svg>
              <div class="flex-1 mx-6">
                <h3 class="text-black mb-2">
                  Custom software
                </h3>
                <p class="text-charcoal-grey-64 leading-normal">
                  Every line written with the end goal of Greenline in mind.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 flex my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                  <g fill="none" fill-rule="evenodd" stroke="#1DB488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25">
                      <path d="M21.306 1.806h1.5c.828 0 1.5.775 1.5 1.73v19.039c0 .956-.672 1.73-1.5 1.73h-7.5M11.556 24.305v-7h-3v-4.5h3v-5h3v-6"/>
                      <path d="M11.556 4.773l3-2.968 3 2.968M7.056 1.827h-3.75c-.83 0-1.5.775-1.5 1.73v19.04c0 .956.67 1.73 1.5 1.73h4.5v-3.462h-3v-2.596M18.219 24.305v-7h1.5M23.719 12.123h-7.5v1.5"/>
                      <path d="M5.17 6.634v2.25h2.25M19.219 12.123v-3"/>
                  </g>
              </svg>
              <div class="flex-1 mx-6">
                <h3 class="text-black mb-2">
                  Marketing Strategy
                </h3>
                <p class="text-charcoal-grey-64 leading-normal">
                  Which channels will have the most effect in the dry cleaning industry.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 flex my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                  <g fill="none" fill-rule="evenodd" stroke="#1DB488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25">
                      <path d="M11.5 12.597c.001.497-.435.901-.975.903h-7.8c-.539-.001-.976-.405-.975-.902V2.653c-.001-.498.436-.902.976-.903l7.8.012c.539.002.975.406.974.903v9.932zM24.246 7.538c-.003.535-.395.965-.875.962h-7c-.48.004-.871-.426-.875-.961V2.725c.003-.534.393-.965.873-.962l7-.013c.481-.004.873.427.877.962v4.826zM11.5 23.285a.97.97 0 0 1-.977.965l-7.8-.013a.97.97 0 0 1-.973-.964v-4.809a.97.97 0 0 1 .974-.964h7.801a.97.97 0 0 1 .975.964v4.821zM16.372 24.25a.89.89 0 0 1-.876-.902V13.404a.89.89 0 0 1 .875-.904h7a.89.89 0 0 1 .875.904v9.93a.89.89 0 0 1-.874.904l-7 .012z"/>
                  </g>
              </svg>
              <div class="flex-1 mx-6">
                <h3 class="text-black mb-2">
                  Fluid Creative
                </h3>
                <p class="text-charcoal-grey-64 leading-normal">
                  No matter the platform the design was created to fit the mold.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/2 flex my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                  <g fill="none" fill-rule="evenodd" stroke="#1DB488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25">
                      <path d="M12.25 19.75h10.5a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v10.5M1.75 19.75v-1.5M1.75 15.25a1.5 1.5 0 0 1 1.5-1.5M12.25 19.75v-1.5M12.25 15.25a1.5 1.5 0 0 0-1.5-1.5M1.75 22.75a1.5 1.5 0 0 0 1.5 1.5M12.25 22.75a1.5 1.5 0 0 1-1.5 1.5M6.25 13.75h1.5M6.25 24.25h1.5"/>
                      <path d="M16.75 4.75h3.75a.75.75 0 0 1 .75.75v3.75M21.031 4.97l-6.53 6.53"/>
                  </g>
              </svg>
              <div class="flex-1 mx-6">
                <h3 class="text-black mb-2">
                  100% Scalable
                </h3>
                <p class="text-charcoal-grey-64 leading-normal">
                  From a single store to a state-wide business Greenline handles it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="min-h-lg py-10 flex flex-col items-center justify-center container mx-auto">
      <div class="flex flex-col items-center">
          <h1 class="mb-8 uppercase text-xl md:text-3xl lg:text-5xl font-extrabold italic text-black">
            Proud of our Skills
          </h1>
          <p class="w-2/3 text-center leading-normal text-sm text-charcoal-grey-64 font-medium">
            Different Clients require different skills. Luckly we have a variety of them available to help you out whether it is for custom software or some new branding.
          </p>
      </div>

      <div class="flex mt-10 md:mt-20 flex-col lg:flex-row w-full items-center justify-between">
        <div class="w-full md:w-1/2 lg:w-1/3 px-8 mb-6 lg:mb-0">
          <div class="h-128 px-6 flex flex-col items-center justify-center bg-digital rounded-6px">
            <div class="icon-digital h-24 flex items-center">
              <h3 class="text-white text-2xl italic font-extrabold uppercase">Digital</h3>
            </div>
            <div class="mt-2">
              <p class="text-center text-white text-sm font-medium leading-normal">Information is the DNA of a Company. We build effective solutions to use it. </p>
              <div class="flex justify-center mt-6">
                <ul class="p-0">
                  <li class="flex items-center py-2">
                    <div class="w-10 flex justify-start">
                      <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                              <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                  <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                      <g id="digital" transform="translate(32.000000, 237.000000)">
                                          <g id="bullets" transform="translate(16.000000, 143.000000)">
                                              <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </div>
                    <p class="text-white font-bold text-sm">Custom Software Dev</p>
                  </li>

                  <li class="flex items-center py-2">
                    <div class="w-10 flex justify-start">
                      <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                              <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                  <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                      <g id="digital" transform="translate(32.000000, 237.000000)">
                                          <g id="bullets" transform="translate(16.000000, 143.000000)">
                                              <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </div>

                    <p class="text-white font-bold text-sm">Web & Mobile App Dev</p>
                  </li>

                  <li class="flex items-center py-2">
                    <div class="w-10 flex justify-start">
                      <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                              <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                  <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                      <g id="digital" transform="translate(32.000000, 237.000000)">
                                          <g id="bullets" transform="translate(16.000000, 143.000000)">
                                              <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </div>
                    <p class="text-white font-bold text-sm">Database Architecture</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-8 mb-6 lg:mb-0">
          <div class="h-128 bg-strategy">
            <div class="flex flex-col items-center justify-center rounded-6px bg-strategy-color h-full px-6 ">
              <div class="icon-strategy h-24 flex items-center">
                <h3 class="text-white text-2xl italic font-extrabold uppercase">Strategy</h3>
              </div>
              <div class="mt-2">
                <p class="text-center text-white text-sm font-medium leading-normal">
                  It’s not just about the end goal, but the way we get there is just as crucial.
                </p>
                <div class="flex justify-center mt-6">
                  <ul class="p-0">
                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-616.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="Strategy" transform="translate(427.000000, 242.000000)">
                                            <g id="bullets" transform="translate(17.000000, 138.000000)">
                                                <polygon id="Shape-Copy-2" points="8 92 6.6 93.4 12.2 99 0 99 0 101 12.2 101 6.6 106.6 8 108 16 100"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>
                      <p class="text-white font-bold text-sm">Brand Consultation</p>
                    </li>

                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-616.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="Strategy" transform="translate(427.000000, 242.000000)">
                                            <g id="bullets" transform="translate(17.000000, 138.000000)">
                                                <polygon id="Shape-Copy-2" points="8 92 6.6 93.4 12.2 99 0 99 0 101 12.2 101 6.6 106.6 8 108 16 100"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>

                      <p class="text-white font-bold text-sm">Market Strategy</p>
                    </li>

                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-616.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="Strategy" transform="translate(427.000000, 242.000000)">
                                            <g id="bullets" transform="translate(17.000000, 138.000000)">
                                                <polygon id="Shape-Copy-2" points="8 92 6.6 93.4 12.2 99 0 99 0 101 12.2 101 6.6 106.6 8 108 16 100"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>
                      <p class="text-white font-bold text-sm">Audience Connection</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-8 mb-6 lg:mb-0">
          <div class="h-128 bg-creative rounded-6px">
            <div class="flex flex-col items-center justify-center h-full w-full bg-creative-color rounded-6px">
              <div class="icon-creative h-24 flex items-center">
                <h3 class="text-white text-2xl italic font-extrabold uppercase">CREATIVE</h3>
              </div>
              <div class="mt-2">
                <p class="text-center text-white text-sm font-medium leading-normal">Impactful branding & interfaces all have one similarity, user driven design.</p>
                <div class="flex justify-center mt-6">
                  <ul class="p-0">
                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="digital" transform="translate(32.000000, 237.000000)">
                                            <g id="bullets" transform="translate(16.000000, 143.000000)">
                                                <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>
                      <p class="text-white font-bold text-sm">Brand & Visual Identity</p>
                    </li>

                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="digital" transform="translate(32.000000, 237.000000)">
                                            <g id="bullets" transform="translate(16.000000, 143.000000)">
                                                <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>

                      <p class="text-white font-bold text-sm">Interaction Design</p>
                    </li>

                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                                <g id="Landing" transform="translate(-220.000000, -2517.000000)" fill="#FFFFFF">
                                    <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                        <g id="digital" transform="translate(32.000000, 237.000000)">
                                            <g id="bullets" transform="translate(16.000000, 143.000000)">
                                                <path d="M13.6171875,104.218558 L17.9203125,100.184257 C18.0265625,100.084259 18.0265625,99.9186368 17.9203125,99.8186387 L13.6171875,95.7812129 C13.5171875,95.6874646 13.3578125,95.6905895 13.2640625,95.7937126 L12.4140625,96.699946 C12.3171562,96.8030691 12.3265625,96.9655661 12.4296875,97.0593144 L15.7453125,99.9998853 L12.4296875,102.940456 C12.3234375,103.034205 12.3171562,103.196702 12.4140625,103.299825 L13.2640625,104.206058 C13.3609375,104.306056 13.5171875,104.312306 13.6171875,104.218558 M4.7390625,104.206058 L5.5890625,103.299825 C5.6859375,103.196702 5.6765625,103.034205 5.5734375,102.940456 L2.2578125,99.9998853 L5.5734375,97.0593144 C5.6796875,96.9655661 5.6859375,96.8030691 5.5890625,96.699946 L4.7390625,95.7937126 C4.6453125,95.6937145 4.4859375,95.6874646 4.3859375,95.7812129 L0.0796875,99.8186387 C-0.0265625,99.9186368 -0.0265625,100.084259 0.0796875,100.184257 L4.3859375,104.218558 C4.4859375,104.312306 4.6421875,104.306056 4.7390625,104.206058 M7.3390625,107.990363 L6.1265625,107.637245 C5.9953125,107.599746 5.9171875,107.459123 5.9546875,107.327876 L10.3546875,92.181279 C10.3921875,92.0500315 10.5328125,91.9719079 10.6640625,92.0094072 L11.8765625,92.3625257 C12.0078125,92.400025 12.0859375,92.5406474 12.0484375,92.671895 L7.6484375,107.818492 C7.6109375,107.952864 7.4734375,108.027863 7.3390625,107.990363" id="icon-1-copy-2"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </div>
                      <p class="text-white font-bold text-sm">Photography & Videography</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="clients" class="min-h-lg flex flex-col items-center justify-center container mx-auto">
      <div class="flex flex-col items-center">
          <h1 class="mb-8 uppercase text-xl md:text-3xl lg:text-5xl font-extrabold italic text-black">
            COMPANY WE KEEP
          </h1>
          <p class="w-2/3 text-center leading-normal text-sm text-charcoal-grey-64 font-medium">
            We pride ourselves on our diverse portfolio. From healthcare companies to industrial shops, we have had the opportunity to help grow impactful businesses.
          </p>
      </div>

      <div class="w-full flex flex-wrap justify-between items-center py-10">
        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:123px;height:24px" src="@/assets/img/aetna.svg" alt="Aetna Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:124px;height:38px" src="@/assets/img/carefree.svg" alt="CareFree Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:124.79px;height:19.9px" src="@/assets/img/csusb.png" alt="CSUSB Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:133px;height:52px" src="@/assets/img/calpoly.png" alt="Cal Poly Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:123px;height:18px;" src="@/assets/img/mutesix-logo.png" alt="Mutesix Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:123px;height:24px;" src="@/assets/img/auditme-logo.svg" alt="Audit.me Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:123px;height:18px;" src="@/assets/img/datasix-logo.png" alt="Datasix Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10">
          <img style="width:123px;height:26px;" src="@/assets/img/productn-logo.png" alt="Product N Logo">
        </div>
      </div>
    </section>

    <section id="contact" class="min-h-lg bg-contact">
      <div class="bg-contact-color min-h-lg flex flex-col justify-center items-center px-8">
        <div class="flex flex-col items-center">
          <h1 class="mb-8 uppercase text-xl md:text-3xl lg:text-4xl font-extrabold italic text-white">
            INTERESTED IN WORKING WITH US?
          </h1>
          <p class="w-2/3 text-center leading-normal text-sm text-white font-medium">
            We create innovative solutions for our Clients that way they can continue to do what they do best.
          </p>
        </div>
        <form
          name="contact"
          method="POST"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
          class="container w-full md:w-2/3 lg:w-1/2 mx-auto py-10 flex flex-col justify-center items-center">
          <div class="flex w-full items-center">
            <div class="w-1/2 pr-8">
              <div class="mb-10">
                <label for="full_name" class="text-sm text-white">Full Name*</label>
                <input type="text" name="full_name" v-model="form.full_name" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Full Name">
              </div>

              <div class="mb-10">
                <label for="email" class="text-sm text-white">Work Email*</label>
                <input type="text" name="email" v-model="form.email" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Email Address">
              </div>
            </div>
            <div class="w-1/2 pr-8">
              <div class="mb-10">
                <label for="company" class="text-sm text-white">Company*</label>
                <input type="text" name="company" v-model="form.company" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Company Name">
              </div>

              <div class="mb-10">
                <label for="phone" class="text-sm text-white">Phone Number</label>
                <input type="text" name="phone" v-model="form.phone" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="(555) 555-5555">
              </div>
            </div>
          </div>

          <div class="w-full mt-6">
            <label for="" class="text-xs text-white">Interested In*</label>
            <textarea name="message" v-model="form.message" id="" rows="4" class="w-full mt-3 text-black px-3 py-4" placeholder="What are your needs? Include as much detail as possible.">
            </textarea>
          </div>

          <div class="w-full flex mt-4 justify-end">
            <button type="submit" class="uppercase flex items-center rounded-16px py-1 font-extrabold italic border border-white text-white px-3">
              <svg class="mr-3" width="16px" height="12px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Landing" transform="translate(-989.000000, -4127.000000)" fill="#FFFFFF">
                          <g id="contact-form" transform="translate(0.000000, 3538.000000)">
                              <g id="Email-Right" transform="translate(973.000000, 579.000000)">
                                  <g id="email-button" transform="translate(16.000000, 10.000000)">
                                      <path d="M1.48837209,10.5 L1.48837209,4.875 C2.20571556,5.42812914 3.22300089,6.20431623 4.77355098,7.37973459 C5.45780411,7.90116284 6.65610018,9.05224486 8,9.04524399 C9.33729428,9.05224486 10.520407,7.91786188 11.2261673,7.37997705 C12.776686,6.20461929 13.7942531,5.42818976 14.5116279,4.875 L14.5116279,10.5 L1.48837209,10.5 Z M14.5116279,1.5 L14.5116279,2.775161 C13.8096869,3.34575688 12.6906261,4.23301018 10.2982603,6.1029859 C9.77103757,6.51695619 8.72667263,7.51149115 8,7.49989736 C7.27345259,7.51161615 6.22874329,6.51679994 5.70173971,6.1029859 C3.30974955,4.23329143 2.19040698,3.34585063 1.48837209,2.775161 L1.48837209,1.5 L14.5116279,1.5 Z M14.5,0 L1.5,0 C0.6715625,0 0,0.6715625 0,1.5 L0,10.5 C0,11.3284375 0.6715625,12 1.5,12 L14.5,12 C15.3284375,12 16,11.3284375 16,10.5 L16,1.5 C16,0.6715625 15.3284375,0 14.5,0 Z" id="Fill-1"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
              <span>Lets go</span>
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="bg-footer-color flex items-center justify-center min-h-md">
      <div class="flex items-center justify-center container mx-auto">
        <div class="w-full min-h-xs flex flex-col items-center lg:flex-row p-3 mt-10 lg:mt-0">
          <div class="w-full flex flex-col items-center lg:items-start md:w-1/3">
            <img src="@/assets/img/cion-logo.svg" alt="CION Agency Logo" style="height: 75px">
            <div class="mt-8 w-full px-6 md:px-0">
              <h3 class="text-xl font-extrabold italic text-black uppercase">Contact Us</h3>
              <div class="py-2">
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">General:<span class="ml-2 text-blue underline tracking-wide">808.218.8241</span></p>
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">General:<span class="ml-2 text-blue underline tracking-wide">info@cion.agency</span></p>
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">Support:<span class="ml-2 text-blue underline tracking-wide">support@cion.agency</span></p>
              </div>
              <div class="mt-6 flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Follow Us</h3>
                  <div class="flex items-center pr-6 mt-4">
                    <a class="pr-5">
                      <svg width="8px" height="16px" viewBox="0 0 8 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Landing" transform="translate(-172.000000, -4675.000000)" fill="#00BCD4">
                                  <g id="footer" transform="translate(0.000000, 4274.000000)">
                                      <g id="social" transform="translate(172.000000, 362.000000)">
                                          <path d="M2.32424242,55 L2.32424242,47.84375 L0,47.84375 L0,45 L2.32424242,45 L2.32424242,42.759375 C2.32424242,40.325 3.76666667,39 5.87272727,39 C6.88178788,39 7.74848485,39.078125 8,39.1125 L8,41.65625 L6.53939394,41.65625 C5.39393939,41.65625 5.17272727,42.21875 5.17272727,43.040625 L5.17272727,45 L7.75757576,45 L7.4030303,47.84375 L5.17272727,47.84375 L5.17272727,55" id="facebook"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </a>

                    <a class="pr-5">
                      <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Landing" transform="translate(-212.000000, -4675.000000)" fill="#00BCD4">
                                  <g id="footer" transform="translate(0.000000, 4274.000000)">
                                      <g id="social" transform="translate(172.000000, 362.000000)">
                                          <path d="M54.2375906,51.716278 C53.9591746,52.4160437 53.4202253,52.9551489 52.7170106,53.2371974 C51.6640268,53.6549146 49.1654211,53.5585184 48.0017847,53.5585184 C46.8381484,53.5585184 44.3359732,53.6513444 43.2865588,53.2371974 C42.5869492,52.9587192 42.0479643,52.419614 41.7659788,51.716278 C41.3483547,50.6630592 41.4447295,48.163896 41.4447295,47 C41.4447295,45.836104 41.3519241,43.3333705 41.7659788,42.283722 C42.0443949,41.5839563 42.5833798,41.0448511 43.2865588,40.7628026 C44.3395427,40.3450854 46.8381484,40.4414816 48.0017847,40.4414816 C49.1654211,40.4414816 51.6675962,40.3486556 52.7170106,40.7628026 C53.4166202,41.0412808 53.9556408,41.580386 54.2375906,42.283722 C54.6552147,43.3369408 54.5588399,45.836104 54.5588399,47 C54.5588399,48.163896 54.6552147,50.6666295 54.2375906,51.716278 M55.9437814,43.7011045 C55.8831366,42.4193908 55.5904071,41.2840567 54.651681,40.3486556 C53.7164529,39.4132545 52.5814077,39.1204954 51.2999442,39.0562312 C49.9792526,38.9812563 46.0207474,38.9812563 44.7000558,39.0562312 C43.4221974,39.1169251 42.2871166,39.4096843 41.3483547,40.3450854 C40.4095929,41.2804864 40.1204685,42.4158206 40.0562186,43.6975343 C39.9812605,45.0185206 39.9812605,48.9779092 40.0562186,50.2988955 C40.1168991,51.5806092 40.4095929,52.7159433 41.3483547,53.6513444 C42.2871166,54.5867455 43.418628,54.8795046 44.7000558,54.9437688 C46.0207474,55.0187437 49.9792526,55.0187437 51.2999442,54.9437688 C52.5814077,54.8830749 53.7164529,54.5903157 54.651681,53.6513444 C55.5868377,52.7159433 55.8795315,51.5806092 55.9437814,50.2988955 C56.0187395,48.9779092 56.0187395,45.0220908 55.9437814,43.7011045 M53.22744,42.7300011 C53.22744,43.2619659 52.7991076,43.6868236 52.270831,43.6868236 C51.7389849,43.6868236 51.3142577,43.2583956 51.3142577,42.7300011 C51.3142577,42.2016066 51.7425901,41.7731786 52.270831,41.7731786 C52.7991076,41.7731786 53.22744,42.2016066 53.22744,42.7300011 M48.0017847,49.6669642 C46.5347462,49.6669642 45.3354155,48.4709361 45.3354155,47 C45.3354155,45.5290639 46.5311768,44.3330358 48.0017847,44.3330358 C49.4723926,44.3330358 50.6681539,45.5290639 50.6681539,47 C50.6681539,48.4709361 49.4688232,49.6669642 48.0017847,49.6669642 M48.0017847,42.8978021 C45.731623,42.8978021 43.900502,44.7293317 43.900502,47 C43.900502,49.2706683 45.731623,51.1021979 48.0017847,51.1021979 C50.2719465,51.1021979 52.1030675,49.2706683 52.1030675,47 C52.1030675,44.7293317 50.2719465,42.8978021 48.0017847,42.8978021" id="instagram"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </a>

                    <a class="pr-5">
                      <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Landing" transform="translate(-260.000000, -4675.000000)" fill="#00BCD4">
                                  <g id="footer" transform="translate(0.000000, 4274.000000)">
                                      <g id="social" transform="translate(172.000000, 362.000000)">
                                          <path d="M103.996429,55 L100.686454,55 L100.686454,49.8 C100.686454,48.5607143 100.661459,46.9714286 98.9618389,46.9714286 C97.2372238,46.9714286 96.9729971,48.3178571 96.9729971,49.7107143 L96.9729971,55 L93.659451,55 L93.659451,44.3178571 L96.8408837,44.3178571 L96.8408837,45.775 L96.8873019,45.775 C97.3300603,44.9357143 98.4119616,44.05 100.025887,44.05 C103.382281,44.05 104,46.2607143 104,49.1321429 L104,55 L103.996429,55 Z M89.9209998,42.8607143 C88.8605222,42.8607143 88,41.9821429 88,40.9214286 C88,39.8607143 88.8605222,39 89.9209998,39 C90.9814773,39 91.8419996,39.8607143 91.8419996,40.9214286 C91.8419996,41.9821429 90.9814773,42.8607143 89.9209998,42.8607143 Z M88.2642267,55 L91.5813435,55 L91.5813435,44.3178571 L88.2642267,44.3178571 L88.2642267,55 Z" id="linkedin"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </a>

                    <a class="pr-5">
                      <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="Landing" transform="translate(-308.000000, -4675.000000)" fill="#00BCD4">
                                  <g id="footer" transform="translate(0.000000, 4274.000000)">
                                      <g id="social" transform="translate(172.000000, 362.000000)">
                                          <path d="M153.956906,43.5124989 C153.956906,48.8499749 149.832554,55 142.294439,55 C139.972086,55 137.814734,54.3374712 136,53.1875591 C136.329962,53.2249968 136.64719,53.2375017 136.989848,53.2375017 C138.906066,53.2375017 140.670057,52.6000212 142.078696,51.5125181 C140.276657,51.4750034 138.766495,50.3125095 138.246181,48.7124979 C138.50001,48.7500126 138.7538,48.7749839 139.020324,48.7749839 C139.388334,48.7749839 139.756382,48.7249643 140.099,48.637507 C138.220829,48.2625139 136.812152,46.6374926 136.812152,44.6749928 L136.812152,44.6250117 C137.357818,44.9250139 137.992391,45.1125104 138.664932,45.1374818 C137.560865,44.4124669 136.837542,43.174982 136.837542,41.7749719 C136.837542,41.0249858 137.040551,40.3374856 137.395904,39.7374813 C139.413685,42.1874797 142.446705,43.7874528 145.847695,43.9624829 C145.784257,43.6624807 145.746171,43.3500121 145.746171,43.0375051 C145.746171,40.8124794 147.5736,39 149.845132,39 C151.025371,39 152.091352,39.4874987 152.840105,40.2749996 C153.766476,40.1000079 154.65476,39.7624911 155.441638,39.3000022 C155.137028,40.2375234 154.489838,41.0250242 153.6396,41.5249894 C154.464486,41.437532 155.263981,41.2124823 156,40.9000137 C155.441717,41.699981 154.743706,42.4124525 153.944211,42.9874855 C153.956906,43.1624771 153.956906,43.3375072 153.956906,43.5124989 Z" id="twitter"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Location</h3>
                  <div class="flex items-center mt-4">
                    <p class="font-medium text-sm text-grey-dark tracking-wide">Los Angeles, CA</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="w-full lg:w-2/3 flex flex-col justify-center mt-8">
            <div class="flex flex-col items-center justify-between">
              <form
                name="contact"
                method="POST"
                action=""
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                @submit.prevent="handleSubmit"
                class="px-6 md:px-0 w-full md:w-2/3 flex flex-col md:flex-row items-center">
                <div class="w-full flex-1">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Newsletter</h3>
                  <label for="email" class="hidden"></label>
                  <input name="email" v-model="form.email" type="text" class="focus:outline-none text-grey-dark text-sm mt-4 bg-transparent border-b border-grey w-full" placeholder="Email Address">
                </div>
                <div class="w-full md:w-1/4 flex justify-start mt-4 md:mt-0 md:justify-end">
                  <button type="submit" class="uppercase flex items-center rounded-16px py-1 font-extrabold italic border border-blue text-blue px-3">
                    <svg class="mr-3 fill-current text-blue" width="16px" height="12px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Comp" stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g id="Landing" transform="translate(-989.000000, -4127.000000)">
                                <g id="contact-form" transform="translate(0.000000, 3538.000000)">
                                    <g id="Email-Right" transform="translate(973.000000, 579.000000)">
                                        <g id="email-button" transform="translate(16.000000, 10.000000)">
                                            <path d="M1.48837209,10.5 L1.48837209,4.875 C2.20571556,5.42812914 3.22300089,6.20431623 4.77355098,7.37973459 C5.45780411,7.90116284 6.65610018,9.05224486 8,9.04524399 C9.33729428,9.05224486 10.520407,7.91786188 11.2261673,7.37997705 C12.776686,6.20461929 13.7942531,5.42818976 14.5116279,4.875 L14.5116279,10.5 L1.48837209,10.5 Z M14.5116279,1.5 L14.5116279,2.775161 C13.8096869,3.34575688 12.6906261,4.23301018 10.2982603,6.1029859 C9.77103757,6.51695619 8.72667263,7.51149115 8,7.49989736 C7.27345259,7.51161615 6.22874329,6.51679994 5.70173971,6.1029859 C3.30974955,4.23329143 2.19040698,3.34585063 1.48837209,2.775161 L1.48837209,1.5 L14.5116279,1.5 Z M14.5,0 L1.5,0 C0.6715625,0 0,0.6715625 0,1.5 L0,10.5 C0,11.3284375 0.6715625,12 1.5,12 L14.5,12 C15.3284375,12 16,11.3284375 16,10.5 L16,1.5 C16,0.6715625 15.3284375,0 14.5,0 Z" id="Fill-1"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span>Submit</span>
                  </button>
                </div>
              </form>

              <div class="flex mt-20 items-center">
                <div class="w-10">
                  <button class="focus:outline-none">
                    <svg class="fill-current text-grey-dark hove:text-black" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Comp" stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g id="Landing" transform="translate(-720.000000, -4597.000000)">
                                <rect fill="none" x="0" y="0" width="1440" height="4811"></rect>
                                <g id="footer" transform="translate(0.000000, 4274.000000)" opacity="0.24">
                                    <g id="blog" transform="translate(628.000000, 65.000000)">
                                        <g id="Material/Icons-black/chevron-left" transform="translate(84.000000, 252.000000)">
                                            <polygon id="Shape" points="15.4 7.4 14 6 8 12 14 18 15.4 16.6 10.8 12"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                  </button>
                </div>

                <div class="flex-1 md:pr-10">
                  <div class="bg-white relative shadow p-6 rounded flex flex-col md:flex-row md:h-48">
                    <div class="w-full lg:w-2/3">
                      <h4 class="text-grey-light text-4xl font-extrabold italic uppercase">
                        NOV 8
                      </h4>
                      <p class="-mt-5 text-black leading-normal font-semibold text-xl">
                        Ever accidentally closed the wrong tab on Chrome?
                      </p>

                      <p class="flex text-grey-dark font-medium py-4">
                        UGH! Ever accidentally closed the wrong tab on Google Chrome??? SAME. Reopen a Google…
                      </p>
                    </div>
                    <div class="hidden lg:block absolute pin-r -mt-12 -mr-4 w-48 h-48 bg-footer">
                    </div>
                    <div>
                      <button class="font-extrabold italic uppercase text-white flex items-center">
                        <span class="mr-3">
                          Read More
                        </span>

                        <svg class="fill-current text-grey hove:text-grey-dark" width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Landing" transform="translate(-1195.000000, -4648.000000)">
                                    <g id="footer" transform="translate(0.000000, 4274.000000)">
                                        <g id="blog" transform="translate(628.000000, 65.000000)">
                                            <g id="center-post" transform="translate(124.000000, 176.000000)">
                                                <g id="Learn-More" transform="translate(351.000000, 131.000000)">
                                                    <polygon id="Shape" points="100 2 98.6 3.4 104.2 9 92 9 92 11 104.2 11 98.6 16.6 100 18 108 10"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="w-10 flex justify-end">
                  <button class="focus:outline-none">
                    <svg class="fill-current text-grey-dark hover:text-black" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Comp" stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g id="Landing" transform="translate(-1261.000000, -4597.000000)">
                                <rect fill="none" x="0" y="0" width="1440" height="4811"></rect>
                                <g id="footer" transform="translate(0.000000, 4274.000000)" opacity="0.7">
                                    <g id="blog" transform="translate(628.000000, 65.000000)">
                                        <g id="Material/Icons-black/chevron-right" transform="translate(625.000000, 252.000000)">
                                            <polygon id="Shape" points="8.59997559 7.4 9.99997559 6 15.9999756 12 9.99997559 18 8.59997559 16.6 13.1999756 12"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data () {
    return {
      form: {
        full_name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      }
    }
  },

  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit (type) {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": 'contact',
          ...this.form
        }),
        axiosConfig
      ).then(response => {
        this.form = {
          full_name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        }
        Swal.fire({
          title: 'Thanks for reaching out. We will get right back in touch with you!',
          type: 'success'
        })
      }).catch(error => {
        Swal.fire({
          title: 'Something Went Wrong!',
          type: 'error'
        })
      });
    }
  }
}
</script>

<style>

  .bg-man {
    background : url('../assets/img/man-alone.png');
    background-size: cover;
    background-position: bottom;
  }

  .bg-clothes {
    background: url('../assets/img/clothes.png');
    background-size: cover
  }

  .bg-digital {
    background: #00BCD4;
    box-shadow: 0 22px 22px -13px rgba(0,172,193,0.23), 0 33px 52px 0 rgba(0,172,193,0.18);
  }

  .icon-digital {
    background: url('../assets/img/digital.svg');
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
  }

  .bg-strategy {
    background-image: url('../assets/img/strategy.png');
    background-size: cover;
    box-shadow: 0 22px 22px -13px rgba(255,184,63,0.23), 0 33px 52px 0 rgba(255,184,63,0.18);
  }

  .bg-strategy-color {
    background-color: #FFA000;
    opacity: .9;
  }

  .icon-strategy {
    background: url('../assets/img/strategy-icon.svg');
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
  }

  .bg-creative {
    background-image: url('../assets/img/creative.png');
    background-size: cover;
    box-shadow: 0 22px 22px -13px rgba(238,0,74,0.23), 0 33px 52px 0 rgba(238,0,74,0.18);
  }

  .bg-creative-color {
    background-color: #FF3876;
    opacity: .9;
  }

  .icon-creative {
    background: url('../assets/img/creative-icon.svg');
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
  }

  .bg-contact {
    background-image: url('../assets/img/contact.png');
    background-size: cover;
  }

  .bg-contact-color {
    background: #00BCD4;
    background: rgba(0,188,212,0.50);
    opacity: .9;
  }

  .bg-contact-color {
    background: #00BCD4;
  }

  .bg-footer {
    background-image: url('../assets/img/footer.png');
    background-size: cover;
    box-shadow: 0 12px 12px -7px rgba(0, 0, 0, .1), 0 18px 29px 0 rgba(0, 0, 0, .12);
    background-position: bottom;
  }

  .bg-footer-color {
    background-color: #F1F3F4;
    opacity: 50%;
  }
</style>
