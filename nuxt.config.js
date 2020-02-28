export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'CION Agency',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'CION is a software development agency specializing in modern PHP, Laravel, Craft CMS, and Vue.js development'
      },
      { name: 'theme-color', content: '#00bcd4' },
      {
        name: 'keywords',
        content: 'CION,Website,Agency,Artificial Intelligence'
      },
      {
        name: 'description',
        content:
          'CION is a software development agency specializing in modern PHP, Laravel, Craft CMS, and Vue.js development'
      },
      {
        property: 'og:description',
        content:
          'CION is a software development agency specializing in modern PHP, Laravel, Craft CMS, and Vue.js development'
      },
      {
        property: 'og:title',
        content:
          'CION Agency | Product Development for Web & Mobile | Laravel + Vue.js | Artificial Intelligence'
      },
      {
        property: 'og:image',
        content: 'https://cion.agency/favicon/cion-logo.png'
      },
      { property: 'og:image:alt', content: 'CION Logo | Consulting Agency' },
      { property: 'og:url', content: 'https://cion.agency/' },
      { property: 'og:type', content: 'website' }
    ],

    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/cion-logo.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png'
      }
      // { rel: 'icon', type:"image/png", sizes:'192x192', href: '/favicon/android-icon-192x192.png' },
      // { rel: 'icon', type:"image/png", sizes:'32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type:"image/png", sizes:'96x96', href: '/favicon-96x96.png' },
      // { rel: 'icon', type:"image/png", sizes:'16x16', href: '/favicon-16x16.png' }
    ],

    script: [
      {
        hid: 'fathom-analytics',
        innerHTML: `
(function(f, a, t, h, o, m){
a[h]=a[h]||function(){
(a[h].q=a[h].q||[]).push(arguments)
};
o=f.createElement('script'),
m=f.getElementsByTagName('script')[0];
o.async=1; o.src=t; o.id='fathom-script';
m.parentNode.insertBefore(o,m)
})(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
fathom('set', 'siteId', 'JXUSBEEK');
fathom('trackPageview');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
