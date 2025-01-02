import * as Sentry from "@sentry/nuxt"

const config = useRuntimeConfig()

if (config.public.SENTRY_DSN && typeof config.public.SENTRY_DSN == 'string') {
  Sentry.init({
    // If set up, you can use the Nuxt runtime config here
    // dsn: useRuntimeConfig().public.sentry.dsn, // modify, depending on your custom runtime config
    dsn: config.public.SENTRY_DSN,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  })
}