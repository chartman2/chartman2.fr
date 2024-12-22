import * as Sentry from '@sentry/nuxt';

// Only run `init` when process.env.SENTRY_DSN is available.
if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: 'http://172.27.0.57/9000'
  });
}
