export default defineNuxtPlugin((nuxtApp) => {
  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    throw new Error("Nuxt Button Error")
  })
})
