import * as Sentry from "@sentry/nuxt"
import dotenv from "dotenv"
 
dotenv.config()

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: "http://207309d46a814f3fa84114993b235467@glitchtip-192-168-1-220.traefik.me/1",

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  })
}
