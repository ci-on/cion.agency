<template>
  <main class="font-sans">
    <section
      class="max-h-sm min-h-sm md:max-h-md md:min-h-md lg:max-h-lg lg:min-h-lg relative bg-cover bg-man"
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
              <a href="#services" class="appearance-none text-black no-underline px-6" v-smooth-scroll>
                services
              </a>
              <a href="#clients" class="appearance-none text-black no-underline px-6" v-smooth-scroll>
                clients
              </a>
              <a href="#contact" class="appearance-none text-black no-underline px-6" v-smooth-scroll>
                contact
              </a>
            </div>
            <div class="mt-6 md:mt-0">
              <a href="https://github.com/ci-on" class="px-2" target="_blank">
                <svg role="img" width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub icon</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/cion-agency/" class="px-2" target="_blank">
                <svg role="img" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn icon</title>
                  <path fill="#333" fill-rule="evenodd" d="M13.997 14H11.1V9.45c0-1.084-.022-2.475-1.51-2.475-1.508 0-1.74 1.178-1.74 2.397V14H4.952V4.653h2.784v1.275h.04c.388-.734 1.334-1.51 2.747-1.51C13.459 4.419 14 6.354 14 8.867V14h-.003zM1.68 3.378C.753 3.378 0 2.61 0 1.681a1.682 1.682 0 0 1 3.362 0c0 .928-.753 1.697-1.681 1.697zM.23 14h2.903V4.653H.23V14z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center h-full w-full px-16 max-h-sm min-h-sm md:max-h-md md:min-h-md lg:max-h-lg lg:min-h-lg md:-mt-20">
          <h1 class="w-full md:w-2/3 mb-4 uppercase leading-none text-black text-2xl md:text-5xl lg:text-7xl font-extrabold italic">
            Build awesome experiences
          </h1>
          <h3 class="w-2/3 lg:w-1/3 leading-tight tracking-wide font-medium text-base md:text-xl text-black mb-12">
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
          <p class="text-center text-sm w-1/2 leading-normal">
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
          <p class="text-center text-sm w-1/2 leading-normal">
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
          <p class="text-center text-sm w-1/2 leading-normal">
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
          Different Clients require different skills. Luckily, we have a variety of them available to help you out whether it is for custom software or some new branding.
        </p>
      </div>

      <div class="flex mt-10 md:mt-20 flex-col lg:flex-row w-full items-center justify-between">
        <div class="w-full md:w-1/2 lg:w-1/3 px-8 mb-6 lg:mb-0">
          <div class="h-128 bg-digital rounded-6px">
            <div class="flex flex-col items-center justify-center h-full w-full bg-digital-color rounded-6px">
              <div class="icon-digital h-24 flex items-center">
                <h3 class="text-white text-2xl italic font-extrabold uppercase">DIGITAL</h3>
              </div>
              <div class="mt-2">
                <p class="text-center text-white font-medium leading-normal px-5">Information is the DNA of a Company. We build effective solutions to use it.</p>
                <div class="flex justify-center mt-6">
                  <ul class="p-0">
                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                            <g id="Landing" transform="translate(-220.000000, -2437.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="digital" transform="translate(32.000000, 237.000000)">
                                  <g id="bullets" transform="translate(16.000000, 143.000000)">
                                    <path d="M13.6171875,24.2185578 L17.9203125,20.1842569 C18.0265625,20.0842588 18.0265625,19.9186368 17.9203125,19.8186387 L13.6171875,15.7812129 C13.5171875,15.6874646 13.3578125,15.6905895 13.2640625,15.7937126 L12.4140625,16.699946 C12.3171562,16.8030691 12.3265625,16.9655661 12.4296875,17.0593144 L15.7453125,19.9998853 L12.4296875,22.9404563 C12.3234375,23.0342046 12.3171562,23.1967016 12.4140625,23.2998247 L13.2640625,24.206058 C13.3609375,24.3060562 13.5171875,24.3123061 13.6171875,24.2185578 M4.7390625,24.206058 L5.5890625,23.2998247 C5.6859375,23.1967016 5.6765625,23.0342046 5.5734375,22.9404563 L2.2578125,19.9998853 L5.5734375,17.0593144 C5.6796875,16.9655661 5.6859375,16.8030691 5.5890625,16.699946 L4.7390625,15.7937126 C4.6453125,15.6937145 4.4859375,15.6874646 4.3859375,15.7812129 L0.0796875,19.8186387 C-0.0265625,19.9186368 -0.0265625,20.0842588 0.0796875,20.1842569 L4.3859375,24.2185578 C4.4859375,24.3123061 4.6421875,24.3060562 4.7390625,24.206058 M7.3390625,27.9903635 L6.1265625,27.6372449 C5.9953125,27.5997456 5.9171875,27.4591232 5.9546875,27.3278756 L10.3546875,12.181279 C10.3921875,12.0500315 10.5328125,11.9719079 10.6640625,12.0094072 L11.8765625,12.3625257 C12.0078125,12.400025 12.0859375,12.5406474 12.0484375,12.671895 L7.6484375,27.8184916 C7.6109375,27.9528641 7.4734375,28.0278628 7.3390625,27.9903635" id="icon-1"></path>
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
                            <g id="Landing" transform="translate(-220.000000, -2437.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="digital" transform="translate(32.000000, 237.000000)">
                                  <g id="bullets" transform="translate(16.000000, 143.000000)">
                                    <path d="M13.6171875,24.2185578 L17.9203125,20.1842569 C18.0265625,20.0842588 18.0265625,19.9186368 17.9203125,19.8186387 L13.6171875,15.7812129 C13.5171875,15.6874646 13.3578125,15.6905895 13.2640625,15.7937126 L12.4140625,16.699946 C12.3171562,16.8030691 12.3265625,16.9655661 12.4296875,17.0593144 L15.7453125,19.9998853 L12.4296875,22.9404563 C12.3234375,23.0342046 12.3171562,23.1967016 12.4140625,23.2998247 L13.2640625,24.206058 C13.3609375,24.3060562 13.5171875,24.3123061 13.6171875,24.2185578 M4.7390625,24.206058 L5.5890625,23.2998247 C5.6859375,23.1967016 5.6765625,23.0342046 5.5734375,22.9404563 L2.2578125,19.9998853 L5.5734375,17.0593144 C5.6796875,16.9655661 5.6859375,16.8030691 5.5890625,16.699946 L4.7390625,15.7937126 C4.6453125,15.6937145 4.4859375,15.6874646 4.3859375,15.7812129 L0.0796875,19.8186387 C-0.0265625,19.9186368 -0.0265625,20.0842588 0.0796875,20.1842569 L4.3859375,24.2185578 C4.4859375,24.3123061 4.6421875,24.3060562 4.7390625,24.206058 M7.3390625,27.9903635 L6.1265625,27.6372449 C5.9953125,27.5997456 5.9171875,27.4591232 5.9546875,27.3278756 L10.3546875,12.181279 C10.3921875,12.0500315 10.5328125,11.9719079 10.6640625,12.0094072 L11.8765625,12.3625257 C12.0078125,12.400025 12.0859375,12.5406474 12.0484375,12.671895 L7.6484375,27.8184916 C7.6109375,27.9528641 7.4734375,28.0278628 7.3390625,27.9903635" id="icon-1"></path>
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
                            <g id="Landing" transform="translate(-220.000000, -2437.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="digital" transform="translate(32.000000, 237.000000)">
                                  <g id="bullets" transform="translate(16.000000, 143.000000)">
                                    <path d="M13.6171875,24.2185578 L17.9203125,20.1842569 C18.0265625,20.0842588 18.0265625,19.9186368 17.9203125,19.8186387 L13.6171875,15.7812129 C13.5171875,15.6874646 13.3578125,15.6905895 13.2640625,15.7937126 L12.4140625,16.699946 C12.3171562,16.8030691 12.3265625,16.9655661 12.4296875,17.0593144 L15.7453125,19.9998853 L12.4296875,22.9404563 C12.3234375,23.0342046 12.3171562,23.1967016 12.4140625,23.2998247 L13.2640625,24.206058 C13.3609375,24.3060562 13.5171875,24.3123061 13.6171875,24.2185578 M4.7390625,24.206058 L5.5890625,23.2998247 C5.6859375,23.1967016 5.6765625,23.0342046 5.5734375,22.9404563 L2.2578125,19.9998853 L5.5734375,17.0593144 C5.6796875,16.9655661 5.6859375,16.8030691 5.5890625,16.699946 L4.7390625,15.7937126 C4.6453125,15.6937145 4.4859375,15.6874646 4.3859375,15.7812129 L0.0796875,19.8186387 C-0.0265625,19.9186368 -0.0265625,20.0842588 0.0796875,20.1842569 L4.3859375,24.2185578 C4.4859375,24.3123061 4.6421875,24.3060562 4.7390625,24.206058 M7.3390625,27.9903635 L6.1265625,27.6372449 C5.9953125,27.5997456 5.9171875,27.4591232 5.9546875,27.3278756 L10.3546875,12.181279 C10.3921875,12.0500315 10.5328125,11.9719079 10.6640625,12.0094072 L11.8765625,12.3625257 C12.0078125,12.400025 12.0859375,12.5406474 12.0484375,12.671895 L7.6484375,27.8184916 C7.6109375,27.9528641 7.4734375,28.0278628 7.3390625,27.9903635" id="icon-1"></path>
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
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-8 mb-6 lg:mb-0">
          <div class="h-128 bg-strategy">
            <div class="flex flex-col items-center justify-center rounded-6px bg-strategy-color h-full px-6 ">
              <div class="icon-strategy h-24 flex items-center">
                <h3 class="text-white text-2xl italic font-extrabold uppercase">Strategy</h3>
              </div>
              <div class="mt-2">
                <p class="text-center text-white font-medium leading-normal px-5">
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
                <p class="text-center text-white font-medium leading-normal px-5">Impactful branding & interfaces all have one similarity, user driven design.</p>
                <div class="flex justify-center mt-6">
                  <ul class="p-0">
                    <li class="flex items-center py-2">
                      <div class="w-10 flex justify-start">
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>Bullet Icon</title>
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                            <g id="Landing" transform="translate(-1012.000000, -2441.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="creative" transform="translate(824.000000, 246.000000)">
                                  <g id="bullets" transform="translate(16.000000, 138.000000)">
                                    <path d="M0,24.5714286 L3.42857143,24.5714286 L3.42857143,28 L5.71428571,28 L5.71428571,22.2857143 L0,22.2857143 L0,24.5714286 L0,24.5714286 Z M3.42857143,15.4285714 L0,15.4285714 L0,17.7142857 L5.71428571,17.7142857 L5.71428571,12 L3.42857143,12 L3.42857143,15.4285714 L3.42857143,15.4285714 Z M10.2857143,28 L12.5714286,28 L12.5714286,24.5714286 L16,24.5714286 L16,22.2857143 L10.2857143,22.2857143 L10.2857143,28 L10.2857143,28 Z M12.5714286,15.4285714 L12.5714286,12 L10.2857143,12 L10.2857143,17.7142857 L16,17.7142857 L16,15.4285714 L12.5714286,15.4285714 L12.5714286,15.4285714 Z" id="Shape"></path>
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
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>Bullet Icon</title>
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                            <g id="Landing" transform="translate(-1012.000000, -2441.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="creative" transform="translate(824.000000, 246.000000)">
                                  <g id="bullets" transform="translate(16.000000, 138.000000)">
                                    <path d="M0,24.5714286 L3.42857143,24.5714286 L3.42857143,28 L5.71428571,28 L5.71428571,22.2857143 L0,22.2857143 L0,24.5714286 L0,24.5714286 Z M3.42857143,15.4285714 L0,15.4285714 L0,17.7142857 L5.71428571,17.7142857 L5.71428571,12 L3.42857143,12 L3.42857143,15.4285714 L3.42857143,15.4285714 Z M10.2857143,28 L12.5714286,28 L12.5714286,24.5714286 L16,24.5714286 L16,22.2857143 L10.2857143,22.2857143 L10.2857143,28 L10.2857143,28 Z M12.5714286,15.4285714 L12.5714286,12 L10.2857143,12 L10.2857143,17.7142857 L16,17.7142857 L16,15.4285714 L12.5714286,15.4285714 L12.5714286,15.4285714 Z" id="Shape"></path>
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
                        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <title>Bullet Icon</title>
                          <g id="Comp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.8">
                            <g id="Landing" transform="translate(-1012.000000, -2441.000000)" fill="#FFFFFF">
                              <g id="offerings-white" transform="translate(172.000000, 2045.000000)">
                                <g id="creative" transform="translate(824.000000, 246.000000)">
                                  <g id="bullets" transform="translate(16.000000, 138.000000)">
                                    <path d="M0,24.5714286 L3.42857143,24.5714286 L3.42857143,28 L5.71428571,28 L5.71428571,22.2857143 L0,22.2857143 L0,24.5714286 L0,24.5714286 Z M3.42857143,15.4285714 L0,15.4285714 L0,17.7142857 L5.71428571,17.7142857 L5.71428571,12 L3.42857143,12 L3.42857143,15.4285714 L3.42857143,15.4285714 Z M10.2857143,28 L12.5714286,28 L12.5714286,24.5714286 L16,24.5714286 L16,22.2857143 L10.2857143,22.2857143 L10.2857143,28 L10.2857143,28 Z M12.5714286,15.4285714 L12.5714286,12 L10.2857143,12 L10.2857143,17.7142857 L16,17.7142857 L16,15.4285714 L12.5714286,15.4285714 L12.5714286,15.4285714 Z" id="Shape"></path>
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

    <section id="clients" class="min-h-sm flex flex-col items-center justify-center container mx-auto">
      <div class="flex flex-col items-center">
          <h1 class="mb-8 uppercase text-xl md:text-3xl lg:text-5xl font-extrabold italic text-black">
            COMPANY WE KEEP
          </h1>
          <p class="w-2/3 text-center leading-normal text-sm text-charcoal-grey-64 font-medium">
            We pride ourselves on our diverse portfolio. From healthcare companies to industrial shops, we have had the opportunity to help grow impactful businesses.
          </p>
      </div>

      <div class="w-full flex flex-wrap justify-between items-center py-10">
        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:123px;height:24px" src="@/assets/img/aetna.svg" alt="Aetna Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:124px;height:38px" src="@/assets/img/carefree.svg" alt="CareFree Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:124.79px;height:19.9px" src="@/assets/img/csusb.png" alt="CSUSB Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:133px;height:52px" src="@/assets/img/calpoly.png" alt="Cal Poly Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:138px;height:22px;" src="@/assets/img/mutesix-logo.png" alt="Mutesix Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:123px;height:24px;" src="@/assets/img/auditme-logo.svg" alt="Audit.me Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
          <img style="width:123px;height:18px;" src="@/assets/img/datasix-logo.png" alt="Datasix Logo">
        </div>

        <div class="w-1/2 md:w-1/4 flex justify-center mb-10 grayscale">
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
          class="container w-full md:w-2/3 lg:w-1/2 mx-auto py-10 flex flex-col justify-center items-center"
        >
          <div class="flex w-full items-center">
            <div class="w-1/2 pr-8">
              <div class="mb-10">
                <label for="fullname" class="text-sm text-white">Full Name*</label>
                <input type="text" name="fullname" v-model="form.fullname" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Full Name">
              </div>

              <div class="mb-10">
                <label for="workemail" class="text-sm text-white">Work Email*</label>
                <input type="text" name="workemail" v-model="form.workemail" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Email Address">
              </div>
            </div>
            <div class="w-1/2 pr-8">
              <div class="mb-10">
                <label for="company" class="text-sm text-white">Company*</label>
                <input type="text" name="company" v-model="form.company" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="Company Name">
              </div>

              <div class="mb-10">
                <label for="phonenumber" class="text-sm text-white">Phone Number</label>
                <input type="text" name="phonenumber" v-model="form.phonenumber" class="w-full mt-4 text-sm focus:outline-none font-medium appearance-none text-white border-b bg-transparent border-grey-light" placeholder="(555) 555-5555">
              </div>
            </div>
          </div>

          <div class="w-full mt-6">
            <label for="message" class="text-xs text-white">Interested In*</label>
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
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">General:<a href="tel:808.218.8241" class="ml-2 text-blue underline tracking-wide">808.218.8241</a></p>
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">General:<a href="mailto:info@cion.agency" class="ml-2 text-blue underline tracking-wide">info@cion.agency</a></p>
                <p class="mt-3 text-grey-dark text-sm font-medium tracking-wide">Support:<a href="mailto:support@cion.agency" class="ml-2 text-blue underline tracking-wide">support@cion.agency</a></p>
              </div>
              <div class="mt-6 flex flex-col md:flex-row items-center md:items-start">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Follow Us</h3>
                  <div class="flex items-center pr-6 mt-4">
                    <a href="https://www.linkedin.com/company/cion-agency/" class="pr-5" target="_blank">
                      <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

                     <a href="https://github.com/ci-on" class="px-2" target="_blank">
                      <svg role="img" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub icon</title>
                        <path fill="#00BCD4" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Location</h3>
                  <div class="flex items-center mt-4">
                    <p class="font-medium text-sm text-grey-dark tracking-wide">Los Angeles, CA</p>
                  </div>
                  <div class="flex items-center mt-4">
                    <p class="font-medium text-sm text-grey-dark tracking-wide">Marrakech, Morocco</p>
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
                class="px-6 md:px-0 w-full md:w-2/3 flex flex-col md:flex-row items-center"
              >
                <div class="w-full flex-1">
                  <h3 class="text-xl font-extrabold italic text-black uppercase">Newsletter</h3>
                  <label for="workemail" class="hidden">Work Email</label>
                  <input name="workemail" v-model="form.workemail" type="text" class="focus:outline-none text-grey-dark text-sm mt-4 bg-transparent border-b border-grey w-full" placeholder="Email Address">
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
        fullname: "",
        workemail: "",
        company: "",
        phonenumber: "",
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
      if (!this.form.workemail || !this.form.fullname || !this.form.message) {
        Swal.fire({
          title: 'Something Went Wrong!',
          type: 'error'
        })
        return
      }

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
          fullname: "",
          workemail: "",
          company: "",
          phonenumber: "",
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
    background-image: url('../assets/img/digital.png');
    background-size: cover;
    box-shadow: 0 22px 22px -13px rgba(0,172,193,0.23), 0 33px 52px 0 rgba(0,172,193,0.18);
  }

  .bg-digital-color {
    background-color: #00BCD4;
    opacity: .9;
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
    background-color: #EE004A;
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
  }

  .grayscale {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
</style>
