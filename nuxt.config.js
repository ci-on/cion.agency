const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CION Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#00bcd4'},
      { name: 'keywords', content: 'CION,Website,Agency'},
      { name: 'description', content: 'CION is a software development agency specializing in PHP, Laravel, Craft CMS, and Vue.js development'},
      { name: 'og:description', content: 'CION is a software development agency specializing in PHP, Laravel, Craft CMS, and Vue.js development'},
      { name: 'og:title', content: 'CION | Product Development for Web + Mobile | Laravel + Vue.js'},
      { name: 'og:image' , content: './assets/img/cion-logo.svg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' },
      { rel: 'apple-touch-icon', sizes:"57x57", href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:"60x60", href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:"72x72", href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:"76x76", href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes:"114x114", href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes:"120x120", href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes:"144x144", href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes:"152x152", href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes:"180x180", href: '/favicon/apple-icon-180x180.png' },
      // { rel: 'icon', type:"image/png", sizes:'192x192', href: '/favicon/android-icon-192x192.png' },
      // { rel: 'icon', type:"image/png", sizes:'32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type:"image/png", sizes:'96x96', href: '/favicon-96x96.png' },
      // { rel: 'icon', type:"image/png", sizes:'16x16', href: '/favicon-16x16.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-smooth-scroll'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
