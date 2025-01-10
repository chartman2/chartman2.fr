import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://207309d46a814f3fa84114993b235467@glitchtip.cyric.lan/1",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
