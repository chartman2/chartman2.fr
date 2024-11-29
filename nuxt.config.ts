// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt3-aos',
    '@dargmuesli/nuxt-cookie-control',
    'nuxt-resend',
    '@nuxt/image',
  ],
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: '[title]' },
        { name: 'description', content: '[description]' },
        { name: 'og:title', content: '[og:title]' },
        { name: 'og:description', content: '[og:description]' },
        { name: 'og:image', content: '[og:image]' },
        { name: 'og:url', content: '[og:url]' },
        { name: 'twitter:title', content: '[twitter:title]' },
        { name: 'twitter:description', content: '[twitter:description]' },
        { name: 'twitter:image', content: '[twitter:image]' },
        { name: 'twitter:card', content: 'summary' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  site: {
    url: 'https://chartman2.fr',
    name: 'chartman2.fr',
    description: 'Mon site personnel',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },
  content: {
    watch: false,
    highlight: {
      langs: [
        'c',
        'cpp',
        'ruby',
        'shell',
        'yaml',
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
      ],
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
    markdown: {
      tags: {
        code: 'v-card',
      },
    },
  },
  vite: { // @see https://github.com/nuxt/nuxt/issues/27558
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        path: 'hmr/',
      },
    },
  },
  hooks: { // @see https://github.com/nuxt/nuxt/issues/27558
    'vite:extendConfig': (config) => {
      if (typeof config.server === 'object' && typeof config.server.hmr === 'object') {
        config.server.hmr.protocol = 'wss'
        config.server.hmr.clientPort = 443
        config.server.hmr.path = 'hmr/'
      }
    },
  },
  cookieControl: {
    cookies: {
      necessary: [
        {
          id: 'theme',
          name: 'Cookies par défaut',
          description: 'Préférence du thème (clair / sombre).',
        },
      ],
      optional: [],
    },

    // The locales to include.
    locales: ['fr'],
    localeTexts: {
      fr: {
        bannerDescription: 'Nous utilisons des cookies d’origine. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.',
      },
    },
  },
  dayjs: {
    locales: ['fr', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'fr',
    defaultTimezone: 'Europe/Paris',
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    defaultLocaleRouteNameSuffix: 'false',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: './vuetify.config.ts',
  },
})
