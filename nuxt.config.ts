export default defineNuxtConfig({
  devtools: { enabled: true },
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
