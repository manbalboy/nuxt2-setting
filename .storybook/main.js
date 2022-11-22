const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path');

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // extend config here


    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../src'),
    // });

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@': path.resolve(__dirname, '../src'),
    //   vue$: 'vue/dist/vue.esm.js'
    // };

    return config
  },
  addons: ['@storybook/addon-controls', '@storybook/addon-notes', '@storybook/addon-jest'],
  stories: ['../src/__stories__/**/*.stories.@(ts|js)'],
})
