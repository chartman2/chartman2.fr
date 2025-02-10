import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: [
      'pages/sentry-example-page.vue',
      'nuxt.config.ts',
      'layouts/default.vue',
      'components/content/ProsePre.vue',
      'components/partial/main/technologies.vue',
      'error.vue',
    ],
  },
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
