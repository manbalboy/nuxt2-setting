export default {
  // ssr: false,
  // 루트 디렉토리
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-setting',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/demo.css',
    'assets/css/font-awesome.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard-pro.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~plugins/mock.js', mode: 'client' } mock service worker (backend 없을 때 사용)
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000/',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxt/postcss8'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules // fixes https://github.com/graphql/graphql-js/issues/1272
        .push({ test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' });

      if (!ctx.isServer) {
        config.devtool = '#source-map';
      }
    },
  },

  // Storybook 관련
  // 확장 모듈
  // storybook: {
  //   //, 'storybook-code-panel'
  //   addons: ['@storybook/addon-controls', '@storybook/addon-notes', '@storybook/addon-jest'],
  //   stories: ['~/__stories__/**/*.stories.@(ts|js)'],
  //   // parameters: {
  //   //   storybookCodePanel: {
  //   //     disabled: false,
  //   //     allowedExtensions: ['scss', 'css', 'js', 'json', 'vue'],
  //   //   },
  //   // },
  // },

  router: {
    middleware: 'setVisible',
  },
};
