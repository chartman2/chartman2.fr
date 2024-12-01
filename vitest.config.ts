import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  plugins: [
  ],
  test: {
    environment: 'nuxt',
    testTimeout: 600000,
    mockReset: true,
    environmentOptions: {
        nuxt: {
          domEnvironment: 'happy-dom',
          
          mock: {
            intersectionObserver: true,
            indexedDb: true,
          },
        },
    },
    globals: true,
    include: ['tests/**/*.spec.ts'],
    exclude: ['api', '.nuxt', 'server', 'middleware', 'layouts', 'tests', '*.config.ts', '*.d.ts', 'app.vue'],
    coverage: {
        reporter: 'lcov',
        provider: 'v8',
        include: ['components', 'composables', 'stores', 'pages', 'app'],
        all: true
    }
  }
})