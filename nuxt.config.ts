// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['agnostic-vue/dist/common.min.css', 'agnostic-vue/dist/index.css', '~/styles/global.css']
})
