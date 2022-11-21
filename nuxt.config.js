export default {
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
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/postcss8'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Storybook 관련
  storybook: {
    addons: ['@storybook/addon-controls', '@storybook/addon-notes', '@storybook/addon-jest', 'storybook-code-panel'],
    stories: ['~/__stories__/**/*.stories.@(ts|js)'],
    parameters: {
      storybookCodePanel: {
        disabled: false,
        allowedExtensions: ['scss', 'css', 'js', 'json', 'vue'],
      },
    },
  },
};
