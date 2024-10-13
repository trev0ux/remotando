// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: './assets/styles/globals.scss', lang: 'sass' }],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
  },
  modules: ['nuxt-icon',
    'nuxt3-leaflet',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
    ['nuxt-mail', {
      message: {
        to: 'lucas.lopes5@hotmail.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'dev.amorim18@gmail.com',
          pass: 'kyir yegq dgub cowq'
        },
      },
    }],
  ],
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
  },
  plugins: [
    { src: '~/plugins/leaflet-geosearch.ts', mode: 'client' },
    { src: '~/plugins/firebase.client.ts', mode: 'client'},
    '~/plugins/i18n-lang-storage.ts'
  ]
})