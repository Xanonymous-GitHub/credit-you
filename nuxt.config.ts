export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'CreditYou',
    }
  },
  nitro: {
    experimental: {
      wasm: true,
    },
  },
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  }
})
