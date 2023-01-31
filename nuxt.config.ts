// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      'stores',
    ]
  },
  modules: [
    '@unocss/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          'storeToRefs',
        ]
      }
    ]
  ]
})
