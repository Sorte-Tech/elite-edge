import { resolve } from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Elite Edge || Media Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  alias: {
    png: resolve(__dirname, './assets/images/png'),
    svg: resolve(__dirname, './assets/images/svg'),
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/scss/imports.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  gsap: {
    extraPlugins: {
      /*
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      draggable: true,
      motionPath: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/functions.scss'],
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['gsap'],
  },
}
