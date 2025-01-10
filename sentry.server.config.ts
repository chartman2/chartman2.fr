import * as Sentry from "@sentry/nuxt"

const config = useRuntimeConfig()

if (config.public.SENTRY_DSN && typeof config.public.SENTRY_DSN == 'string') {
  console.log(config.public.SENTRY_DSN)
  Sentry.init({
    dsn: config.public.SENTRY_DSN,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    
  })
}