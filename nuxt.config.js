export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cabe no seu Bolso' || process.env.npm_package_name,
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  target: 'static',
  port: 3030,
  /**
   * environment variables
  */
  env: {
    PACKAGE_VERSION: '"' + process.env.npm_package_version + '"',
    PACKAGE_NAME: '"' + process.env.npm_package_name + '"'
  },
  styleResources: {
    scss: [
      './assets/scss/*.*'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/filters.js',
    '@/plugins/utils.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  router: {
    base: process.env.NUXT_ENV_SETUP === 'production' ? '/work/CabeNoBolso' : '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://rafael.abc.br/work/CabeNoBolso/'
  }
}
